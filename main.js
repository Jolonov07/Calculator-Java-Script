const input = document.querySelector('.input') //input
const buttons = document.querySelectorAll('button') //all butttons
const equals = document.querySelector('.equals') // =
let buttonText = ''
let value = ''

buttons.forEach(item => {
	item.addEventListener('click', e => {
		buttonText = e.target.innerText
		if (buttonText == 'x') {
			buttonText = '*'
			value += buttonText
			input.value = value
		} else if (buttonText == 'C') {
			value = ''
			input.value = value
		} else if (buttonText == '=') {
			input.value = eval(value)
		} else {
			value += buttonText
			input.value = value
		}
	})
})