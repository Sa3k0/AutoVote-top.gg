const puppeteer = require('puppeteer');
const { BOT_ID, BOT_NAME, COOKIE } = require('./config.json');
const logger = require('./logger.js');

if (!BOT_ID) return logger.err('Erreur Config BOT_ID');
if (!BOT_NAME) return logger.err('Erreur Config BOT_NAME');
if (!COOKIE) return logger.err('Erreur Config COOKIE');

async function vote() {
	logger.try(`Tentative de vote pour ${BOT_NAME}...`);

	const browser = await puppeteer.launch({ headless: false, args: ['--window-size=0,300'] });
	const page = (await browser.pages())[0];

	await page.setCookie({ name: 'connect.sid', value: COOKIE, domain: 'top.gg', path: '/' });
	await page.goto(`https://top.gg/bot/${BOT_ID}/vote`);

	await new Promise((resolve)=>setTimeout(() => {
		page.click('#votingvoted');
        resolve();
	}, 10000));

	await new Promise((resolve)=>setTimeout(() => {
		logger.succ(`Vous venez de voter pour ${BOT_NAME}!`);
		browser.close()
		logger.info('Vous devez attendre 12h.');
        resolve();
	}, 2000));
}
vote();

setInterval(() => {
	vote();
}, 1000 * 60 * 60 * 12);
