const contactForm = document.querySelector('#contact form');
// const contactButton = document.querySelector('#contact .btn');
function registerValidate(event) {

	var acumErrores = 0;
	
	contactForm.classList.remove('is-invalid');

    let inputEmail = contactForm.querySelector('#inputEmail');
    let inputName = contactForm.querySelector('#inputName');
    let textMessage = contactForm.querySelector('#textMessage');

    if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		contactForm.querySelector("#errorName").textContent = "El campo es obligatorio";
		acumErrores ++;
    }

	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		contactForm.querySelector("#errorEmail").textContent = "El campo es obligatorio";
        acumErrores ++;
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		contactForm.querySelector("#errorEmail").textContent = "El email no cumple el formato";
		acumErrores ++;
	}
	console.log(textMessage.value);
    if(textMessage.value == "") {
		textMessage.classList.add("is-invalid");
		contactForm.querySelector("#errorMessage").textContent = "El campo es obligatorio";
		acumErrores ++;
    }
    
    console.log(acumErrores);

    if (acumErrores > 0){
        event.preventDefault();   
	}

}

contactForm.addEventListener("submit", registerValidate, false);


contactForm.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}