Node.js Playwright - 自动化Web测试框架，来自微软公司的无头浏览器
https://www.youtube.com/watch?v=0gR4oV8jX_o

https://www.youtube.com/watch?v=2_BPIA5RgXU&list=PLkiSKDHzztLAChyWRdYyFcIM-_yJTjrsR




mkdir myapp
cd myapp/
npm init -y
npm i playwright --save
npm i -D @playwright/test

新建main.js  用于打开一个网页给定宽高（）并拍照
node main.js

新建demo.js  

打开网站 http://tools.komavideo.com/#/home/index
# npx playwright codegen "http://tools.komavideo.com/#/home/index"
# npx playwright codegen "https://www.powercosts.com/"


运行上面的代码 在网站做一系列的操作 会记录这些操作并生成代码
将这些代码保存成文件

加入延时
await page.waitForTimeout(3000);


运行测试
npx playwright test demo.spec.ts --debug

npx playwright test

npx playwright show-report