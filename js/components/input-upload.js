let input_uploads = document.querySelectorAll('input[type="file"]')


let outer_container = document.createElement("div")
outer_container.className = "chained-fields--upload"

let inner = document.createElement("div")
let inner1 = document.createElement("div")

let label = document.createElement("label")
label.className = "button"

let field = document.createElement("input")
field.className = "input"
field.type = "file"
field.style = "display:none;"

// fake field
let fake_field = document.createElement("input")
fake_field.className = "input filename"
fake_field.type = "text"
fake_field.disabled = "disabled"
fake_field.placeholder = "choose a file"

input_uploads.forEach = (input_upload) => {
  [].forEach.call(input_uploads, input_upload)
}

export default function() {

  input_uploads.forEach((input, indx) => {
    if (!!input) {

      let input_id = `input-upload_${indx}`
      let input_name = input.getAttribute("name")
      label.innerText = input.dataset.label || "Browse..."
      label.setAttribute("for", input_id)
      field.setAttribute("name", input_name)
      field.setAttribute("id", input_id)
      label.append(field)
      inner.append(label)
      inner1.append(fake_field)
      outer_container.append(inner)
      outer_container.append(inner1)

      let inputParent = input.parentNode
      inputParent.replaceChild(outer_container,input)

      // field.addEventListener('change', (e) => {
      //   let numFiles = input.files ? input.files.length : 1
      //   let label = field.value.replace(/\\/g, '/').replace(/.*\//, '')
      //   document.querySelector(field.dataset.fieldrel).value = label
      // }, true)
    }
  })
}
