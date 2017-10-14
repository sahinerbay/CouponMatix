import dom from '../utils/_dom';

// CREATE FOOTER ELEMENT //
let createFooter = () => {
    let footer = dom.createElementWithClassName('div', 'footer footer--width');
    
    let wrapper = document.querySelector('.wrapper');
        
    wrapper.parentElement.insertBefore(footer, wrapper.nextElementSibling);
}

export default createFooter;