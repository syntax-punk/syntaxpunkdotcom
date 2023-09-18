export type CardListItem = {
  imageUrl: string;
  gotoUrl: string;
  altText: string;
  title: string;
  logos: string[];
}

export const cardsList: CardListItem[] = [
  {
    imageUrl: "todo.png",
    gotoUrl: "https://todoapp.syntaxpunk.com",
    altText: "Todo app image",
    title: "Yet another Todo app",
    logos: ["react.png", "netlify.png", "firebase.png"]
  },
  {
    imageUrl: "urlzipr.png",
    gotoUrl: "https://urlzipr.com",
    altText: "URL zipper app image",
    title: "URL Zipper",
    logos: ["svelte.png", "netlify.png", "firebase.png"]
  },
  {
    imageUrl: "wordpuff.png",
    gotoUrl: "https://wordpuff.com",
    altText: "WordPuff image",
    title: "WordPuff",
    logos: ["react.png", "mui.png", "vite.png", "firebase.png"]
  },
  {
    imageUrl: "thehub.png",
    gotoUrl: "https://thehub.syntaxpunk.com",
    altText: "the Hub image",
    title: "theHub",
    logos: ["react.png", "csharp.png", "netcore.png", "docker.png", "flyio.png"]
  },
  {
    imageUrl: "pixelbrush.png",
    gotoUrl: "https://pixelbrush.syntaxpunk.com",
    altText: "Pixel Brush app image",
    title: "pixel brush",
    logos: ["svelte.png", "netlify.png", "firebase.png"]
  },
  {
    imageUrl: "labeler.png",
    gotoUrl: "https://labeler.syntaxpunk.com/about",
    altText: "labeler app image",
    title: "labeler",
    logos: ["react.png", "netlify.png"]
  },
]
