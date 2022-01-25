var body = $("body")
var menu = $(".menu")
var mobileNavigation = $(".mobile-navigation")
var isMenuOpen = false

menu.on('click', function() {
  isMenuOpen = !isMenuOpen

  body.toggleClass("is-menu-open", isMenuOpen)
  menu.toggleClass("is-open", isMenuOpen)
  mobileNavigation.toggleClass("is-open", isMenuOpen)
})
