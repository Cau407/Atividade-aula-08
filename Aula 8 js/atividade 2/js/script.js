const input = document.getElementById('input')
const button = document.getElementById('btn')
const textDiv = document.getElementById('text_div')

button.addEventListener('click', function() {
    const paragraph = document.getElementById('paragraph')
    paragraph.innerHTML = `
    <p>${input.value}</p>`
    textDiv.appendChild(paragraph)
    input.value = ''
})