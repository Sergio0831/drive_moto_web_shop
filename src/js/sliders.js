import $ from 'jquery';
import 'slick-carousel';

export function imageSliders() {
  // Banner Slider
  $(".banner-section__slider").slick({
        slidesToShow: 1,
        fade: true,
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"></button>'
  })
  // Popular products slider
  $('.products-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="products-slider__btn products-slider__btnprev"></button>',
    nextArrow: '<button class="products-slider__btn products-slider__btnnext"></button>'
  })
}