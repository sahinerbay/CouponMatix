import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

let sampleButton = document.querySelector('a[href="#samples"]');

sampleButton.addEventListener('click', (event)=>{
    event.preventDefault();
    filterbar.select(2001);
    createContent.createPage(2001);
});