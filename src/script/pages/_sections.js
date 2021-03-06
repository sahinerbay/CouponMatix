import createContent from '../components/_content';
import filterbar from '../components/_filterbar';
import dom from '../utils/_dom';

// LIST OF MENU LINKS TO BE ADDED EVENTLISTENER //
let navLinks = [
    {
        'name': document.querySelector('a[href="#coupons"]'),
        'type': 1001,
        'url': 'coupons.html'
    },
    {
        'name': document.querySelector('a[href="#samples"]'),
        'type': 2001,
        'url': 'samples.html'
    },
    {
        'name': document.querySelector('a[href="#giveaways"]'),
        'type': 3001,
        'url': 'giveaways.html'
    }
];

for (let element of navLinks) {

    element.name.addEventListener('click', (event) => {

        // STOP DEFAULT LINK //
        event.preventDefault();

        // CREATE THE CONTENT BASED ON TYPE ID//
        //filterbar.select(element.type);
        createContent.createPage(element.type);
        createContent.sideAd();

        // REMOVE ACTIVE CLASS FROM OTHER LINKS //
        let navbarLinks = document.querySelectorAll('.navbar__menu__links a');
        for (let i = 0; i < navbarLinks.length; i++) {
            navbarLinks[i].classList.remove("navbar__menu__links__active");
        }
        // ADD ACTIVE CLASS TO COUPON BUTTON //
        event.target.className = "navbar__menu__links__active";

        // MENU ON RESPONSIVE MODE //
        // COLLAPSE MENU BAR AFTER CLICK ON ANY SECTION LINK //
        let menu = document.querySelector(".navbar__menu__links"),
            wrapper = document.querySelector('.wrapper'),
            menuFlex = document.querySelector('.navbar__menu__links--flex');

        if (menu.className === "navbar__menu__links responsive") {
            menu.className = "navbar__menu__links"
            wrapper.className = 'wrapper wrapper--margin-top';
            menuFlex.classList.remove('navbar__menu__links--block');
        }

    });
}

