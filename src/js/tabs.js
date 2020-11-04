import $ from 'jquery';

export function tabs() {

  // Header nav menu
  $('.menu-categories__link').on('click', function() {
    $('.menu-categories__link').removeClass('active-categorie');

    $(this).addClass('active-categorie');
  })

  // Search tabs
  $('.search__tabs-item').on('click', function(e) {
    e.preventDefault();
    $('.search__tabs-item').removeClass('search__active-link');
    $('.search__content-item').removeClass('active');

    $(this).addClass('search__active-link');
    $($(this).attr('href')).addClass('active');
  })

  // Popular products tabs
  $('.products__tabs-link').on('click', function(e) {
    e.preventDefault();
    $('.products__tabs-link').removeClass('products__active-link');
    $('.products__tabs-content__item').removeClass('active');

    $(this).addClass('products__active-link');
    $($(this).attr('href')).addClass('active');
  })
}