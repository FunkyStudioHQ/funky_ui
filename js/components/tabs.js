let tabs = document.querySelectorAll(".tabs")

tabs.forEach = (tab) => {
  [].forEach.call(tabs, tab);
}

export default function(){
  tabs.forEach((tab) => {
    let items = tab.querySelectorAll(".tabs__list > .tabs__list__item")
    let panels = tab.querySelectorAll(".tabs__content > .tabs__content__item")
    items.forEach((item, i) => {
      item.addEventListener('click', (e) => {
        // remove active classes
        [].forEach.call((items), function(el) {
          el.classList.remove("tabs__list__item--active");
        })
        panels.forEach((item) => {
          item.classList.remove("tabs__content__item--active")
        })
        // add active classes
        e.target.parentElement.classList.add("tabs__list__item--active")
        panels[i].classList.add("tabs__content__item--active")
      }, true)
    })
  })
}
