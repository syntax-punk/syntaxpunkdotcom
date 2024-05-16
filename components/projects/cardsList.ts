export type CardListItem = {
  type: "web" | "ios" | "other";
  imageUrl: string;
  gotoUrl: string;
  altText: string;
  title: string;
  logos: string[];
}

export const cardsList: CardListItem[] = [
  {
    type: "ios",
    imageUrl: "zenelements.png",
    gotoUrl: "https://syntaxpunk.com/projects/ios/zen-elements",
    altText: "labeler app image",
    title: "zen elements",
    logos: ["swift.png"]
  },
  {
    type: "web",
    imageUrl: "www2pdf.png",
    gotoUrl: "https://www2pdf.syntaxpunk.com",
    altText: "convert web page to pdf",
    title: "convert web page to pdf",
    logos: ["docker.png", "flyio.png", "react.png", "netlify.png"]
  },
  {
    type: "web",
    imageUrl: "thehub.png",
    gotoUrl: "https://thehub.syntaxpunk.com",
    altText: "the Hub image",
    title: "theHub",
    logos: ["react.png", "csharp.png", "netcore.png", "docker.png", "flyio.png"]
  },
  {
    type: "web",
    imageUrl: "pixelbrush.png",
    gotoUrl: "https://pixelbrush.syntaxpunk.com",
    altText: "Pixel Brush app image",
    title: "pixel brush",
    logos: ["svelte.png", "netlify.png", "firebase.png"]
  },
  {
    type: "web",
    imageUrl: "urlzipr.png",
    gotoUrl: "https://urlzipr.syntaxpunk.com",
    altText: "URL zipper app image",
    title: "URL Zipper",
    logos: ["svelte.png", "netlify.png", "firebase.png"]
  },
  {
    type: "web",
    imageUrl: "wordpuff.png",
    gotoUrl: "https://wordpuff.com",
    altText: "WordPuff image",
    title: "WordPuff",
    logos: ["react.png", "mui.png", "vite.png", "firebase.png"]
  },
  {
    type: "web",
    imageUrl: "ipsumshop.png",
    gotoUrl: "https://ipsumshop.syntaxpunk.com",
    altText: "ipsum web app image",
    title: "lorem ipsum shop",
    logos: ["stripe.png", "netlify.png"]
  },
  {
    type: "web",
    imageUrl: "labeler.png",
    gotoUrl: "https://labeler.syntaxpunk.com/about",
    altText: "labeler app image",
    title: "labeler",
    logos: ["react.png", "netlify.png"]
  },
  {
    type: "web",
    imageUrl: "todo.png",
    gotoUrl: "https://todoapp.syntaxpunk.com",
    altText: "Todo app image",
    title: "Yet another Todo app",
    logos: ["react.png", "netlify.png", "firebase.png"]
  },
  {
    type: "other",
    imageUrl: "rddt.png",
    gotoUrl: "https://marketplace.visualstudio.com/items?itemName=syntax-punk.reddot",
    altText: "VS Code theme image",
    title: "Red Dot theme",
    logos: ["ts.png"]
  },
]
