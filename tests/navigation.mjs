import assert from 'node:assert/strict';
const {chromium}=await import(process.env.ANA_PLAYWRIGHT_MODULE || 'playwright');
const base=process.env.ANA_TEST_BASE_URL || 'http://127.0.0.1:18770';
const paths=['/','/About/','/Ways-of-Living/','/Map/','/Foundations/freedom-is-love.html','/Ways-of-Living/the-body-as-home/somatic-awareness.html','/Ways-of-Living/the-body-as-home/beginning-with-the-bodys-own-waters.html','/sovereign-biophysics-distillation/','/sovereign-biophysics-distillation/00-orientation/golden-lexicon.html','/sovereign-biophysics-distillation/00-orientation/how-to-read-this.html','/sovereign-biophysics-distillation/00-orientation/manifesto-clear-mirror.html','/sovereign-biophysics-distillation/00-orientation/shivambu.html','/sovereign-biophysics-distillation/00-orientation/the-first-water.html','/sovereign-biophysics-distillation/00-orientation/the-jar-held-to-the-light.html','/sovereign-biophysics-distillation/00-orientation/women-of-alchemy.html','/sovereign-biophysics-distillation/30-analysis/analysis-reich-bion-blue-luminosity.html','/work-with-ana/','/work-with-ana/shivambu-beginning/','/work-with-ana/somatic-awareness/'];
const browser=await chromium.launch({executablePath:process.env.ANA_TEST_CHROME || undefined,args:['--no-sandbox']});
try {
 const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
 // Do not submit or trigger third-party services during navigation checks.
 await context.route('**/*',route=>new URL(route.request().url()).origin===new URL(base).origin?route.continue():route.abort());
 const page=await context.newPage();const failures=[];
 page.on('response',r=>{if(r.url().startsWith(base)&&r.status()>=400)failures.push(r.url());});
 for(const width of [320,390,1440])for(const theme of ['light','dark']){
  await page.setViewportSize({width,height:900});
  await context.addInitScript(t=>localStorage.setItem('ana-theme',t),theme);
  for(const path of paths){
   const response=await page.goto(base+path);assert.equal(response.status(),200,path);
   assert.equal(await page.locator('html').getAttribute('data-theme'),theme);
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`horizontal overflow: ${width} ${theme} ${path}`);
   assert.equal(await page.locator('nav.site-nav a[href="/About/"]').count(),1,path);
   assert.equal(await page.locator('.preview-banner,link[href="/preview.css"],script[src="/preview.js"],meta[name="robots"][content*="noindex"]').count(),0);
   if(width<761){
    const button=page.getByRole('button',{name:'Menu'});await button.click();
    assert.equal(await button.getAttribute('aria-expanded'),'true');
    for(const label of ['About','Reading Room','Map','Work with Ana'])assert.ok(await page.locator('#primary-menu').getByRole('link',{name:label,exact:true}).isVisible());
    await page.keyboard.press('Escape');assert.equal(await button.getAttribute('aria-expanded'),'false');
   }
  }
 }
 await page.setViewportSize({width:390,height:844});await page.goto(base+'/');
 assert.equal(await page.locator('.intro-copy > p').first().textContent(),'Research, practice and relationship become forms through which the intelligence of the body can be observed, given language and space to live and evolve.');
 assert.equal(await page.locator('#reading-room .room-card').count(),2);
 assert.equal(await page.locator('.feature-lexicon').count(),0);
 assert.equal(await page.locator('form[action="https://app.kit.com/forms/9877706/subscriptions"]').count(),1);
 await page.locator('.intro-copy').getByRole('link',{name:'About',exact:true}).click();await page.waitForURL('**/About/');
 await page.locator('#foundations').getByRole('link',{name:/Freedom Is Love/}).click();await page.waitForURL('**/Foundations/freedom-is-love.html');
 await page.getByRole('link',{name:'← About · Foundations',exact:true}).click();await page.waitForURL('**/About/#foundations');
 for(const title of [/Somatic Awareness/,/Beginning with the Body/]){
  await page.goto(base+'/Ways-of-Living/');await page.getByRole('link',{name:title}).click();
  assert.equal(await page.locator('.site-section').getAttribute('href'),'/Ways-of-Living/');
  await page.getByRole('link',{name:'← Ways of Living',exact:true}).click();await page.waitForURL('**/Ways-of-Living/');
 }
 const before=await page.locator('html').getAttribute('data-theme');await page.getByRole('button',{name:/Switch to .* theme/}).click();assert.notEqual(await page.locator('html').getAttribute('data-theme'),before);
 assert.deepEqual(failures,[]);
 const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const plain=await noJS.newPage();await plain.goto(base+'/');
 for(const name of ['About','Reading Room','Map','Work with Ana'])assert.ok(await plain.locator('#primary-menu').getByRole('link',{name,exact:true}).isVisible(),`no-JS link ${name}`);
 console.log(`PASS: ${paths.length*3*2} page/viewport/theme combinations; menu/Escape; story/Foundation and essay return paths; theme toggle; original intro and subscription form; no-JS menu; local assets.`);
} finally {await browser.close();}
