let header = document.querySelector('.header');

let fragment = document.createDocumentFragment();

let div = document.createElement('div');
div.className = "navbar row ";


div.innerHTML = `
                        <div class="navbar__logo row__xs-0 row__s-0 row__md-3 row__lg-2">
                            <a href="/"><img src="./images/logo.jpg" alt=""></a>
                        </div>
                        <div class="navbar__menu row row__xs-12 row__s-12 row__md-9 row__lg-10 row--gutter row--align-items">
                            <div class="navbar__menu__links">
                                <div class="row__xs-12 row__s-12 row__m-12 row__lg-12">
                                    <a href="#coupons">Coupons</a>
                                    <a  href="#samples">Samples</a>
                                    <a  href="#giveaways">Giveaways</a>
                                    <a href="/about.html">About</a>
                                    <a href="javascript:void(0);" class="navbar__menu__links__hamburgerIcon" >&#9776;</a>
                                </div>
                            </div>
                        </div>
                `;

fragment.appendChild(div);
header.appendChild(fragment);

let hamburgerIcon = document.querySelector('.navbar__menu__links__hamburgerIcon'),
    menu = document.querySelector(".navbar__menu__links");

hamburgerIcon.addEventListener('click', ()=> {
    console.log(menu.className)
    if (menu.className === "navbar__menu__links") {
        menu.className += " responsive";
    } else {
        menu.className = "navbar__menu__links";
    }
});