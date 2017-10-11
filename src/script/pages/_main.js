import dom from '../utils/_dom';
import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

filterbar.content();
filterbar.searchbar();



let url = `https://couponmatix.firebaseio.com/v0/types.json`;

dom.getOffers(url)
    .then((result) => {
        let offer = JSON.parse(result);

        for (let prop in offer) {
            createContent.galeryInfo(offer[prop]);
            dom.getOffers(`https://couponmatix.firebaseio.com/v0/items/${prop}.json`)
                .then((result) => {
                    let offerDetails = JSON.parse(result);
                    let limitedOffers = offerDetails.slice(0,4);
                    createContent.galery(limitedOffers);
                })
        }
    })














