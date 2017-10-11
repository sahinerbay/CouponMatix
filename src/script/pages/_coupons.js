import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

let couponButton = document.querySelector('a[href="#coupons"]');

couponButton.addEventListener('click', (event) => {
    event.preventDefault();
    filterbar.select(1001);
    createContent.createPage(1001);
});


