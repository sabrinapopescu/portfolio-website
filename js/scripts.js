var body = $("body")
var menu = $(".menu")
var mobileNavigation = $(".mobile-navigation")
var isMenuOpen = false

menu.on('click', function() {
  isMenuOpen = !isMenuOpen

  toggleMenuOpen()
})

function toggleMenuOpen() {
  body.toggleClass("is-menu-open", isMenuOpen)
  menu.toggleClass("is-open", isMenuOpen)
  mobileNavigation.toggleClass("is-open", isMenuOpen)
}

$(window).on('resize', function () {
  var width = $(window).width()
  if (isMenuOpen && width > 768) {
    isMenuOpen = false
    toggleMenuOpen()
  }
})
