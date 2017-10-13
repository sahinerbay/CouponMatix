import dom from '../utils/_dom';

// CREATE FOOTER ELEMENT //
let createFooter = ()=> {
    let footer = dom.createElementWithClassName('div', 'footer footer--width');
    document.body.appendChild(footer);
}

export default createFooter;