import logo from '../../images/logo.png';
import login from '../../images/login_icon.jpg';



let loginIcon = new Image();
loginIcon.src = login;

let navbar__logo__login = document.querySelector('.navbar__top__login');

navbar__logo__login.style.backgroundImage = `url(${login})`;


