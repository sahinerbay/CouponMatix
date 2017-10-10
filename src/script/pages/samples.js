import createContent from '../components/_content';

let sampleButton = document.querySelector('a[href="#samples"]');

sampleButton.addEventListener('click', ()=>{
    createContent.createPage(2001);
});