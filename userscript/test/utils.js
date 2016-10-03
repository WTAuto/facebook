import fs from 'fs';
import cheerio from 'cheerio';

export function $ (html) {
    return { find: cheerio.load(html) };
}

export function loadFixture (name) {
    return $(fs.readFileSync('./test/fixtures/' + name + '.html').toString());
}