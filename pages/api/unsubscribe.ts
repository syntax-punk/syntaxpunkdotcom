import { NextApiRequest, NextApiResponse } from 'next';
import { EMAIL_REGEX, getNotionClient, findSubscriberPageId } from '../../lib/notion';
import { verifyUnsubscribeToken } from '../../lib/unsubscribeToken';

function htmlPage(message: string) {
  return `<!DOCTYPE html><html><body><p>${message}</p></body></html>`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Content-Type', 'text/html');

  const email = req.query.email;
  const token = req.query.token;

  if (typeof email !== 'string' || typeof token !== 'string' || !EMAIL_REGEX.test(email)) {
    return res.status(400).send(htmlPage("That unsubscribe link isn't valid."));
  }

  if (!verifyUnsubscribeToken(email, token)) {
    return res.status(400).send(htmlPage("That unsubscribe link isn't valid."));
  }

  try {
    const pageId = await findSubscriberPageId(email);
    if (pageId) {
      await getNotionClient().pages.update({
        page_id: pageId,
        properties: {
          Unsubscribed: { checkbox: true },
        },
      });
    }

    return res.status(200).send(htmlPage("You've been unsubscribed."));
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return res.status(500).send(htmlPage('Something went wrong. Please try again later.'));
  }
}
