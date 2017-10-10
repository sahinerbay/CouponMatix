import createContent from '../components/_content';

let giveawayButton = document.querySelector('a[href="#giveaways"]');

giveawayButton.addEventListener('click', ()=>{
    createContent.createPage(3001);
});