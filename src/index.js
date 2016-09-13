import cheerio from 'cheerio';
import fs from 'fs';

export default ({ ignore = null, cookieName = 'magic-assets' } = {}) => {
  const cache = Object.create(null);
  const primer = new Buffer(fs.readSync(`${__dirname}/primer.js`)).toString('utf8'); // eslint-disable no-sync
  return async function magicAssets(body, cookies) {
    const $ = cheerio.load(body);
    const scripts = $('script[src]');
    const styleSheets = $('link[rel=stylesheet,href]');
  };
}
