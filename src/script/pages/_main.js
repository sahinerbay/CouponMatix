import dom from '../utils/_dom';
import createContent from '../components/_content';
import filterbar from '../components/_filterbar';


// GENERATE FILTERBAR (EMPTY INSIDE) //
filterbar.content();

// GENERATE CONTENT-GALERY INFO & DESCRIPTION & OFFERS
createContent.createContentMainPage();

// GENERATE ADS //
createContent.ads();

// ADD ACTIVE CLASS TO HOME BUTTON //
let homeLink = document.querySelector('.navbar__menu__links a');
homeLink.className = "navbar__menu__links__active";

// const mq = window.matchMedia( "(min-width: 500px)" );

// if (mq.matches) {
//     console.log('more than 500px')
//   } else {
//     console.log('less than 500px')
//   }

window.addEventListener('scroll', (() => {

    let scrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    let logo = dom.getElement('narbar__logo__link__image'),
        navbar = dom.getElement('navbar');

    const mq = window.matchMedia("(min-width: 800px)");

    if (mq.matches) {
        if (scrolled === 0) {
            logo.src = '/images/logo.jpg';
            navbar.classList.add('navbar--margin-bottom');
        } else {
            logo.src = '/images/logo--small.png';
            navbar.classList.remove('navbar--margin-bottom');
        }
    }


})
);