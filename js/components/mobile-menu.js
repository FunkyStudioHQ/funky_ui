import Slideout from "slideout"

export default function(panel_id, menu_id, position = 'right') {
  let panel = document.querySelector(panel_id)
  let menu = document.querySelector(menu_id)

  if (panel && menu) {
    let slideout = new Slideout({
      'panel': panel,
      'menu': menu,
      'padding': 256,
      'tolerance': 70,
      'side': position
    })

    document.querySelector('.navbar__burger').addEventListener('click', function() {
      menu.classList.remove('slideout-open');
      slideout.toggle()
    })
  }
}
