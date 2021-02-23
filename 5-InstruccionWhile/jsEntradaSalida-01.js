/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	var numero;
	var contador;
	var acumulador = 0;

	contador = 0;
	
	while (contador < 5) {
		
		numero=parseInt(prompt("Ingrese un numero"));

		contador = contador +1;

		acumulador = acumulador + numero;
	
		console.log(contador);


	}
	
	alert(acumulador);
}

