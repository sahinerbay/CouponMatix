import dom from '../utils/_dom';


////////////////////////////
// CREATE HEADER ELEMENT //
let header = dom.createElementWithClassName('div', 'header');
// APPEND HEADER ELEMENT INTO DOM //
dom.append(document.body, header);


///////////////////////////
// CREATE NAVBAR ELEMENT //
let navbar = dom.createElementWithClassName('div', 'navbar row');
// APPEND NAVBAR INTO HEADER //
dom.append(header, navbar);


//////////////////////////////////
// CREATE NAVBAR--LOGO ELEMENT //
let navbarLogo = dom.createElementWithClassName('div', 'navbar__logo row__xs-0 row__s-0 row__md-3 row__lg-2'),
    navbarLogoLink = dom.createElementWithClassName('a', 'narbar__logo__link'),
    navbarLogoLinkImage = dom.createElementWithClassName('img', 'narbar__logo__link__image');

// SET NAVBAR--LOGO--IMAGE SRC //
navbarLogoLinkImage.src = "./images/logo.jpg";

// APPEND NAVBAR LOGO INTO NAVBAR //
dom.append(navbar, navbarLogo);
dom.append(navbarLogo, navbarLogoLink);
dom.append(navbarLogoLink, navbarLogoLinkImage);


//////////////////////////////////
// CREATE NAVBAR--MENU ELEMENT //
let navbarMenu = dom.createElementWithClassName('div', 'navbar__menu row row__xs-12 row__s-12 row__md-9 row__lg-10 row--gutter row--align-items');
let navbarMenuLinks = dom.createElementWithClassName('div', 'navbar__menu__links');
let navbarMenuLinksRow = dom.createElementWithClassName('div', 'row__xs-12 row__s-12 row__m-12 row__lg-12');

// APPEND NAVBAR--MENU INTO NAVBAR //
dom.append(navbar, navbarMenu);
dom.append(navbarMenu, navbarMenuLinks);
dom.append(navbarMenuLinks, navbarMenuLinksRow);

// ATTRIBUTES FOR MENU LINKS //
let linksArr = [{
        'href': '#coupons',
        'text': 'coupons'
    },
    {
        'href': '#samples',
        'text': 'samples'
    },
    {
        'href': '#giveaways',
        'text': 'giveaways'
    },
    {
        'href': '#about',
        'text': 'about'
    }

];

// CREATE NAVBAR--MENU--LINKS //
// INSERT INTO NAVBAR--MENU //
for (let attributes in linksArr) {
    let navbarMenuLinksRowA = dom.createElement('a');
    navbarMenuLinksRowA.setAttribute('href', linksArr[attributes].href);
    navbarMenuLinksRowA.textContent = linksArr[attributes].text;
    dom.append(navbarMenuLinksRow, navbarMenuLinksRowA);
}

// CREATE HAMBURGER ICON //
let navbarMenuLinksRowHamburger = dom.createElementWithClassName('a', 'navbar__menu__links__hamburgerIcon');
navbarMenuLinksRowHamburger.innerHTML = "&#9776;";
dom.append(navbarMenuLinksRow, navbarMenuLinksRowHamburger)


let hamburgerIcon = document.querySelector('.navbar__menu__links__hamburgerIcon'),
    menu = document.querySelector(".navbar__menu__links");

hamburgerIcon.addEventListener('click', () => {
    console.log(menu.className)
    if (menu.className === "navbar__menu__links") {
        menu.className += " responsive";
    } else {
        menu.className = "navbar__menu__links";
    }
});