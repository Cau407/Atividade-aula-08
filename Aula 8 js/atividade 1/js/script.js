const input = document.getElementById('main_input')
const button = document.getElementById('btn')

button.addEventListener('click', function(event) {
    event.preventDefault()
    var text = input.value
    console.log(text)
})