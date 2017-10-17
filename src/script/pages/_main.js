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

//  WHEN SCROLLED SMALLEN THE LOGO AND FILTER BAR HEIGHT //
window.addEventListener('scroll', () => {

    let scrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
    let logo = dom.getElement('narbar__logo__link__image'),
        navbar = dom.getElement('navbar'),
        filterbar = dom.getElement('filterbar--content');

    // CHECK THE SCREEN SIZE AND APPLY SMALLEN TASK STARTING FROM MEDIUM SCREEN //
    const mq = window.matchMedia("(min-width: 800px)");

    if (mq.matches) {
        if (scrolled === 0) {
            logo.src = '/images/logo.jpg';
            filterbar.classList.remove('filterbar--thin');
        } else {
            logo.src = '/images/logo--small.png';
            filterbar.classList.add('filterbar--thin');
        }
    }

});