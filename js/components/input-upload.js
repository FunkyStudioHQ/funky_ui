let input_uploads = document.querySelectorAll('input[type="file"]')


let outer_container = document.createElement("div")
outer_container.className = "chained-fields"

let inner = document.createElement("div")
let inner1 = document.createElement("div")

let label = document.createElement("label")
label.innerText = "Carica"

let field = document.createElement("input")
field.className = "input"
field.type = "file"
field.placeholder = "choose a file"

// fake field
let fake_field = document.createElement("input")
fake_field.className = "input"
fake_field.type = "text"
fake_field.disabled = "true"
fake_field.placeholder = "choose a file"


label.append(fake_field)
inner.append(label)
inner1.append(field)
outer_container.append(inner)
outer_container.append(inner1)

input_uploads.forEach = (input_upload) => {
  [].forEach.call(input_uploads, input_upload)
}

export default function() {
  console.log(outer_container.innerHTML)
  input_uploads.forEach((input) => {
    if (!!input) {

      if(input.outerHTML) {
          input.outerHTML = outer_container
      }
      else {
          let parent = input.parentNode
          parent.replaceChild(outer_container,input)
      }


      // input.addEventListener('change', (e) => {
      //   let numFiles = input.files ? input.files.length : 1
      //   let label = input.value.replace(/\\/g, '/').replace(/.*\//, '')
      //   document.querySelector(input.dataset.fieldrel).value = label
      // }, true)
    }
  })
}
