import dom from '../utils/_dom';
import createContent from './_content';

let filterBar = function () {

    // RETRIEVE HEADER ELEMENT //
    let header = document.querySelector('.header');

    // GENERATE EMPTY FILTER BAR //
    let content = () => {

        // CREATE PARENT FILTER BAR ELEMENT(DIV) AND ITS ONLY CHILD ELEMENT(DIV) WITH CLASSNAMES //
        let filterbar = dom.createElementWithClassName('div', 'filterbar'),
            filterbarContent = dom.createElementWithClassName('div', 'filterbar--content');

        filterbarContent.innerHTML = "";

        // INSERT FILTER BAR AND ITS ONLY CHILD INTO HEADER //
        dom.append(header, filterbar);
        dom.append(filterbar, filterbarContent);
    };

    // GENERATE SEARCH BAR //
    let searchbar = () => {

        // CREATE SEARCH BAR ELEMENT(INPUT) WITH CLASSNAME //
        let filterbarSearch = dom.createElementWithClassName('input', 'filterbar__searchbar');

        // CHECK PREVIOUSLY CREATED SEARCH BAR ELEMENT //
        let duplicate = dom.getElement(filterbarSearch.className);
        if (duplicate !== null) {
            dom.removeElement(duplicate);
        }

        // SET ATTRIBUTES FOR SEARCH BAR //
        let filterSearchAttributes = {
            'type': 'text',
            'name': 'search',
            'placeholder': 'Search..'
        };
        dom.setAttributes(filterbarSearch, filterSearchAttributes);

        // INSERT SEARCH BAR INTO FILTER BAR //        
        let filterbarContent = dom.getElement('filterbar--content');
        dom.append(filterbarContent, filterbarSearch);
    };

    // FUNCTION TO GENERATE SELECT DROPDOWN //
    let select = (type) => {

        // CREATE SELECT DROPDOWN ELEMENT(SELECT) WITH CLASSNAME //
        let filterbarSelect = dom.createElementWithClassName('select', 'filterbar__select');

        // CHECK PREVIOUSLY CREATED SELECT DROPDOWN ELEMENT //
        let duplicate = dom.getElement(filterbarSelect.className);
        if (duplicate !== null) {
            dom.removeElement(duplicate);
        }

        // SET ATTRIBUTES FOR SELECT DROPDOWN //
        let filterSelectAttributes = {
            'name': 'categories',
        };
        dom.setAttributes(filterbarSelect, filterSelectAttributes);

        // SEND REQUEST FOR OFFER DETAILS VIA TYPE ID//
        let url = `https://couponmatix.firebaseio.com/v0/items/${type}.json`;
        dom.getOffers(url)
            .then((result) => {

                // PARSE JSON INTO JS OBJECT //
                let offerDetails = JSON.parse(result);

                // COUNT CATEGORIES AND SAVE THEM IN CATEGORY OBJECT //
                let category = {};
                category['Show All'] = offerDetails.length;
                offerDetails.forEach((currentEl) => {
                    category[currentEl.category] = (category[currentEl.category] || 0) + 1;
                });

                // INSERT CATEGORIES INTO SELECT DROPDOWN //
                for (let cat in category) {
                    let option = document.createElement('option');
                    if(cat == 'Show All') {
                        option.value = 'showAll';
                    } else option.value = cat;
                    option.textContent = `${cat} (${category[cat]})`;
                    filterbarSelect.appendChild(option);
                }
            });

        // INSERT SELECT DROPDOWN INTO FILTER BAR //
        let filterbarContent = dom.getElement('filterbar--content');
        dom.append(filterbarContent, filterbarSelect);

        // FILTERING VIA SELECT BAR ONCHANGE //
        filterbarSelect.addEventListener('change', (e) => {
            createContent.createPage(type, e.target.value);
        })
    }

    return {
        content: content,
        select: select,
        searchbar: searchbar
    }
}();

export default filterBar;