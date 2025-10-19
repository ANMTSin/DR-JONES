// ====== ACORDÉON ======
document.querySelectorAll('.acc-header').forEach(header=>{
  header.addEventListener('click', ()=> {
    const panel = header.nextElementSibling;
    const isOpen = panel.style.display === 'block';
    document.querySelectorAll('.acc-panel').forEach(p=>p.style.display='none');
    if(!isOpen) panel.style.display = 'block';
  });
  header.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); header.click(); }
  });
});

// ====== COOKIE (salva no localStorage) ======
const cookieBanner = document.getElementById('cookieBanner');
const accepted = localStorage.getItem('site_cookies_accepted');
if(accepted === 'yes') cookieBanner.style.display = 'none';

document.getElementById('cookieAccept').addEventListener('click', ()=>{
  localStorage.setItem('site_cookies_accepted','yes');
  cookieBanner.style.display = 'none';
});
document.getElementById('cookieReject').addEventListener('click', ()=>{
  localStorage.setItem('site_cookies_accepted','no');
  cookieBanner.style.display = 'none';
});
