function validar(){

	var valor = document.getElementById("numero").value;

	if (valor.length > 2){

		alert("Formulário não será enviado, preencha corretamente o campo");
		return false;
	} else {
		return true;	
	}

}