let dom = function () {

    let createElement = (el) => document.createElement(el);

    let createElementWithClassName = (el, className) => {
        let element = document.createElement(el);
        element.className = className;
        return element;
    };

    let setTextContent = (el, txt, index = 0) => {
        let foundElement = document.querySelectorAll(`.${el}`);
        foundElement[index].textContent = txt;

    };

    let setAttributes = (el, attrsObject) => {
        for (var key in attrsObject) {
            el.setAttribute(key, attrsObject[key]);
        }
    };

    let append = (parent, ...args) => {
        if (args.length > 1) {
            for (let i = 0; i < args.length; i++) {
                parent.appendChild(args[i]);
            }
        } else parent.appendChild(args[0])
    };

    let getElement = (el) => document.querySelector(`.${el}`);

    let removeElement = (el) => {
        el.parentElement.removeChild(el);
    }

    let removeAllChildren = (node) => {
        while (node.hasChildNodes()) {
            node.removeChild(node.lastChild);
        }
    };

    let getOffers = (url) => {

        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();

            xhttp.onload = () => {
                if (xhttp.readyState === 4) { // XMLHttpRequest.DONE
                    if (xhttp.status === 200) {
                        resolve(xhttp.responseText);
                    } else reject(Error(xhttp.statusText));
                }
            };

            //onerror fires when there is  a denied cross-domain request
            xhttp.onerror = () => {
                reject(Error('Error fetching data.'));
            };

            xhttp.open("GET", url); //leave empty or false for Asynchronous
            xhttp.send();
        })
    };

    let handleScroll = () => {

        let scrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        let filterBar = dom.getElement('content__galery__info__filter');

        if (scrolled > 300) {
            filterBar.classList.add('content__galery__info__filter--fixed');
        } else if (scrolled <= 299) {
            filterBar.classList.remove('content__galery__info__filter--fixed');
        }
    };

    let createContentGaleryOffer = (contentGaleryContainer, offer, i = 0, offerClassname = 'search') => {
        // CREATE ROW AND APPEND INTO CONTENT-GALERY //
        let contentGaleryOffer = dom.createElementWithClassName('div', 'content__galery__offer content__galery__offer--side  content__galery__offer--padding row__xs-12 row__s-6 row__md-4 row__lg-3');
        dom.append(contentGaleryContainer, contentGaleryOffer);

        // GENERATE TOP PART (IMAGE & ITS FRAME) OF EACH OFFER // 
        let contentGaleryOfferTop = dom.createElementWithClassName('div', 'content__galery__offer__top content__galery__offer__top--margin-bottom'),
            contentGaleryOfferTopFrame = dom.createElementWithClassName('div', 'content__galery__offer__top__frame'),
            contentGaleryOfferTopFrameImage = dom.createElementWithClassName('img', 'content__galery__offer__top__frame--image'),
            contentGaleryOfferTopFrameImageLink = dom.createElementWithClassName('a', 'content__galery__offer__top__frame--image__link');

        // SET URL LINK INTO IMAGE //
        contentGaleryOfferTopFrameImageLink.href = offer.link;
        contentGaleryOfferTopFrameImageLink.setAttribute('target', '_blank');
        contentGaleryOfferTopFrameImageLink.title = `${offer.statement} ${offer.description}`;

        contentGaleryOfferTopFrameImage.src = offer.imageURL;
        contentGaleryOfferTopFrameImage.alt = `${offer.statement} ${offer.description}`;

        // APPEND TOP PART OF THE OFFER INTO CONTENT-GALERY-OFFER //
        dom.append(contentGaleryOffer, contentGaleryOfferTop);
        dom.append(contentGaleryOfferTop, contentGaleryOfferTopFrame);
        dom.append(contentGaleryOfferTopFrame, contentGaleryOfferTopFrameImageLink);
        dom.append(contentGaleryOfferTopFrameImageLink, contentGaleryOfferTopFrameImage);


        // GENERATE FOOTER PART (STATEMENT, DESCRIPTION, BUTTON) OF EACH OFFER // 
        let contentGaleryOfferFooter = dom.createElementWithClassName('div', 'content__galery__offer__footer'),
            contentGaleryOfferFooterDescription = dom.createElementWithClassName('div', `${offerClassname}__offer__description content__galery__offer__footer__description`),
            contentGaleryOfferFooterButton = dom.createElementWithClassName('div', 'content__galery__offer__footer__button'),
            contentGaleryOfferFooterButtonLink = dom.createElementWithClassName('a', `${offerClassname}__link content__galery__offer__footer__button__link`);

        // SET URL LINK INTO BUTTON //
        contentGaleryOfferFooterButtonLink.href = offer.link;
        contentGaleryOfferFooterButtonLink.textContent = "+";
        contentGaleryOfferFooterButtonLink.setAttribute('target', '_blank');

        // APPEND FOOTER PART (STATEMENT, DESCRIPTION, BUTTON) OFFER INTO CONTENT-GALERY-OFFER //
        dom.append(contentGaleryOfferFooterButton, contentGaleryOfferFooterButtonLink);
        dom.append(contentGaleryOfferFooter, contentGaleryOfferFooterDescription, contentGaleryOfferFooterButton);
        dom.append(contentGaleryOffer, contentGaleryOfferFooter);

        // SET STATEMENT & DESCRIPTION OF EACH OFFER VIA JSON CLASSNAME DYNAMICALLY BASED ON WHICH SECTION (COUPONS, SAMPLES, GIVEAWAYS) //
        dom.setTextContent(`${offerClassname}__link`, offer.statement, i);
        dom.setTextContent(`${offerClassname}__offer__description`, offer.description, i);
    }

    return {
        createElement: createElement,
        createElementWithClassName: createElementWithClassName,
        setTextContent: setTextContent,
        setAttributes: setAttributes,
        removeElement: removeElement,
        removeAllChildren: removeAllChildren,
        getElement: getElement,
        append: append,
        getOffers: getOffers,
        handleScroll: handleScroll,
        createContentGaleryOffer: createContentGaleryOffer
    }
}();

export default dom;