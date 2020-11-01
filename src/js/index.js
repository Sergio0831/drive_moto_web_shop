import $ from 'jquery';
import 'slick-carousel';
import 'normalize.css';
import "../scss/style.scss";


// Banner Slider
$(function() {
  $(".banner-section__slider").slick({
    slidesToShow: 1,
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"></button>',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"></button>',
  })
})