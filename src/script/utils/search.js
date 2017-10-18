import dom from './_dom';

let searchOffers = (el) => {

    let url = `https://couponmatix.firebaseio.com/v0/items.json`;
    let search_results = document.querySelector('.filterbar__searchbar__result');

    el.addEventListener('keyup', function () {

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
                            } else {
                                console.log('not found')
                            }
                        }
                    }
                    return offers_return
                })
                .then((offers_found) => {
                    dom.removeAllChildren(search_results)
                    for (let i = 0; i < offers_found.length; i++) {
                        let filterbar_li = dom.createElementWithClassName('li', 'filterbar__searchbar__result__links'),
                            filterbar_li_a = dom.createElementWithClassName('a', 'filterbar__searchbar__result__links_a');

                        filterbar_li_a.textContent = `${offers_found[i].classname} ${offers_found[i].description} `;
                        filterbar_li_a.href = `${offers_found[i].link}`
                        dom.append(filterbar_li, filterbar_li_a);
                        dom.append(search_results, filterbar_li);
                    }
                    search_results.style.display = 'block';
                })
        } else {
            dom.removeAllChildren(search_results);
            search_results.style.display = 'none';
        }
    });// Event listener
};

export default searchOffers;