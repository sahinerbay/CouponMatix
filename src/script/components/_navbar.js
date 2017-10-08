let header = document.querySelector('.header');

let fragment = document.createDocumentFragment();

let div = document.createElement('div');
div.className = "navbar row row--margin-bottom";


div.innerHTML = `
                        <div class="navbar__logo row__xs-0 row__s-2 row__md-2 row__lg-2">
                            <a href="/"><img src="./images/logo.png" alt=""></a>
                        </div>
                        <div class="navbar__menu row row__xs-12 row__s-10 row__md-10 row__lg-10 row--gutter row--align-items">
                            <div class="navbar__menu__links">
                                <div class="row__lg-10--small row__s-10">
                                    <a href="/coupons.html">Coupons</a>
                                    <a href="/samples.html">Samples</a>
                                    <a href="/giveaways.html">Giveaways</a>
                                    <a href="/about.html">About</a>
                                    <a href="javascript:void(0);" class="navbar__menu__hamburgerIcon" onclick="myFunction()">&#9776;</a>
                                </div>
                                <div class="navbar__menu__links--signinsignup row__xs-0 row__s-2 row__lg-2--large ">
                                    <a href="#about">Sign Up</a>
                                    <div class="navbar__menu__login">
                                        <div class="navbar__menu__login__icon">
                                            <img src="./images/login_icon.png" alt="">
                                        </div>
                                        <div class="navbar__menu__login__content">
                                            <a href="#about">Sign In</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                `;

fragment.appendChild(div);
header.appendChild(fragment);