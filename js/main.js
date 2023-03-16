const submitBtn = document.querySelector('.submit-btn');
const forName = document.querySelector('.fname');
const lastName = document.querySelector('.lname');
const email = document.querySelector('.email-input');
const password = document.querySelector('.password');

function validateForm() {
	const mailFormat = /^\w+([.-]?=\w+)*@\w+([.-]?=\w+)*(.\w{2,3})+$/;
    
    if (forName.value.length < 1) {
        document.querySelector('.error-fname').style.display = 'block';
        document.querySelector('.error-fname').innerHTML =
            'First name cannot be empty';
        document.querySelector('.error-icon1').style.display = 'block';
        forName.style.borderColor = "red";
    } else {
        document.querySelector('.error-fname').style.display = 'none';
        document.querySelector('.error-icon1').style.display = 'none';
        forName.style.borderColor = "";
    }

    if (lastName.value.length < 1) {
        document.querySelector('.error-lname').style.display = 'block';
        document.querySelector('.error-lname').innerHTML =
            'Last name cannot be empty';
        document.querySelector('.error-icon2').style.display = 'block';
        lastName.style.borderColor = "red";
    } else {
        document.querySelector('.error-lname').style.display = 'none';
        document.querySelector('.error-icon2').style.display = 'none';
        lastName.style.borderColor = "";
    }

	if (email.value.match(mailFormat)) {
	} else {
		document.querySelector('.error-email').style.display = 'block';
		document.querySelector('.error-email').innerHTML =
			'Looks like this is not an email';
		document.querySelector('.error-icon3').style.display = 'block';
        email.style.borderColor = "red";
	}


    if (password.value.length < 1) {
        document.querySelector('.error-password').style.display = 'block';
		document.querySelector('.error-password').innerHTML =
			'Password cannot be empty';
		document.querySelector('.error-icon4').style.display = 'block';
        password.style.borderColor = "red";
    } 

    if (password.value.length > 1 && document.querySelector('.password').value.length < 8) {
        document.querySelector('.error-password').style.display = 'block';
		document.querySelector('.error-password').innerHTML =
			'Password is too short. Minimum 8 characters';
		document.querySelector('.error-icon4').style.display = 'block';
        password.style.borderColor = "red";
    } 
}

submitBtn.addEventListener('click', validateForm);