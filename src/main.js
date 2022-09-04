const {chromium, firefox, webkit} = require('playwright');

// 网页拍照

async function run() {
	// 无头浏览器
	// const browser = await chromium.launch();
	// const browser = await webkit.launch();

  // 有头浏览器
	const browser = await chromium.launch({headless:false, slowMo:100});

	const context = await browser.newContext({
		viewport: {
			width: 750,
			height: 750,
		}
	});

	// 页面访问
	const page = await context.newPage();
	await page.goto('https://www.google.co.jp');
	await page.screenshot({path:`outtest.png`});
	await browser.close();
	console.log('Done!');

}

run()