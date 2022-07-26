/**
 *
 * @param req
 * @param res
 */
export default async function handler(req, res) {

    res.statusCode = 200
    res.setHeader('Content-Type', 'text/xml')

    // todo: check your url dynamic or static?

    // get all records
    const urls = [];

    res.end(
        `<?xml version="1.0" encoding="UTF-8"?>
            <sitemapindex xmlns="https://www.google.com/schemas/sitemap/0.84">
              <sitemap>
                ${urls.map(url => `<loc>https://${req.headers.host + url}</loc>`).join('')}
              </sitemap>
            </sitemapindex>`
    )
}