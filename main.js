const input = document.querySelector('.input')
const buttons = document.querySelectorAll('button')
const equals = document.querySelector('.equals')
let buttonText = ''
let value = ''

equals.addEventListener('click', () => {
	if (input.value === '') {
		input.value = ' '
	}
})
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

// ====================================================================== //

// const input  = document.querySelector('.input')
// const left = document.querySelector('.left') // (
// const right = document.querySelector('.right') // )
// const clear = document.querySelector('.clear') // clear
// const percent = document.querySelector('.percent') //%

// const zero = document.querySelector('.zero')
// const one = document.querySelector('.one')
// const two = document.querySelector('.two')
// const three = document.querySelector('.three')
// const four = document.querySelector('four')
// const five = document.querySelector('.five')
// const six = document.querySelector('.six')
// const seven = document.querySelector('.seven')
// const eight = document.querySelector('.eight')
// const nine = document.querySelector('.nine')

// const plus = document.querySelector('.plus') //+
// const minus = document.querySelector('.minus') //-
// const x = document.querySelector('.x') //*
// const division = document.querySelector('.division') // /

// const dot = document.querySelector('.dot') //.
// const equals = document.querySelector('.equals') //=

// let screen = document.querySelector('.input')// buttons = document.querySelectorAll('button')
// let screenValue = ''

// for (item of buttons) {
// 	item.addEventListener('click', e => {
// 	let	buttonText = e.target.innerText
// 		if (buttonText == 'X') {
// 			buttonText = '*'
// 			screenValue += buttonText
// 			screen.value = screenValue
// 		} else if (buttonText == 'C') {
// 			screenValue = ''
// 			screen.value = screenValue
// 		} else if (buttonText == '=') {
// 			screen.value = eval(screenValue)
// 		} else {
// 			screenValue += buttonText
// 			screen.value = screenValue
// 		}
// 	})
// }
