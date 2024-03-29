import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch({
    args: [
      '--font-render-hinting=none',
      '--disable-font-subpixel-positioning',
    ],
  });
  const page = await browser.newPage();

  await page.setViewportSize({
    width: 1024,
    height: 768,
  });
  await page.goto('http://localhost:4321/', { waitUntil: 'networkidle' });

  const downloadButton = page.locator('a.download');
  await downloadButton.evaluate((node) => (node.innerHTML = ''));

  const body = page.locator('body');
  await body.evaluate((node) => node.classList.remove('bg-indigo-50'));

  await page.pdf({
    path: 'public/resume.pdf',
    margin: {
      top: '50px',
      bottom: '80px',
    },
    printBackground: true,
  });

  await browser.close();
})();
