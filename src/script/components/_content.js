import dom from '../utils/_dom';

let createContent = function () {

    let content = document.querySelector('.content');

    let galeryInfo = (offer) => {
        
        let contentGalery = dom.createElementWithClassName('div', 'content__galery row');
        let contentGaleryInfo = dom.createElementWithClassName('div', 'content__galery__info');

        let h2 = dom.createElementWithClassName('h2', 'content__galery__info__title');
        let para = dom.createElementWithClassName('p', 'content__galery__info__description');

        dom.append(content, contentGalery);
        dom.append(contentGalery, contentGaleryInfo);
        dom.append(contentGaleryInfo, h2, para);

        dom.setTextContent('content__galery__info__title', offer.title);
        dom.setTextContent('content__galery__info__description', offer.desc);
        
    };

    let galery = (offer) => {

        let contentGalery = document.querySelector('.content__galery');

        for (let i = 0; i < offer.length; i++) {
            let contentGaleryOffer = dom.createElementWithClassName('div', 'content__galery__offer row__xs-12 row__s_6 row__md-4 row__lg-3');
            let contentGaleryOfferLeft = dom.createElementWithClassName('div', 'content__galery__offer__left');
            let contentGaleryOfferRight = dom.createElementWithClassName('div', 'content__galery__offer__right');
            dom.append(contentGaleryOffer, contentGaleryOfferLeft, contentGaleryOfferRight);
            dom.append(contentGalery, contentGaleryOffer);
        }

    }
    return {
        galeryInfo: galeryInfo,
        galery: galery
    }
}();


export default createContent;
