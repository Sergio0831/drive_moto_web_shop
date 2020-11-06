import $ from 'jquery';

export function tabs() {

  // Header nav menu
  $('.menu-categories__link').on('click', function() {
    $('.menu-categories__link').removeClass('active-categorie');
    $(this).addClass('active-categorie');
  })

  // Tabs
  $('.tabs-link').on('click', function(e) {
    e.preventDefault();
    $($(this).siblings()).removeClass('tabs-link--active');
    $($(this).parent().siblings().find('div')).removeClass('active');

    $(this).addClass('tabs-link--active');
    $($(this).attr('href')).addClass('active');
  })
}