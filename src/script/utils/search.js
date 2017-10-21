import dom from './_dom';
import createContent from '../components/_content';

let searchOffers = (el) => {

    let url = `https://couponmatix.firebaseio.com/v0/items.json`;
    let search_results = dom.getElement('filterbar__searchbar__result'),
        searchbar = dom.getElement('filterbar__searchbar');

    el.addEventListener('keyup', function (e) {

        searchbar.style.backgroundImage = "url('./images/clearsearchicon.png')";
        searchbar.addEventListener('click', ()=> {
            e.target.textContent = "";
            e.target.value = "";
            searchbar.style.backgroundImage = "url('./images/searchiconhover.png')";
            
        });

        let input_val = this.value;

        if (input_val.length > 0) {

            dom.getOffers(url)
                .then((result) => {
                    // PARSE JSON INTO JS OBJECT //
                    let offer = JSON.parse(result);
                    let offers_return = [];

                    // LOOP THROUGH 'offer' OBJECTS PROPERTIES //
                    // CHECK ALL THREE SECTIONS (COUPONS, SAMPLES, GIVEAWAYS) //
                    for (let prop in offer) {
                        for (let sub_prop of offer[prop]) {
                            let re = new RegExp(`\\b${input_val}`, 'i');

                            if (sub_prop.tags.search(re) !== -1) {
                                offers_return.push(sub_prop);
                            }
                        }
                    }
                    return offers_return.slice(0, 4);
                })
                .then((offers_found) => {

                    // REMOVE PREVIOUS SEARCH RESULTS //
                    dom.removeAllChildren(search_results);

                    // SHOW RESULTS ON PAGE //
                    showResults(offers_found);

                    if (offers_found.length > 0) {
                        // SHOW RESULTS AS LINKS RIGHT BELOW SEARCH BAR //
                        for (let i = 0; i < offers_found.length; i++) {
                            let filterbar_li = dom.createElementWithClassName('li', 'filterbar__searchbar__result__links'),
                                filterbar_li_a = dom.createElementWithClassName('a', 'filterbar__searchbar__result__links_a');

                            filterbar_li_a.textContent = `${offers_found[i].statement} ${offers_found[i].description} `;
                            filterbar_li_a.href = `#`;

                            filterbar_li_a.addEventListener('click', (e) => {
                                e.preventDefault();
                                search_results.style.display = 'none';
                                searchbar.value = e.target.textContent;
                                showResults(offers_found[i]);
                            });

                            dom.append(filterbar_li, filterbar_li_a);
                            dom.append(search_results, filterbar_li);
                        }

                    } else {
                        let filterbar_li = dom.createElementWithClassName('li', 'filterbar__searchbar__result__links');

                        filterbar_li.textContent = "Offer Not Found!"
                        dom.append(search_results, filterbar_li);
                        showResults(offers_found);
                    }
                    search_results.style.display = 'block';
                })
        } else {
            dom.removeElement(search_results);
            search_results.style.display = 'none';

            // EMPTY CONTENT ELEMENT //
            let content = dom.getElement('content');
            dom.removeAllChildren(content);
            let footerEl = dom.getElement('footer');
            if (footerEl !== null) {
                dom.removeElement(footerEl);
            }
            createContent.createContentMainPage();
        }
    });// Event listener
};

let showResults = (offer) => {

    let content_galery = document.querySelectorAll('.content__galery');
    for (let index = 0; index < content_galery.length; index++) {
        if (index === 0) dom.removeAllChildren(content_galery[index])
        else dom.removeElement(content_galery[index]);
    }

    let content_galery_info = dom.createElementWithClassName('div', 'content__galery__info row__xs-12 row__lg-12'),
        h2 = dom.createElementWithClassName('h2', `content__galery__info__title content__galery__info__title--box-shadow`);
    h2.textContent = "Search Results";

    dom.append(content_galery[0], content_galery_info);
    dom.append(content_galery_info, h2);

    window.removeEventListener('scroll', dom.handleScroll);

    let content_galery_container = dom.createElementWithClassName('div', 'content__galery__container');
    dom.append(content_galery[0], content_galery_container);

    if (offer.length === 0) {
        let para = dom.createElementWithClassName('p', 'content__galery__container__not-found');
        para.textContent = "Sorry. Offer Not Found!"
        dom.append(content_galery_container, para);
    } else {
        if (!Array.isArray(offer)) {
            dom.createContentGaleryOffer(content_galery_container, offer);
        } else {
            // LOOP THROUGH RESPONSE OBJECT (WHICH IS ARRAY NOW, AFTER PARSED FROM JSON) //
            for (let i = 0; i < offer.length; i++) {
                dom.createContentGaleryOffer(content_galery_container, offer[i], i);
            }//END OF LOOP//
        }
    }
};

export default searchOffers;