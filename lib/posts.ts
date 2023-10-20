import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import MarkdownIt from 'markdown-it'
import MarkdownItAttrs from 'markdown-it-attrs'
import MarkdownItHighlight from 'markdown-it-highlightjs'
import hljs from 'highlight.js'

const postsDirectory = path.join(process.cwd(), 'posts')

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Only process .md files
    if (!fileName.endsWith('.md')) return null;

    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    
    //  Get hashtags list
    const hashtags = matterResult
      .data
      .hashtags
      .split(',')
      .map((item: string) => `#${item.trim()}`);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as { date: string; title: string, short: string }),
      hashtags
    }
  })
  // Sort posts by date
  return allPostsData
  .filter(Boolean)
  .sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  
  hljs.registerLanguage(
    'js',
    require('highlight.js/lib/languages/javascript')
  )

  const md = new MarkdownIt()
  .use(MarkdownItHighlight, {
    hljs
  })
  .use(MarkdownItAttrs);

  const contentHtml = md.render(matterResult.content);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string, short: string })
  }
}