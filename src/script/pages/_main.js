import dom from '../utils/_dom';
import createContent from '../components/_content';

let getData = (type) => {
    let url = `https://couponmatix.firebaseio.com/v0/types/${type}.json`;

    dom.getOffers(url)
        .then((result) => {
            let offer = JSON.parse(result);
            createContent.galeryInfo(offer);
            return dom.getOffers(`https://couponmatix.firebaseio.com/v0/items/${type}.json`)
        })
        .then((result) => {
            let offerDetails = JSON.parse(result);
            createContent.galery(offerDetails)
        });
};

getData('1001');


