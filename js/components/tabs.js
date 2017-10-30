let tabs = document.querySelectorAll(".tabs, .tabs--bar, .tabs--boxed")

tabs.forEach = (tab) => {
  [].forEach.call(tabs, tab);
}

export default function(){
  tabs.forEach((tab) => {
    let items = tab.querySelectorAll("ul li a")
    items.forEach((item) => {
      item.addEventListener('click', (e) => {
        console.log(1)
      }, true)
    })
  })
}
