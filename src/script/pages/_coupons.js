import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

// RETRIEVE COUPON NAVBAR LINK  //
let couponButton = document.querySelector('a[href="#coupons"]');

// ONCLICK LOADS FILTERBAR AND CONTENT-GALERY BASED ON TYPE ID //
couponButton.addEventListener('click', (event) => {
    event.preventDefault();
    filterbar.select(1001);
    createContent.createPage(1001);


    // REMOVE ACTIVE CLASS FROM OTHER LINKS //
    let navbarLinks = document.querySelectorAll('.navbar__menu__links a');
    for(let i = 0; i< navbarLinks.length; i++) {
        navbarLinks[i].classList.remove("navbar__menu__links__active");
    }

    // ADD ACTIVE CLASS TO COUPON BUTTON //
    event.target.className ="navbar__menu__links__active";

    
    

    let menu = document.querySelector(".navbar__menu__links"),
        wrapper = document.querySelector('.wrapper');
    if (menu.className === "navbar__menu__links responsive") {
        menu.className = "navbar__menu__links"
        wrapper.className = 'wrapper wrapper--margin-top';
    }

});