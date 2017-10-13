import dom from '../utils/_dom';
import createContent from '../components/_content';
import filterbar from '../components/_filterbar';


// GENERATE FILTERBAR (EMPTY INSIDE) //
filterbar.content();

// GENERATE FILTERBAR-SEARCHBAR //


createContent.ads();

// GENERATE CONTENT-GALERY INFO & DESCRIPTION & OFFERS
createContent.createContentMainPage();

// ADD ACTIVE CLASS TO HOME BUTTON //
let homeLink = document.querySelector('.navbar__menu__links a');
homeLink.className = "navbar__menu__links__active";

console.log('main js here')
  

const mq = window.matchMedia( "(min-width: 500px)" );

if (mq.matches) {
    console.log('more than 500px')
  } else {
    console.log('less than 500px')
  }