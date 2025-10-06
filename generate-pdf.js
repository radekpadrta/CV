const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlPath = 'file://' + path.resolve(__dirname, 'index.html');
  await page.goto(htmlPath, { waitUntil: 'networkidle0' });

  // Wait for images to load
  await page.evaluate(() => {
    return Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(resolve => {
          img.onload = img.onerror = resolve;
        }))
    );
  });

  // Add small delay to ensure rendering is complete
  await new Promise(resolve => setTimeout(resolve, 1000));

  await page.pdf({
    path: 'RadekPadrta_CV.pdf',
    format: 'A4',
    printBackground: true,
    preferCSSPageSize: false,
    margin: {
      top: '15mm',
      right: '15mm',
      bottom: '15mm',
      left: '15mm'
    }
  });

  console.log('PDF generated successfully: RadekPadrta_CV.pdf');
  await browser.close();
})();
