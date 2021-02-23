function mostrar()
{

		var numero;
		var contador;
		var acumulador;
	
		acumulador = 0;
		contador = 0;
		
		while (contador < 5) {
			
			numero=parseInt(prompt("Ingrese un numero"));
	
			contador = contador +1;
	
			acumulador = acumulador + numero;
		
		}
		
	
	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN