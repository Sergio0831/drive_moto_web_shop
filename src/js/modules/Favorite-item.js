import $ from 'jquery';

export function addFavoriteItem() {
  
  $('.product-card__favorite').on('click', function() {
    $(this).toggleClass('product-card__favorite--active');
  })
}