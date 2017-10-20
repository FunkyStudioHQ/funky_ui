let input_uploads = document.querySelectorAll('input[type="file"]')

input_uploads.forEach = (input_upload) => {
  [].forEach.call(input_uploads, input_upload);
}

export default function() {
  input_uploads.forEach((input) => {
    if (!!input) {
      input.addEventListener('change', (e) => {        
        let numFiles = input.files ? input.files.length : 1
        let label = input.value.replace(/\\/g, '/').replace(/.*\//, '')
        document.querySelector(input.dataset.fieldrel).value = label
      }, true)
    }
  })
}
