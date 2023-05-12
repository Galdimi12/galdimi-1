document.getElementById("proccess").addEventListener("click", okButtonClicked);

function okButtonClicked() {
	var input = document.getElementById("input").value;

	if(input == 1) {

		console.log("E pershendeti galdimin");

	} else if (input == 2){

		console.log("Shkurt");
	} else if (input == 3){

		console.log("Mars");
	} else if (input == 4){

		console.log("Prill");
	}
}