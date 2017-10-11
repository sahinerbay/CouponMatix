import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

// RETRIEVE COUPON NAVBAR LINK  //
let couponButton = document.querySelector('a[href="#coupons"]');

// ONCLICK LOADS FILTERBAR AND CONTENT-GALERY BASED ON TYPE ID //
couponButton.addEventListener('click', (event) => {
    event.preventDefault();
    filterbar.select(1001);
    createContent.createPage(1001);
});