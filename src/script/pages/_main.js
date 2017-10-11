import dom from '../utils/_dom';
import createContent from '../components/_content';
import filterbar from '../components/_filterbar';

// GENERATE FILTERBAR (EMPTY INSIDE) //
filterbar.content();

// GENERATE FILTERBAR-SEARCHBAR //
filterbar.searchbar();

// GENERATE CONTENT-GALERY INFO & DESCRIPTION & OFFERS
createContent.createContentMainPage();