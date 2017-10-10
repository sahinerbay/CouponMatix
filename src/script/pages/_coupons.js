import createContent from '../components/_content';

let couponButton = document.querySelector('a[href="#coupons"]');

couponButton.addEventListener('click', ()=>{
    createContent.createPage(1001);
});