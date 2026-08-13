import { NextApiRequest, NextApiResponse } from 'next';
import { Client } from '@notionhq/client';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

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
    const database = await notion.databases.retrieve({
      database_id: databaseId,
    });
    if (!('data_sources' in database)) {
      throw new Error('Notion database has no data sources');
    }
    const dataSourceId = database.data_sources[0].id;

    const existing = await notion.dataSources.query({
      data_source_id: dataSourceId,
      filter: {
        property: 'Email',
        rich_text: {
          equals: email,
        },
      },
    });

    if (existing.results.length > 0) {
      return res.status(200).json({ status: 'already_subscribed' });
    }

    await notion.pages.create({
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
      },
    });

    return res.status(200).json({ status: 'subscribed' });
  } catch (error) {
    console.error('Newsletter subscribe error:', error);
    return res.status(500).json({ status: 'error' });
  }
}
