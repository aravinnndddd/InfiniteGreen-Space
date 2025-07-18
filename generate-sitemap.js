import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const sitemap = new SitemapStream({ hostname: 'https://infinitegreenspace.vercel.app' });

sitemap.write({ url: '/', changefreq: 'daily', priority: 1.0 });
// Add more pages manually or dynamically here

sitemap.end();

streamToPromise(sitemap).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
});
