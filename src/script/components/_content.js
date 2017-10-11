import dom from '../utils/_dom';

let createContent = function () {

    let content = document.querySelector('.content');

    let galeryInfo = (offer) => {

        let contentGalery = dom.createElementWithClassName('div', `content__galery ${offer.classname}__galery row`),
            contentGaleryInfo = dom.createElementWithClassName('div', 'content__galery__info row__lg-12'),
            h2 = dom.createElementWithClassName('h2', `content__galery__info__title ${offer.classname}__title`),
            para = dom.createElementWithClassName('p', `content__galery__info__description ${offer.classname}__description`);

        dom.append(content, contentGalery);
        dom.append(contentGalery, contentGaleryInfo);
        dom.append(contentGaleryInfo, h2, para);

        dom.setTextContent(`${offer.classname}__title`, offer.main);
        dom.setTextContent(`${offer.classname}__description`, offer.desc);

    };

    let galery = (offer) => {

        let offerClassname = offer[0].classname;

        let contentGalery = document.querySelector(`.${offerClassname}__galery`);

        for (let i = 0; i < offer.length; i++) {

            let contentGaleryOffer = dom.createElementWithClassName('div', 'content__galery__offer content__galery__offer--padding row__xs-12 row__s-6 row__md-4 row__lg-3');
            dom.append(contentGalery, contentGaleryOffer);

            let contentGaleryOfferTop = dom.createElementWithClassName('div', 'content__galery__offer__top'),
                contentGaleryOfferTopFrame = dom.createElementWithClassName('div', 'content__galery__offer__top__frame'),
                contentGaleryOfferTopFrameImage = dom.createElementWithClassName('img', 'content__galery__offer__top__frame--image'),
                contentGaleryOfferTopFrameImageLink = dom.createElementWithClassName('a', 'content__galery__offer__top__frame--image__link');

            contentGaleryOfferTopFrameImageLink.href = offer[i].link;
            contentGaleryOfferTopFrameImageLink.setAttribute('target', '_blank');
            contentGaleryOfferTopFrameImage.src = offer[i].imageURL;

            dom.append(contentGaleryOfferTop, contentGaleryOfferTopFrame);
            dom.append(contentGaleryOfferTopFrame, contentGaleryOfferTopFrameImageLink);
            dom.append(contentGaleryOfferTopFrameImageLink, contentGaleryOfferTopFrameImage);


            let contentGaleryOfferFooter = dom.createElementWithClassName('div', 'content__galery__offer__footer'),
                contentGaleryOfferFooterStatement = dom.createElementWithClassName('div', `${offerClassname}__offer__statement content__galery__offer__footer__statement content__galery__offer__footer__statement--margin-bottom`),
                contentGaleryOfferFooterDescription = dom.createElementWithClassName('div', `${offerClassname}__offer__description content__galery__offer__footer__description content__galery__offer__footer__description--margin-bottom`),
                contentGaleryOfferFooterButton = dom.createElementWithClassName('div', 'content__galery__offer__footer__button'),
                contentGaleryOfferFooterButtonLink = dom.createElementWithClassName('a', 'content__galery__offer__footer__button__link');

            contentGaleryOfferFooterButtonLink.href = offer[i].link;
            contentGaleryOfferFooterButtonLink.textContent = "+";
            contentGaleryOfferFooterButtonLink.setAttribute('target', '_blank');

            dom.append(contentGaleryOfferFooter, contentGaleryOfferFooterStatement, contentGaleryOfferFooterDescription, contentGaleryOfferFooterButton);
            dom.append(contentGaleryOffer, contentGaleryOfferTop, contentGaleryOfferFooter);
            dom.append(contentGaleryOfferFooterButton, contentGaleryOfferFooterButtonLink);

            dom.setTextContent(`${offerClassname}__offer__statement`, offer[i].statement, i);
            dom.setTextContent(`${offerClassname}__offer__description`, offer[i].description, i);
        }

        let contentGaleryViewAllContainer = dom.createElementWithClassName('div', 'content__galery__viewAll content__galery__viewAll--margin'),
            contentGaleryViewAllLink = dom.createElementWithClassName('a', `content__galery__viewAll--link ${offerClassname}--link`);

        let contentGaleryViewAllLinkAttribute = {
            "href": `#${offerClassname}`
        };
        dom.setAttributes(contentGaleryViewAllLink, contentGaleryViewAllLinkAttribute);
        dom.append(contentGalery, contentGaleryViewAllContainer);
        dom.append(contentGaleryViewAllContainer, contentGaleryViewAllLink);
        dom.setTextContent(`${offerClassname}--link`, "View All");

    }

    let createSidePage = (type, filterQuery = null) => {
        //Empty Content Container --NB! this can be improved by using while and removeChild
        document.querySelector('.content').innerHTML = "";

        let url = `https://couponmatix.firebaseio.com/v0/types/${type}.json`;

        dom.getOffers(url)
            .then((result) => {

                let offer = JSON.parse(result);
                createContent.galeryInfo(offer);
                return dom.getOffers(`https://couponmatix.firebaseio.com/v0/items/${type}.json`)
            })
            .then((result) => {
                let offerDetails = JSON.parse(result);
                if (filterQuery === null) {
                    createContent.galery(offerDetails);
                } else {
                    let filteredOfferDetails = offerDetails.filter((currentEl) => currentEl.category == filterQuery);
                    createContent.galery(filteredOfferDetails);
                }
            })
    }

    return {
        galeryInfo: galeryInfo,
        galery: galery,
        createPage: createSidePage
    }
}();


export default createContent;
