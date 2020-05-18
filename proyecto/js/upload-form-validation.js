const uploadForm = document.querySelector('#upload form');
// const contactButton = document.querySelector('#contact .btn');
function registerValidate(event) {
	var acumErrores = 0;
	
	uploadForm.classList.remove('is-invalid');

    let inputName = uploadForm.querySelector('#inputName');
    let inputDesignInfo = uploadForm.querySelector('#inputDesignInfo');
    let validatedCustomFile = uploadForm.querySelector('#validatedCustomFile');
	let projectUrl = uploadForm.querySelector('#projectUrl');
	event.preventDefault();   

    if(inputName.value == "") {
		inputName.classList.add("is-invalid");
		uploadForm.querySelector("#errorName").textContent = "El campo es obligatorio";
		acumErrores ++;
    }

	if(inputDesignInfo.value == "") {
		inputDesignInfo.classList.add("is-invalid");
		uploadForm.querySelector("#errorInfo").textContent = "El campo es obligatorio";
        acumErrores ++;
	}
	
	var file;
	let formData;
	var t;

	if(validatedCustomFile.value != "") {
		file = validatedCustomFile.files[0];
		formData = new FormData();
		formData.append("Filedata", file);
		t = file.type.split('/').pop().toLowerCase();
	}
	
    if(validatedCustomFile.value == "") {
		validatedCustomFile.classList.add("is-invalid");
		uploadForm.querySelector("#errorFile").textContent = "El campo es obligatorio";
		acumErrores ++;
	} else if (t != "jpeg" && t != "jpg" && t != "png" && t != "bmp" && t != "gif") {
		validatedCustomFile.classList.add("is-invalid");
		uploadForm.querySelector("#errorFile").textContent = "Porfavor selecciona un formato de imágen válido.";
		file.value = '';
	}
	else if (file.size > 1024000) {
		validatedCustomFile.classList.add("is-invalid");
		uploadForm.querySelector("#errorFile").textContent = "El tamaño excede el máximo permitido de 1MB";
		file.value = '';
	}

	if(projectUrl.value == "") {
		projectUrl.classList.add("is-invalid");
		uploadForm.querySelector("#errorUrl").textContent = "El campo es obligatorio";
		acumErrores ++;
    }else if(!validarUrl(projectUrl.value)){
		projectUrl.classList.add("is-invalid");
		uploadForm.querySelector("#errorUrl").textContent = "El email no cumple el formato";
		acumErrores ++;
	}
    

    if (acumErrores > 0){
        event.preventDefault();   
    }
}

uploadForm.addEventListener("submit", registerValidate, false);


uploadForm.addEventListener('blur', (event) => {
	if(event.target.value!='') event.target.classList.remove('is-invalid');
    //registerValidate();
}, true);

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validarUrl(url) {
	// var url = document.getElementById("url").value;
	var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
	if (pattern.test(url)) {
		return true;
	}

}