import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

let giveawayButton = document.querySelector('a[href="#giveaways"]');

giveawayButton.addEventListener('click', (event)=>{
    event.preventDefault();
    filterbar.select(3001);
    createContent.createPage(3001);
});