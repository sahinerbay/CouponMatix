import dom from '../utils/_dom';
import filterbar from './_filterbar';
import createFooter from './_footer';
import templateAds from '../utils/_ads';

let createContent = function () {


    // CREATE WRAPPER ELEMENT(DIV) AND ITS CHILD CONTENT ELEMENT(DIV) WITH CLASSNAMES //
    let wrapper = dom.createElementWithClassName('div', 'wrapper wrapper--margin'),
        contentEl = dom.createElementWithClassName('div', 'content content--margin-top content--padding-top');

    // INSERT WRAPPER AND ITS ONLY CHILD CONTENT ELEMENT INTO DOM //
    dom.append(document.body, wrapper);
    dom.append(wrapper, contentEl);

    // RETRIEVE CONTENT ELEMENT TO BE FILLED BELOW //
    let content = document.querySelector('.content');

    let offerDetailsGlobal;



    // GENERATE 3 X ADS FOR MAIN PAGE ONLY //
    let ads = () => {
        let contentAd = dom.createElementWithClassName('div', 'content__ad row');
        dom.append(content, contentAd);

        for (let numberOfAdSlot = 0; numberOfAdSlot < 3; numberOfAdSlot++) {

            let randNo = Math.floor(Math.random() * templateAds.medium.length);

            let contentAdFrame = dom.createElementWithClassName('div', 'content__ad__frame row__xs-12 row__s-6 row__md-4 row__lg-4'),
                contentAdFrameImage = dom.createElementWithClassName('img', 'content__ad__frame--image'),
                contentAdFrameImageLink = dom.createElementWithClassName('a', 'content__ad__frame--image__link');

            // SET URL LINK INTO IMAGE //
            contentAdFrameImageLink.href = templateAds.medium[randNo].linkUrl;
            contentAdFrameImageLink.setAttribute('target', '_blank');
            contentAdFrameImageLink.setAttribute('title', templateAds.medium[randNo].alt);
            contentAdFrameImage.src = templateAds.medium[randNo].imgUrl;
            contentAdFrameImage.alt = templateAds.medium[randNo].alt;

            dom.append(contentAd, contentAdFrame);
            dom.append(contentAdFrame, contentAdFrameImageLink);
            dom.append(contentAdFrameImageLink, contentAdFrameImage);
        }
    };



    // CREATE 1 X AD FOR SIDE PAGES //
    let sideAd = () => {
        let contentAd = dom.createElementWithClassName('div', 'content__ad row');
        dom.append(content, contentAd);

        let randNo = Math.floor(Math.random() * templateAds.large.length);

        let contentAdFrame = dom.createElementWithClassName('div', 'content__ad__frame content__ad__frame--margin-bottom row__xs-12'),
            contentAdFrameImage = dom.createElementWithClassName('img', 'content__ad__frame--image'),
            contentAdFrameImageLink = dom.createElementWithClassName('a', 'content__ad__frame--image__link');

        // SET URL LINK INTO IMAGE //
        contentAdFrameImageLink.href = templateAds.large[randNo].linkUrl;
        contentAdFrameImageLink.setAttribute('target', '_blank');
        contentAdFrameImageLink.setAttribute('title', templateAds.large[randNo].alt)

        contentAdFrameImage.src = templateAds.large[randNo].imgUrl;
        contentAdFrameImage.alt = templateAds.large[randNo].alt;


        dom.append(contentAd, contentAdFrame);
        dom.append(contentAdFrame, contentAdFrameImageLink);
        dom.append(contentAdFrameImageLink, contentAdFrameImage);

    }



    // CREATE INFO / DESCRIPTION SECTION //
    // 'OFFER' PARAMETER IS A RESPONSE 'TYPES' OF JSON REQUEST //
    let galeryInfo = (offer, isMainPage) => {

        // CREATE INFO & DESCRIPTION SECTION WITH H2 AND PARAGRAPH FOR EACH SECTION(COUPONS, SAMPLES, GIVEAWAYS) //
        // ASSIGN SPECIFIC CLASS NAMES DYNAMICALLY //
        // THIS WILL HELP US TO RETRIVE THESE ELEMENTS LATER EASILY //
        let contentGalery = dom.createElementWithClassName('div', `content__galery content__galery--margin-bottom ${offer.classname}__galery row`),
            contentGaleryInfo = dom.createElementWithClassName('div', 'content__galery__info row__lg-12'),
            h2 = dom.createElementWithClassName('h2', `content__galery__info__title content__galery__info__title--box-shadow ${offer.classname}__title`),
            para = dom.createElementWithClassName('p', `content__galery__info__description ${offer.classname}__description`);


        // INSERT INFO & DESCRIPTION SECTION INTO CONTENT //
        dom.append(content, contentGalery);
        dom.append(contentGalery, contentGaleryInfo);
        dom.append(contentGaleryInfo, h2, para);

        // PLACE CONTENT (TITLE & DESCRIPTION) INTO H2 AND PARAGRAPH VIA JSON //
        dom.setTextContent(`${offer.classname}__title`, offer.main);
        dom.setTextContent(`${offer.classname}__description`, offer.desc);

        // IF IT'S NOT MAIN PAGE BUT SECTIONS CREATE FILTER SELECT DROP DOWNS //
        if (!isMainPage) {
            let filterFrame = dom.createElementWithClassName('div', 'content__galery__info__filter row'),
                filterFrameLeft = dom.createElementWithClassName('div', 'content__galery__info__filter-left row__xs-3 row__s-6 '),
                filterFrameRight = dom.createElementWithClassName('div', 'content__galery__info__filter-right row__xs-9 row__s-6');

            dom.append(contentGaleryInfo, filterFrame);
            dom.append(filterFrame, filterFrameLeft, filterFrameRight);

            // SET FILTER-SELECT BAR STICKY ONSCROLL //
            window.addEventListener('scroll', dom.handleScroll);
        }
    };



    // CREATE GALERY OF COUPONS / SAMPLES / GIVEAWAYS //
    // 'OFFER' PARAMETER IS A RESPONSE 'ITEMS' OF JSON REQUEST //
    let galery = (offer, isMainPage) => {

        // RETRIEVE CLASSNAME OF EACH TYPE (COUPONS, SAMPLES, GIVEAWAYS) //
        let offerClassname = offer[0].classname;

        // USE THE RETRIEVED CLASSNAME IN ORDER TO RETRIEVE DEDICATED CONTENT GALERY TO EACH SECTION //
        let contentGalery = dom.getElement(`${offerClassname}__galery`);

        // CREATE CONTENT--GALERY--CONTAINER //
        let contentGaleryContainer = dom.createElementWithClassName('div', 'content__galery__container');
        dom.append(contentGalery, contentGaleryContainer);

        // LOOP THROUGH RESPONSE OBJECT (WHICH IS ARRAY NOW, AFTER PARSED FROM JSON) //
        for (let i = 0; i < offer.length; i++) {
            dom.createContentGaleryOffer(contentGaleryContainer, offer[i], i, offerClassname);
        }//END OF LOOP//


        // GENERATE VIEW LINK IF ITS MAIN PAGE //
        if (isMainPage) {

            let contentGaleryOffer = document.querySelectorAll('.content__galery__offer');
            for (let i = 0; i < contentGaleryOffer.length; i++) {
                contentGaleryOffer[i].className = 'content__galery__offer content__galery__offer--main content__galery__offer--padding row__xs-12 row__s-6 row__md-4 row__lg-3';
            }

            // GENERATE VIEW LINK ELEMENT WITH CLASSNAMES //
            let contentGaleryViewAllContainer = dom.createElementWithClassName('div', 'content__galery__viewAll content__galery__viewAll--margin-top'),
                contentGaleryViewAllLink = dom.createElementWithClassName('a', `content__galery__viewAll--link ${offerClassname}--link`);

            // SET ATTRIBUTES OF VIEW LINK ELEMENT //
            let contentGaleryViewAllLinkAttribute = {
                "href": `#${offerClassname}`,
            };
            dom.setAttributes(contentGaleryViewAllLink, contentGaleryViewAllLinkAttribute);

            // APPEND VIEW LINK INTO CONTENT-GALERY (AS ITS LAST CHILD)
            dom.append(contentGalery, contentGaleryViewAllContainer);
            dom.append(contentGaleryViewAllContainer, contentGaleryViewAllLink);

            // SET TEXT OF VIEW LINK ELEMENT OF EACH OFFER VIA JSON CLASSNAME DYNAMICALLY BASED ON WHICH SECTION (COUPONS, SAMPLES, GIVEAWAYS) //
            dom.setTextContent(`${offerClassname}--link`, "View All");
            let viewLinkButton = document.querySelector(`.${offerClassname}--link`);


            // WHEN YOU CLICK ON 'viewAll' BUTTON //
            viewLinkButton.addEventListener('click', function (e) {
                e.preventDefault();

                // ADD ACTIVE STYLE FOR CLICKED SECTION //
                let activeLink = document.querySelector(`a[href='#${offerClassname}']`);
                activeLink.className = "navbar__menu__links__active";

                // REMOVE ACTIVE STYLE FROM HOME PAGE //
                let activeHome = document.querySelector(`a[title='Home']`);
                activeHome.classList.remove("navbar__menu__links__active");

                // RETRIEVE TYPE ID OF EACH TYPE (COUPONS, SAMPLES, GIVEAWAYS) //
                let offerTypeId = offer[0].id;

                // LOAD THE OFFERS //
                createContent.createPage(offerTypeId);
            })
        }
    }



    // GENERATE CONTENT-GALERY-OFFERS AND CONTENT-GALERY-INFO BY INVOKING ABOVE FUNCTIONS //
    // IT'S USED FOR SECTIONS (COUPONS, SAMPLES, GIVEAWAYS) //
    // WHEN 'VIEWALL', NAVBAR LINK OR FILTER CATEGORY SELECTED //
    // NOT USED FOR MAIN PAGE //
    let createContentSidePage = (type) => {

        // SCROLL ALL THE WAY UP WHEN THE CONTENT LOADS //
        window.scrollTo(0, 0);

        // GENERATE ADDRESS TO ACQUIRE OFFER INFO & DESCRIPTION 
        let url = `https://couponmatix.firebaseio.com/v0/types/${type}.json`;

        dom.getOffers(url)
            .then((result) => {

                // PARSE JSON INTO JS OBJECT //
                let offer = JSON.parse(result);

                // REMOVE FOOTER //
                let footerEl = document.querySelector('.footer');
                if (footerEl !== null) {
                    dom.removeElement(footerEl);
                }

                // EMPTY CONTENT ELEMENT //
                let content = dom.getElement('content');
                dom.removeAllChildren(content);

                // ADD ADVERTISING //
                createContent.sideAd();

                // GENERATE CONTENT-GALERY-INFO FOR INFO & DESCRIPTION //
                createContent.galeryInfo(offer, false);
                filterbar.select(type);
                filterbar.sort();

                // RETURN NEW PROMISE TO ACQUIRE OFFER STATEMENT, IMAGE & LINK URL //
                return dom.getOffers(`https://couponmatix.firebaseio.com/v0/items/${type}.json`)
            })
            .then((result) => {

                // PARSE JSON INTO JS OBJECT //
                let offerDetails = JSON.parse(result);

                // SHOW NEWEST OFFERS //
                // REVERSE CHANGES ORIGINAL ARRAY //
                offerDetailsGlobal = sortByDate.ascending(offerDetails);

                // LOAD OFFERS //
                createContent.galery(offerDetails, false);
            })
            .then(() => {

                // CREATE FOOTER //
                createFooter();
            });
    };

    // USED IN 'filterbar.js' AS EVENTLISTENER ONCHANGE //
    // ONLY LOADS CONTENT--GALERY--CONTAINER //
    // DOESN'T DEAL WITH OTHER COMPONENTS OF THE PAGE //
    let createContentViaFiltering = (type, filterQuery) => {

        // SCROLL TO CONTENT--GALERY--INFO-H2-TITLE WHEN THE CONTENT LOADS //
        // SCROLL TO CONTENT--GALERY--INFO-H2-TITLE WHEN THE CONTENT LOADS //
        let scrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        if(scrolled > 350) {
            window.scrollTo(0, 200);
        }

        // GENERATE ADDRESS TO ACQUIRE OFFER STATEMENT, IMAGE & LINK URL //
        let url = `https://couponmatix.firebaseio.com/v0/items/${type}.json`;

        dom.getOffers(url)
            .then((result) => {

                // PARSE JSON INTO JS OBJECT //
                let offerDetails = JSON.parse(result);

                // EMPTY CONTENT ELEMENT //
                let contentGaleryContainer = dom.getElement('content__galery__container');
                dom.removeElement(contentGaleryContainer);

                // CHANGE SORTING SELECTED VALUE TO NEWEST //
                // EVERYTIME YOU SELECT A CATEGORY //
                let selectedNewest = dom.getElement('filterbar__sort');
                selectedNewest.children[0].selected = true;

                // SHOW NEWEST OFFERS //
                // REVERSE CHANGES ORIGINAL ARRAY //
                offerDetailsGlobal = sortByDate.ascending(offerDetails);

                // FILTER OFFERS BASED ON SELECT DROPDOWN VALUES(filterQuery) //
                // WHEN 'showAll' SELECTED //
                if (filterQuery === 'showAll') {
                    createContent.galery(offerDetails, false);
                }
                // WHEN A CATEGORY SELECTED //
                else {
                    let filteredOfferDetails = offerDetails.filter((currentEl) => currentEl.category == filterQuery);
                    offerDetailsGlobal = filteredOfferDetails;
                    createContent.galery(filteredOfferDetails, false);
                }
            })
    };


    // USED IN 'filterbar.js' AS EVENTLISTENER ONCHANGE //
    // ONLY LOADS CONTENT--GALERY--CONTAINER //
    // DOESN'T DEAL WITH OTHER COMPONENTS OF THE PAGE //
    let createContentViaSorting = (sortQuery) => {

        // SCROLL TO CONTENT--GALERY--INFO-H2-TITLE WHEN THE CONTENT LOADS //
        let scrolled = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0);
        if(scrolled > 350) {
            window.scrollTo(0, 200);
        }

        // EMPTY CONTENT ELEMENT //
        let contentGaleryContainer = dom.getElement('content__galery__container');
        dom.removeElement(contentGaleryContainer);

        // REMOVE SPACES AND TRANSFORM TO LOWERCASE //
        let query = sortQuery.replace(/\s/g, '').toLowerCase();

        switch (query) {
            case 'newest':
                let sortedOffers = sortByDate.ascending(offerDetailsGlobal);
                createContent.galery(sortedOffers, false);
                break;
            case 'oldest':
                sortedOffers = sortByDate.descending(offerDetailsGlobal);
                createContent.galery(sortedOffers, false);
                break;
            case 'branda-z':
                sortedOffers = sortByName.ascending(offerDetailsGlobal);
                createContent.galery(sortedOffers, false);
                break;
            case 'brandz-a':
                sortedOffers = sortByName.descending(offerDetailsGlobal);
                createContent.galery(sortedOffers, false);
                break;
        }
    };

    let sortByDate = function () {

        let ascending = (offers) => {
            return offers.sort((a, b) => b.addedAs - a.addedAs);
        };

        let descending = (offers) => {
            return offers.sort((a, b) => a.addedAs - b.addedAs);
        };

        return {
            ascending: ascending,
            descending: descending
        }
    }();

    let sortByName = function () {

        let ascending = (offers) => {
            return offers.sort(function (a, b) {
                let tagOne = a.tags.split(/(\s)/, 1)[0].toLowerCase(),
                    tagTwo = b.tags.split(/(\s)/, 1)[0].toLowerCase();

                if (tagOne < tagTwo) //sort string ascending
                    return -1;
                if (tagOne > tagTwo)
                    return 1;
                return 0; //default return value (no sorting)
            });
        };

        let descending = (offers) => {
            return offers.sort(function (a, b) {
                let tagOne = a.tags.split(/(\s)/, 1)[0].toLowerCase(),
                    tagTwo = b.tags.split(/(\s)/, 1)[0].toLowerCase();

                if (tagTwo < tagOne) //sort string descending
                    return -1;
                if (tagTwo > tagOne)
                    return 1;
                return 0; //default return value (no sorting)
            });
        };

        return {
            ascending: ascending,
            descending: descending
        }
    }();



    // GENERATE CONTENT-GALERY-OFFERS AND CONTENT-GALERY-INFO BY INVOKING ABOVE FUNCTIONS //
    // IT'S USED FOR ONLY MAIN PAGE //
    // NOT FOR SECTIONS (COUPONS, SAMPLES, GIVEAWAYS) //
    let createContentMainPage = () => {
        let url = `https://couponmatix.firebaseio.com/v0/types.json`;

        dom.getOffers(url)
            .then((result) => {
                // PARSE JSON INTO JS OBJECT //
                let offer = JSON.parse(result);
                filterbar.searchbar()
                // LOOP THROUGH 'offer' OBJECTS PROPERTIES //
                // GENERATES ALL THREE SECTIONS (COUPONS, SAMPLES, GIVEAWAYS) //
                // RETURNS PROMISE BECAUSE WE NEED FOOTER TO LOAD AFTER THE CONTENT IS LOADED //
                let prom = new Promise(function (resolve, reject) {
                    for (let prop in offer) {

                        // GENERATE CONTENT-GALERY-INFO FOR INFO & DESCRIPTION //
                        createContent.galeryInfo(offer[prop], true);

                        // SENDS REUQEST FOR CONTENT-GALERY-OFFER DETAILS //
                        dom.getOffers(`https://couponmatix.firebaseio.com/v0/items/${prop}.json`)
                            .then((result) => {
                                // PARSE JSON INTO JS OBJECT //
                                let offerDetails = JSON.parse(result);

                                // LIMIT HOW MANY OFFERS WILL BE RENDERED ON MAIN PAGE FOR EACH SECTION (COUPONS, SAMPLES, GIVEAWAYS) //
                                let limitedOffers = offerDetails.reverse().slice(0, 4);
                                createContent.galery(limitedOffers, true);
                                resolve('success');
                            })

                    }// LOOP ENDS//
                });

                prom.then(() => {
                    createFooter();
                });
            })
    };

    return {
        ads: ads,
        sideAd: sideAd,
        galeryInfo: galeryInfo,
        galery: galery,
        createPage: createContentSidePage,
        createContentViaSorting: createContentViaSorting,
        createContentViaFiltering,
        createContentMainPage: createContentMainPage
    }
}();

export default createContent;