function test() {
	alert("Działa z pliku JS!");
}

function showDiv(id) {
	const forms = document.querySelectorAll('.section');

	forms.forEach(form => {
		form.classList.add('hidden'); // show everything
	});

	document.getElementById(id).classList.remove('hidden'); // show one
}