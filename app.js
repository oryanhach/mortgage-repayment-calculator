const form = document.getElementById('form')
const clearBtn = document.querySelector('.header__btn')
const mortgageAmount = document.getElementById('mortgage__amount')
const mortgageTerm = document.getElementById('mortgage__term')
const interestRate = document.getElementById('interest__rate')
const mortgageType = document.querySelector(
	'input[name="mortgage__type"]:checked'
)

form.addEventListener('submit', (e) => {
	e.preventDefault()

	checkInputs()
})

clearBtn.addEventListener('click', (e) => {
	clearInputs()
})

function checkInputs() {
	// get the values from the inputs
	const mortgageAmountValue = mortgageAmount.value.trim()
	const mortgageTermValue = mortgageTerm.value.trim()
	const interestRateValue = interestRate.value.trim()

	// Get selected radio value
	const selectedMortgageType = document.querySelector(
		'input[name="mortgage__type"]:checked'
	)
	const mortgageTypeValue = selectedMortgageType
		? selectedMortgageType.value
		: ''

	if (mortgageAmountValue === '') {
		setErrorFor(mortgageAmount, 'Mortgage Amount cannot be empty')
	} else if (isNaN(mortgageAmountValue)) {
		// check if the value is a number
		setErrorFor(mortgageAmount, 'Please write a valid number')
	}

	if (mortgageTermValue === '') {
		setErrorFor(mortgageTerm, 'Mortgage Term cannot be empty')
	} else if (isNaN(mortgageTermValue)) {
		// check if the value is a number
		setErrorFor(mortgageTerm, 'Please write a valid number')
	}

	if (interestRateValue === '') {
		setErrorFor(interestRate, 'Interest Rate cannot be empty')
	} else if (isNaN(interestRateValue)) {
		// check if the value is a number
		setErrorFor(interestRate, 'Please write a valid number')
	}

	if (selectedMortgageType === null) {
		const radioContainer = document.querySelector('.radio__btn-container')
		setErrorFor(radioContainer, 'Mortgage Type cannot be empty')
	}
}

function setErrorFor(input, message) {
	// Check: if input has class form-control, use it, else go to parent
	const formControl = input.classList.contains('form-control')
		? input
		: input.parentElement

	const small = formControl.querySelector('small')

	small.innerText = message
	formControl.classList.add('error')
}

function clearInputs() {
	// Clear text inputs
	mortgageAmount.value = ''
	mortgageTerm.value = ''
	interestRate.value = ''

	// Clear radio buttons
	const mortgageTypes = document.querySelectorAll(
		'input[name="mortgage__type"]'
	)
	mortgageTypes.forEach((radio) => (radio.checked = false))

	// Remove error classes and messages
	const formControls = document.querySelectorAll('.form-control')
	formControls.forEach((control) => {
		control.classList.remove('error')
		const small = control.querySelector('small')
		if (small) small.innerText = ''
	})
}

//// ----- TODO ----- \\\\

// TODO: when clicking on the button:
//   // TODO: if valid, get the numbers from the html
//       // TODO: calculate monthly repayments
//       // TODO: calculate total amount
//            // TODO: change the results__container html with the results
//                  // TODO: create the css styling
