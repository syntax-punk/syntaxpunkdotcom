import { Resend } from 'resend';
import { getSortedPostsData } from '../lib/posts';
import { getActiveSubscribers } from '../lib/notion';
import { createUnsubscribeToken } from '../lib/unsubscribeToken';

type Post = {
  id: string;
  title: string;
  short: string;
};

const SITE_URL = process.env.SITE_URL as string;
const BATCH_SIZE = 100;

function buildEmailHtml(posts: Post[], recipient: string): string {
  const items = posts
    .map(
      (post) => `
        <li>
          <a href="${SITE_URL}/blog/${post.id}">${post.title}</a>
          <p>${post.short}</p>
        </li>`
    )
    .join('');

  const unsubscribeUrl = `${SITE_URL}/api/unsubscribe?email=${encodeURIComponent(
    recipient
  )}&token=${createUnsubscribeToken(recipient)}`;

  return `
    <div>
      <p>New on the blog:</p>
      <ul>${items}</ul>
      <p><a href="${unsubscribeUrl}">Unsubscribe</a></p>
    </div>
  `;
}

async function main() {
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const newPosts = getSortedPostsData().filter((post) => post.date === yesterday);

  if (newPosts.length === 0) {
    console.log('No new posts from yesterday — nothing to send.');
    return;
  }

  const recipients = await getActiveSubscribers();

  if (recipients.length === 0) {
    console.log('No active subscribers — nothing to send.');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const from = process.env.RESEND_FROM_EMAIL as string;
  const subject = newPosts.length === 1 ? `New post: ${newPosts[0].title}` : 'New posts on the blog';

  let failedCount = 0;

  for (let i = 0; i < recipients.length; i += BATCH_SIZE) {
    const chunk = recipients.slice(i, i + BATCH_SIZE);
    const { error } = await resend.batch.send(
      chunk.map((to) => ({
        from,
        to,
        subject,
        html: buildEmailHtml(newPosts, to),
      }))
    );

    if (error) {
      failedCount += chunk.length;
      console.error(`Batch send failed for recipients ${i}-${i + chunk.length}:`, error);
    }
  }

  console.log(
    `Sent ${newPosts.length} post(s) to ${recipients.length - failedCount}/${recipients.length} subscribers.`
  );

  if (failedCount > 0) {
    process.exitCode = 1;
  }
}

main().catch((error) => {
  console.error('Newsletter script failed:', error);
  process.exitCode = 1;
});
