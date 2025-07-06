export default function robot() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: []
    },
    sitemap: 'https://www.sidiqyanuar.vercel.app/sitemap.xml'
  }
}