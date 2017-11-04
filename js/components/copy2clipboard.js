import Clipboard from 'clipboard'

let codes = document.querySelectorAll('pre:not(.not-copy)')
let addCopy = function(element) {
  let copy = document.createElement("button")
  copy.className = "copy button"
  copy.textContent = "copy"
  element.append(copy)
}

codes.forEach = (code) => {
  [].forEach.call(codes, code);
}

export default function() {
  codes.forEach((code) => {
    if (!!code) {
      addCopy(code)
      new Clipboard('.copy', {
          target: function(trigger) {
            return trigger.previousElementSibling
          }
      })
    }
  })
}
