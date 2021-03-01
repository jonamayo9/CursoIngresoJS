/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;
	var numero;
	var flag;

	flag = 0;
	numero;
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta;

	do{

		numero = parseInt(prompt("Ingrese un Numero"));	

		if (numero >= 0) {
			
			sumaPositivos = sumaPositivos + numero;
	
		}
		else{
			flag = 1;
			multiplicacionNegativos = multiplicacionNegativos * numero;
		}

//		acumulador = acumulador + numero;
//		contador = contador + 1;
		respuesta = confirm("Desea ingresar otro numero?");


 
	}while (respuesta); 

	if (flag == 0) {
		multiplicacionNegativos = 0;
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN