import assert from 'node:assert/strict';
const {chromium}=await import(process.env.ANA_PLAYWRIGHT_MODULE || 'playwright');
const base=process.env.ANA_TEST_BASE_URL || 'http://127.0.0.1:18770';
const tortoisePath='/sovereign-biophysics-distillation/00-orientation/the-tortoise-in-the-bowl.html';
const tortoiseNotesPath=tortoisePath.replace('.html','-notes.html');
const paths=['/','/Shivambu/','/About/','/Ways-of-Living/','/Writing/','/conversations/','/The-Living-Year/','/The-Living-Year/keeping-the-year/','/The-Living-Year/living-waters/','/The-Living-Year/shivambu-beginning/','/The-Living-Year/somatic-awareness/','/Foundations/freedom-is-love.html','/Ways-of-Living/the-body-as-home/somatic-awareness.html','/Ways-of-Living/the-body-as-home/beginning-with-the-bodys-own-waters.html','/sovereign-biophysics-distillation/','/sovereign-biophysics-distillation/00-orientation/golden-lexicon.html','/sovereign-biophysics-distillation/00-orientation/how-to-read-this.html','/sovereign-biophysics-distillation/00-orientation/manifesto-clear-mirror.html','/sovereign-biophysics-distillation/00-orientation/shivambu.html','/sovereign-biophysics-distillation/00-orientation/the-first-water.html','/sovereign-biophysics-distillation/00-orientation/the-jar-held-to-the-light.html',tortoisePath,tortoiseNotesPath,'/sovereign-biophysics-distillation/00-orientation/women-of-alchemy.html','/sovereign-biophysics-distillation/30-analysis/analysis-reich-bion-blue-luminosity.html'];
const menuLabels=['The Living Year','Writing','Conversations & Circles','About'];
// Retired URLs are redirect stubs; each must land on its current page.
const redirects=[['/Map/','/Writing/'],['/work-with-ana/','/conversations/'],['/work-with-ana/shivambu-beginning/','/The-Living-Year/shivambu-beginning/'],['/work-with-ana/somatic-awareness/','/The-Living-Year/somatic-awareness/'],['/Consultations/','/conversations/']];
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
   if(path===tortoisePath){
    const cover=page.locator('.tortoise-hero .field-plate');
    const visibleArt=cover.locator(`.field-art--${theme} img`);
    const hiddenArt=cover.locator(`.field-art--${theme==='light'?'dark':'light'} img`);
    assert.ok(await visibleArt.isVisible(),`cover image visible in ${theme}`);
    assert.ok(await visibleArt.evaluate(img=>img.complete && img.naturalWidth>0),`cover image loaded in ${theme}`);
    assert.ok(await hiddenArt.isHidden(),`one cover image visible in ${theme}`);
    const copyBox=await page.locator('.tortoise-hero .hero-copy').boundingBox();
    const coverBox=await cover.boundingBox();
    if(width>900) assert.ok(coverBox.x>=copyBox.x+copyBox.width,'cover sits right of the title on desktop');
    else assert.ok(coverBox.y>=copyBox.y+copyBox.height,'cover follows the title on mobile');

    const comparison=page.getByRole('figure',{name:'Two ways of reading the water'});
    assert.ok(await comparison.getByText('Layers in depth').isVisible());
    assert.ok(await comparison.getByText('Nine sectors on the surface').isVisible());
    const levels=comparison.locator('.vessel-depth-labels li');
    assert.deepEqual(await levels.allTextContents(),['Head','Heart & lungs','Belly','Kidneys & intestines']);
    assert.ok(await levels.evaluateAll(labels=>labels.every(label=>
     parseFloat(getComputedStyle(label,'::before').width)>1.9*label.offsetWidth
    )),'each guide extends across the glass');
    await comparison.scrollIntoViewIfNeeded();
    const matchingPlates=comparison.locator(`.field-art--${theme} img`);
    assert.equal(await matchingPlates.count(),2);
    for(const plate of await matchingPlates.all()){
     assert.ok(await plate.isVisible());
     await plate.evaluate(img=>img.decode());
    }
    const circle=page.getByRole('link',{name:'Women’s Shivambu Circle'});
    assert.equal(await circle.getAttribute('href'),'https://circle.mother-spirit.com/');
    await circle.scrollIntoViewIfNeeded();
    const circleFrame=circle.locator('.essay-circle__photo');
    const circleArt=circleFrame.getByRole('img',{name:'Ana Seahawk, Megan Macdonald, and Fiona Gardner'});
    assert.ok(await circleArt.isVisible(),`Circle portrait visible in ${theme}`);
    await circleArt.evaluate(img=>img.decode());
    const frameBox=await circleFrame.boundingBox();
    assert.ok(Math.abs(frameBox.width/frameBox.height-1.5)<0.01,'Circle portrait retains the original frame ratio');

    const notes=page.getByRole('link',{name:'Appendices, Sources & Notes →'});
    assert.equal(await notes.count(),2);
    assert.equal(await page.locator('#contents li').count(),11);
    assert.equal(await page.locator('.essay-sources').count(),0);
    assert.equal(await page.locator('a.cite').first().evaluate(link=>new URL(link.href).pathname),tortoiseNotesPath);
    await page.evaluate(()=>scrollTo(0,0));
   }
   if(path===tortoiseNotesPath){
    assert.equal(await page.locator('#appendix-a, #appendix-b, #sources').count(),3);
    assert.equal(await page.locator('.source-list li[id]').count(),25);
    assert.equal(await page.getByRole('link',{name:'← The Tortoise in the Bowl'}).first().evaluate(link=>new URL(link.href).pathname),tortoisePath);
   }
   if(width<761){
    const button=page.getByRole('button',{name:'Menu'});await button.click();
    assert.equal(await button.getAttribute('aria-expanded'),'true');
    assert.deepEqual(await page.locator('#primary-menu a').allTextContents(),menuLabels,path);
    for(const label of menuLabels)assert.ok(await page.locator('#primary-menu').getByRole('link',{name:label,exact:true}).isVisible());
    await page.keyboard.press('Escape');assert.equal(await button.getAttribute('aria-expanded'),'false');
   }
  }
 }
 await page.setViewportSize({width:390,height:844});await page.goto(base+'/');
 assert.equal(await page.locator('.intro-copy > p').first().textContent(),'The body holds its own mysteries, and its waters offer a doorway into deeper intimacy with oneself.');
 assert.equal(await page.locator('.doors .door').count(),3);
 assert.equal(await page.locator('.feature-lexicon').count(),0);
 assert.equal(await page.locator('form[action="https://app.kit.com/forms/10224590/subscriptions"]').count(),1);
 await page.locator('.intro-copy').getByRole('link',{name:/The life behind the work/}).click();await page.waitForURL('**/About/');
 await page.locator('#foundations').getByRole('link',{name:/Freedom Is Love/}).click();await page.waitForURL('**/Foundations/freedom-is-love.html');
 await page.getByRole('link',{name:'← About · Foundations',exact:true}).click();await page.waitForURL('**/About/#foundations');
 // Three visible subjects, with the practice introduction returning to its new parent.
 await page.goto(base+'/');
 await page.locator('.doors').getByRole('link',{name:/The Writing/}).click();await page.waitForURL('**/Writing/');
 await page.locator('main').getByRole('heading',{name:'Shivambu',exact:true}).getByRole('link').click();await page.waitForURL('**/Shivambu/');
 assert.equal(await page.locator('.skip-link').getAttribute('href'),'#main');
 await page.getByRole('link',{name:/Beginning with the Body/}).click();
 await page.waitForURL('**/Ways-of-Living/the-body-as-home/beginning-with-the-bodys-own-waters.html');
 assert.equal(await page.locator('h1').textContent(),'Shivambu');
 assert.equal(await page.locator('.hero-deck').textContent(),'Beginning with the Body’s Own Waters');
 assert.equal(await page.locator('.site-section').getAttribute('href'),'/Shivambu/');
 await page.getByRole('link',{name:'← Shivambu',exact:true}).click();await page.waitForURL('**/Shivambu/');
 await page.getByRole('link',{name:'First Waters'}).click();await page.waitForURL('**/The-Living-Year/shivambu-beginning/');
 for(const [label,url,fragment] of [[/Reading the Waters/,'**/The-Living-Year/#circles','circles'],[/The Living Waters/,'**/The-Living-Year/#circles','circles'],[/A conversation/,'**/conversations/#subjects','subjects']]){
  await page.goto(base+'/Shivambu/');await page.locator('main').getByRole('link',{name:label}).first().click();
  await page.waitForURL(url);
  assert.equal(await page.locator('#'+fragment).count(),1);
 }
 await page.goto(base+'/Ways-of-Living/');
 assert.equal(await page.locator('main').getByText('Home & Habitat',{exact:false}).count(),1);
 assert.ok(!(await page.locator('main').textContent()).includes('Biophilia'));
 await page.getByRole('link',{name:/Somatic Awareness/}).click();
 assert.equal(await page.locator('.site-section').getAttribute('href'),'/Ways-of-Living/');
 await page.getByRole('link',{name:'← Ways of Living',exact:true}).click();await page.waitForURL('**/Ways-of-Living/');
 for(const [from,to] of redirects){await page.goto(base+from);await page.waitForURL('**'+to);}
 await page.goto(base+'/Writing/');await page.locator('main').getByRole('heading',{name:'Shivambu',exact:true}).getByRole('link').click();await page.waitForURL('**/Shivambu/');
 const before=await page.locator('html').getAttribute('data-theme');await page.getByRole('button',{name:/Switch to .* theme/}).click();assert.notEqual(await page.locator('html').getAttribute('data-theme'),before);
 assert.deepEqual(failures,[]);
 const noJS=await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const plain=await noJS.newPage();await plain.goto(base+'/');
 for(const name of menuLabels)assert.ok(await plain.locator('#primary-menu').getByRole('link',{name,exact:true}).isVisible(),`no-JS link ${name}`);
 console.log(`PASS: ${paths.length*3*2} page/viewport/theme combinations; menu/Escape; story/Foundation and essay return paths; theme toggle; current intro, three doors and subscription form; redirect stubs; no-JS menu; local assets.`);
} finally {await browser.close();}
