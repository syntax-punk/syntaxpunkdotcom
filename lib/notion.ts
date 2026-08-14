import { Client } from '@notionhq/client';

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const databaseId = process.env.NOTION_DATABASE_ID as string;

let client: Client | null = null;

export function getNotionClient(): Client {
  if (!client) {
    client = new Client({ auth: process.env.NOTION_API_KEY });
  }
  return client;
}

let dataSourceId: string | null = null;

export async function getDataSourceId(): Promise<string> {
  if (dataSourceId) return dataSourceId;

  const database = await getNotionClient().databases.retrieve({
    database_id: databaseId,
  });
  if (!('data_sources' in database)) {
    throw new Error('Notion database has no data sources');
  }
  dataSourceId = database.data_sources[0].id;
  return dataSourceId;
}

export async function findSubscriberPageId(email: string): Promise<string | null> {
  const notion = getNotionClient();
  const dataSource = await getDataSourceId();

  const existing = await notion.dataSources.query({
    data_source_id: dataSource,
    filter: {
      property: 'Email',
      rich_text: {
        equals: email,
      },
    },
  });

  return existing.results[0]?.id ?? null;
}

export async function getActiveSubscribers(): Promise<string[]> {
  const notion = getNotionClient();
  const dataSource = await getDataSourceId();

  const emails: string[] = [];
  let cursor: string | undefined;

  do {
    const page = await notion.dataSources.query({
      data_source_id: dataSource,
      filter: {
        property: 'Unsubscribed',
        checkbox: {
          equals: false,
        },
      },
      start_cursor: cursor,
      page_size: 100,
    });

    for (const result of page.results) {
      if (!('properties' in result)) continue;
      const emailProperty = result.properties.Email;
      if (emailProperty?.type !== 'rich_text') continue;
      const email = emailProperty.rich_text[0]?.plain_text;
      if (email) emails.push(email);
    }

    cursor = page.has_more ? (page.next_cursor ?? undefined) : undefined;
  } while (cursor);

  return emails;
}
