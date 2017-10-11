import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

// RETRIEVE GIVEAWAYS NAVBAR LINK  //
let giveawayButton = document.querySelector('a[href="#giveaways"]');

// ONCLICK LOADS FILTERBAR AND CONTENT-GALERY BASED ON TYPE ID //
giveawayButton.addEventListener('click', (event)=>{
    event.preventDefault();
    filterbar.select(3001);
    createContent.createPage(3001);
});