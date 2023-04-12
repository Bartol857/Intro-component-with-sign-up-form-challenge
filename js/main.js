const username = document.querySelector('#username');
const username2 = document.querySelector('#username2');
const pass = document.querySelector('#password');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('.submit-btn');

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector('.error-text');

	formBox.classList.add('error');
	errorMsg.textContent = msg;
};


const clearError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove('error');
};


const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === '') {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};


const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(input, `${input.placeholder} cannot by empty. Minimum ${min} characters`);
	}
};


const checkMail = (email) => {
	const re =
		/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,3})$/i;

	if (re.test(email.value)) {
		clearError(email);
	} else {
		showError(email, 'Looks like this is not an email');
	}
};

submitBtn.addEventListener('click', (e) => {
	e.preventDefault();

	checkForm([username, username2, pass, email]);
	checkLength(username, 3);
	checkLength(username2, 3);
	checkLength(pass, 8);
	checkMail(email);

});
