function mostrar()
{
	var numero;
	var numeroPrimo;

	numeroPrimo = true;

	numero=parseInt(prompt("ingrese un numero"));

	for (i=2 ; i < numero ; 1++) {
		if (numero % i == 0) {
			numeroPrimo == false;
		}
	}
	if (numeroPrimo == true) {
		console.log(numero);
	}


}//FIN DE LA FUNCIÓN