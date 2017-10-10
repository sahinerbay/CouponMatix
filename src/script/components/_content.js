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

        dom.setTextContent('content__galery__info__title', offer.main, 0);
        dom.setTextContent('content__galery__info__description', offer.desc, 0);
        
    };

    let galery = (offer) => {

        let contentGalery = document.querySelector('.content__galery');

        for (let i = 0; i < offer.length; i++) {

            let contentGaleryOffer = dom.createElementWithClassName('div', 'content__galery__offer content__galery__offer--padding row__xs-12 row__s-6 row__md-4 row__lg-3');
            dom.append(contentGalery, contentGaleryOffer);

            let contentGaleryOfferTop = dom.createElementWithClassName('div', 'content__galery__offer__top');            
            let contentGaleryOfferTopFrame = dom.createElementWithClassName('div', 'content__galery__offer__top__frame');
            let contentGaleryOfferTopFrameImage = dom.createElementWithClassName('img', 'content__galery__offer__top__frame--image');
            let contentGaleryOfferTopFrameImageLink = dom.createElementWithClassName('a', 'content__galery__offer__top__frame--image__link');
            contentGaleryOfferTopFrameImageLink.href = offer[i].link;
            contentGaleryOfferTopFrameImageLink.setAttribute('target', '_blank');
            contentGaleryOfferTopFrameImage.src = offer[i].imageURL;
            dom.append(contentGaleryOfferTop, contentGaleryOfferTopFrame);
            dom.append(contentGaleryOfferTopFrame, contentGaleryOfferTopFrameImageLink);
            dom.append(contentGaleryOfferTopFrameImageLink, contentGaleryOfferTopFrameImage);
            

            let contentGaleryOfferFooter = dom.createElementWithClassName('div', 'content__galery__offer__footer');            
            let contentGaleryOfferFooterStatement = dom.createElementWithClassName('div', 'content__galery__offer__footer__statement content__galery__offer__footer__statement--margin-bottom');
            let contentGaleryOfferFooterDescription = dom.createElementWithClassName('div', 'content__galery__offer__footer__description content__galery__offer__footer__description--margin-bottom');
            let contentGaleryOfferFooterButton = dom.createElementWithClassName('div', 'content__galery__offer__footer__button');
            let contentGaleryOfferFooterButtonLink = dom.createElementWithClassName('a', 'content__galery__offer__footer__button__link');
            contentGaleryOfferFooterButtonLink.href = offer[i].link;
            contentGaleryOfferFooterButtonLink.textContent = "+";
            contentGaleryOfferFooterButtonLink.setAttribute('target', '_blank');
            dom.append(contentGaleryOfferFooter, contentGaleryOfferFooterStatement, contentGaleryOfferFooterDescription, contentGaleryOfferFooterButton);
            dom.append(contentGaleryOffer, contentGaleryOfferTop, contentGaleryOfferFooter);
            dom.append(contentGaleryOfferFooterButton, contentGaleryOfferFooterButtonLink);
            
            dom.setTextContent('content__galery__offer__footer__statement', offer[i].statement, i);
            dom.setTextContent('content__galery__offer__footer__description', offer[i].description, i);
                        
        }
    }

    return {
        galeryInfo: galeryInfo,
        galery: galery
    }
}();


export default createContent;
