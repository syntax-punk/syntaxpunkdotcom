import { NextApiRequest, NextApiResponse } from 'next';
import { EMAIL_REGEX, databaseId, getNotionClient, findSubscriberPageId } from '../../lib/notion';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ status: 'error' });
  }

  const { email, source } = req.body ?? {};

  if (typeof email !== 'string' || !EMAIL_REGEX.test(email)) {
    return res.status(400).json({ status: 'invalid_email' });
  }

  try {
    const existingPageId = await findSubscriberPageId(email);

    if (existingPageId) {
      return res.status(200).json({ status: 'already_subscribed' });
    }

    await getNotionClient().pages.create({
      parent: { database_id: databaseId },
      properties: {
        Email: {
          rich_text: [{ text: { content: email } }],
        },
        'Subscribed At': {
          date: { start: new Date().toISOString() },
        },
        Source: {
          rich_text: [
            {
              text: {
                content: typeof source === 'string' ? source : 'unknown',
              },
            },
          ],
        },
        Unsubscribed: {
          checkbox: false,
        },
      },
    });

    return res.status(200).json({ status: 'subscribed' });
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return res.status(500).json({ status: 'error' });
  }
}
