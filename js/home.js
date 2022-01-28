var $ = window.$

var header = $('header')
var hero = $('#hero')

var heroEndsAt = hero.offset().top + hero.outerHeight() - header.outerHeight()
var scrollPosition = 0

$(window).on('scroll', function () {
  scrollPosition = window.scrollY
  header.toggleClass('is-dark', scrollPosition <= heroEndsAt)
})
