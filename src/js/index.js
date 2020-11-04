import $ from 'jquery';
import 'slick-carousel';
import 'normalize.css';
import "../scss/style.scss";
import { imageSliders } from "./sliders";
import { tabs } from "./tabs";
import { addFavoriteItem } from "./favorite-item";

$(window).on('load', imageSliders);
tabs();
addFavoriteItem();
