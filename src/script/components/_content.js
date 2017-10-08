import dom from '../utils/_dom';

let createContent = function () {

    let content = document.querySelector('.content');

    let galeryInfo = (offer) => {
        
        let contentGalery = dom.createElementWithClassName('div', 'content__galery row');
        let contentGaleryInfo = dom.createElementWithClassName('div', 'content__galery__info row__lg-12');

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

        console.log(offer[3])
        for (let i = 0; i < offer.length; i++) {
            let contentGaleryOffer = dom.createElementWithClassName('div', 'content__galery__offer row row__xs-12 row__s_6 row__md-4 row__lg-3');
            let contentGaleryOfferTop = dom.createElementWithClassName('div', 'content__galery__offer__top');            
            let contentGaleryOfferTopImage = dom.createElementWithClassName('div', 'content__galery__offer__top__image');

            let contentGaleryOfferFooter = dom.createElementWithClassName('div', 'content__galery__offer__footer');            
            let contentGaleryOfferFooterTitle = dom.createElementWithClassName('div', 'content__galery__offer__footer__title');
            let contentGaleryOfferFooterStatement = dom.createElementWithClassName('div', 'content__galery__offer__footer__statement');
            let contentGaleryOfferFooterDescription = dom.createElementWithClassName('div', 'content__galery__offer__footer__description');
            
            

            dom.append(contentGaleryOfferTop, contentGaleryOfferTopImage);
            dom.append(contentGaleryOfferFooter, contentGaleryOfferFooterTitle, contentGaleryOfferFooterStatement, contentGaleryOfferFooterDescription);
            dom.append(contentGaleryOffer, contentGaleryOfferTop, contentGaleryOfferFooter);
            dom.append(contentGalery, contentGaleryOffer);

            dom.setTextContent('content__galery__offer__footer__title', offer[i].title);
            dom.setTextContent('content__galery__offer__footer__statement', offer[i].statement);
            dom.setTextContent('content__galery__offer__footer__description', offer[i].description);
        }

    }

    return {
        galeryInfo: galeryInfo,
        galery: galery
    }
}();


export default createContent;
