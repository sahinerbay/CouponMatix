let dom = function () {

    let createElement = (el) => document.createElement(el);

    let createElementWithClassName = (el, className) => {
        let element = document.createElement(el);
        element.className = className;
        return element;
    };

    let setTextContent = (el, txt, index) => {
        let foundElement = document.querySelectorAll(`.${el}`);
        foundElement[index].textContent = txt;

    };

    let append = (parent, ...args) => {
        if (args.length > 1) {
            for (let i = 0; i < args.length; i++) {
                parent.appendChild(args[i]);
            }
        } else parent.appendChild(args[0])
    };

    let getOffers = (url) => {

        return new Promise(function (resolve, reject) {
            var xhttp = new XMLHttpRequest();

            xhttp.onload = () => {
                if (xhttp.readyState === 4) { // XMLHttpRequest.DONE
                    if (xhttp.status === 200) {
                        resolve(xhttp.responseText);
                    } else reject(Error(xhttp.statusText));
                }
            };

            //onerror fires when there is  a denied cross-domain request
            xhttp.onerror = () => {
                reject(Error('Error fetching data.'));
            };

            xhttp.open("GET", url); //leave empty or false for Asynchronous
            xhttp.send();
        })
    };

    return {
        createElement: createElement,
        createElementWithClassName: createElementWithClassName,
        setTextContent: setTextContent,
        append: append,
        getOffers: getOffers,
    }
}();

export default dom;


