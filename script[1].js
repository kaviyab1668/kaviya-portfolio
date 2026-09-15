const menuBtn=document.querySelector('.menu-btn');
const navbar=document.querySelector('.navbar');

menuBtn.addEventListener('click',()=>navbar.classList.toggle('open'));
document.querySelectorAll('.navbar a').forEach(link=>{
  link.addEventListener('click',()=>navbar.classList.remove('open'));
});

const tabs=document.querySelectorAll('.tab');
const contents=document.querySelectorAll('.tab-content');
tabs.forEach(tab=>{
  tab.addEventListener('click',()=>{
    tabs.forEach(t=>t.classList.remove('active'));
    contents.forEach(c=>c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

document.getElementById('contactForm').addEventListener('submit',(e)=>{
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const email=document.getElementById('email').value.trim();
  const message=document.getElementById('message').value.trim();
  const subject=encodeURIComponent(`Portfolio contact from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:kaviyab1668@gmail.com?subject=${subject}&body=${body}`;
});
