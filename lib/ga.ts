//  Pageview tracking via Google Analytics
function pageView(url: string): void {
  if (window !== undefined) {
    const globalAny = window as any;
    if (globalAny.gtag !== undefined) {
      globalAny.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
        page_path: url
      })
    }
  }
}

//  Event tracking via Google Analytics
function fireEvent({ action, params }: { action: unknown, params: unknown }): void {
  if (window !== undefined) {
    const globalAny = window as any;
    if (globalAny.gtag !== undefined) {
      globalAny.gtag('event', action, params)
    }
  }
}

export { pageView, fireEvent }