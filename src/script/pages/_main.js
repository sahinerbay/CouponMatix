import dom from '../utils/_dom';
import createContent from '../components/_content';

let getData = () => {

    let url = `https://couponmatix.firebaseio.com/v0/types.json`;

    dom.getOffers(url)
        .then((result) => {
            let offer = JSON.parse(result);

            for (let prop in offer) {
                createContent.galeryInfo(offer[prop]);
                dom.getOffers(`https://couponmatix.firebaseio.com/v0/items/${prop}.json`)
                    .then((result) => {
                        let offerDetails = JSON.parse(result);
                        createContent.galery(offerDetails);
                    })
            }
        })
};

getData();












