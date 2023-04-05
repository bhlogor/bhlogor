export default function handler(req: any, res: any) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')
    res.setHeader('Cache-control', 'stale-while-revalidate, s-maxage=3600')
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
    <url>
       <loc>https://post-example.vercel.app</loc>
       <lastmod>2005-01-01</lastmod>
       <changefreq>monthly</changefreq>
       <priority>0.8</priority>
      </url>
      <url>
        <loc>https://post-example.vercel.app/cara-install-next-js</loc>
        <lastmod>2023-04-13</lastmod>
      </url>
      <url>
        <loc>https://post-example.vercel.app/apa-itu-next-js</loc>
        <lastmod>2023-04-12</lastmod>
     </url>
    </urlset>`
    res.end(xml)
  }