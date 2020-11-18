import $ from 'jquery';
import 'slick-carousel';
import 'normalize-scss';
import "../styles/styles.scss";
import { imageSliders } from "./modules/Sliders";
import { tabs } from "./modules/Tabs";
import { addFavoriteItem } from "./modules/Favorite-item";

$(window).on('load', imageSliders);
tabs();
addFavoriteItem();

if (module.hot) {
  module.hot.accept()
}
