import dom from '../utils/_dom';

// CREATE FOOTER ELEMENT //
let createFooter = () => {
    let footer = dom.createElementWithClassName('div', 'footer footer--width');

    let wrapper = document.querySelector('.wrapper');

    wrapper.parentElement.insertBefore(footer, wrapper.nextElementSibling);

    let footerEl = dom.getElement('footer');

    let footerContent = dom.createElementWithClassName('div', 'footer--content');
    dom.append(footerEl, footerContent);

    let socialIcons = dom.createElementWithClassName('div', 'footer__social-icons row');
    dom.append(footerContent, socialIcons);

    let socialIconsList = [
        {
            'title': 'Facebook',
            'linkUrl': 'www.facebook.com',
            'alt': '',
            'imgUrl': './images/facebook.png'

        },
        {
            'title': 'Twitter',
            'linkUrl': 'www.twitter.com',
            'alt': '',
            'imgUrl': './images/twitter.png'

        },
        {
            'title': 'Instagram',
            'linkUrl': 'www.instagram.com',
            'alt': '',
            'imgUrl': './images/instagram.png'

        },
        {
            'title': 'Google Plus',
            'linkUrl': 'www.google.com',
            'alt': '',
            'imgUrl': './images/google.png'

        },
        {
            'title': 'Pinterest',
            'linkUrl': 'www.pinterest.com',
            'alt': '',
            'imgUrl': './images/pinterest.png'

        },
        {
            'title': 'Linkedin',
            'linkUrl': 'www.linkedin.com',
            'alt': '',
            'imgUrl': './images/linkedin.png'

        }
    ];

    // CREATE SOCIAL ICONS //
    for (let imageDetails of socialIconsList) {
        let socialIconsLink = dom.createElementWithClassName('a', 'footer__social-icons__link'),
            socialIconsLinkImage = dom.createElementWithClassName('img', 'footer__social-icons__link__image');

        socialIconsLink.title = imageDetails.title;
        socialIconsLink.href = imageDetails.linkUrl;

        socialIconsLinkImage.src = imageDetails.imgUrl;
        socialIconsLinkImage.alt = imageDetails.alt;

        dom.append(socialIcons, socialIconsLink);
        dom.append(socialIconsLink, socialIconsLinkImage);
    }


    let footerCopyright = dom.createElementWithClassName('div', 'footer__copywrite row'),
        footerCopyrightAuthor = dom.createElementWithClassName('p', 'footer__copywrite__author'),
        footerCopyrightAuthorLink = dom.createElementWithClassName('a', 'footer__copywrite__author__link');

    footerCopyrightAuthor.textContent = 'Copyright © 2017. Designed & Developed by ';
    footerCopyrightAuthorLink.textContent = "Sahin Erbay";
    footerCopyrightAuthorLink.href = "https://github.com/sahinerbay";

    dom.append(footerCopyrightAuthor, footerCopyrightAuthorLink);
    dom.append(footerCopyright, footerCopyrightAuthor);
    dom.append(footerContent, footerCopyright);

}

export default createFooter;