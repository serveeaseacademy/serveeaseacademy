
const WHATSAPP_NUMBER = ""; // Add academy WhatsApp number with country code, digits only.
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader')?.classList.add('hide'),700));
document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.navlinks')?.classList.toggle('show'));
document.querySelectorAll('.faq button').forEach(b=>b.addEventListener('click',()=>b.parentElement.classList.toggle('open')));
document.querySelectorAll('form[data-enquiry]').forEach(f=>f.addEventListener('submit',e=>{e.preventDefault();if(!WHATSAPP_NUMBER){alert('Please add the academy WhatsApp number in site.js before publishing this form.');return;}const d=new FormData(f);let msg=[`Al-Bidayah Quran Kareem enquiry`,`Name: ${d.get('name')||''}`,`Email: ${d.get('email')||''}`,`WhatsApp: ${d.get('phone')||''}`,`Country: ${d.get('country')||''}`,`Course: ${d.get('course')||''}`,`Preferred date: ${d.get('date')||''}`,`Time zone: ${d.get('timezone')||''}`,`Message: ${d.get('message')||''}`].join('\\n');window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,'_blank')}));
