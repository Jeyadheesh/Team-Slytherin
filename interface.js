const b=document.getElementById('menu-bar');
b.addEventListener('click',fun);
const overl=document.getElementById('overlay');
const ms=document.getElementById('mobile-menu');

function fun()
{
    b.classList.toggle('open');
    overl.classList.toggle('overlay-show');
    document.body.classList.toggle('scroll-hide');
    ms.classList.toggle('show-menu');
}