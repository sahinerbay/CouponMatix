import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

// RETRIEVE FREE SAMPLE NAVBAR LINK  //
let sampleButton = document.querySelector('a[href="#samples"]');

// ONCLICK LOADS FILTERBAR AND CONTENT-GALERY BASED ON TYPE ID //
sampleButton.addEventListener('click', (event)=>{
    event.preventDefault();
    filterbar.select(2001);
    createContent.createPage(2001);
});