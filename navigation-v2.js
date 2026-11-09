document.documentElement.classList.add('navigation-ready');
const button=document.querySelector('.menu-toggle');
const menu=document.getElementById('primary-menu');
function closeMenu(){menu?.classList.remove('is-open');button?.setAttribute('aria-expanded','false');}
button?.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);});
menu?.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&button?.getAttribute('aria-expanded')==='true'){closeMenu();button.focus();}});
matchMedia('(min-width: 761px)').addEventListener('change',closeMenu);
