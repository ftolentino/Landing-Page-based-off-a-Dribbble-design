function saveValue(element) {
	console.log(element);
	objForm[element.id] = element.value;
	validateForm();
}

let objForm = {
	travelers: '',
	travelFrom: '',
	travelTo: '',
	startDate: '',
	endDate: ''
};

function submitForm() {
	console.log(objForm);
}

function inputIsEmpty(key) {
	// if (objForm[key] === "") {
	//    return true;
	// } else {
	//    return false;
	// }
	return objForm[key] === '';
}

function validateForm() {
	const formKeysArray = Object.keys(objForm);
	//[travelers, travelTo, travelFrom, startDate, endDate]
	console.log(formKeysArray.length);
	let errors = 0;
	formKeysArray.forEach((formKey) => {
		if (inputIsEmpty(formKey)) {
			errors += 1;
		}
	});
	console.log(errors);
	if (errors > 0) {
		$('#formSubmit').attr('disabled', 'disabled');
	} else {
		$('#formSubmit').removeAttr('disabled');
	}

	// const submitButton = getElementById("formSubmit")
}
