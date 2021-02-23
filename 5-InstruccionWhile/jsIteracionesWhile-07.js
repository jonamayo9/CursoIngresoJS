/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var numero;
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';

	
	while (respuesta == 'si') {

		numero = prompt("Ingrese un Numero");
		numero = parseInt(numero);		
		acumulador = acumulador + numero;
		contador = contador + 1;
		respuesta = prompt("Desea ingresar otro numero?");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN