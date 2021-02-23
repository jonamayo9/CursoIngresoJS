/*
3 - Ingresar dos numeros por id
Se pide:
mostrar por console.log:
a) La suma de los dos numeros
b) El promedio de los numeros.
c) El modulo de los numeros (el primero en modulo del segundo)

UTILIZAR EL EJERCICIO 8 para resolverlo
*/
function SacarResto()
{
	// Declaracion
	var numero_uno;
	var numero_dos;
	var resto;
	var suma;
	var promedio;
	//Asignacion
	numero_uno=parseInt(txtIdNumeroDividendo.value);
	numero_dos=parseInt(txtIdNumeroDivisor.value);

	suma = numero_uno + numero_dos;

	console.log("La Suma de los numero es: " + suma);

	promedio = numero_uno + numero_dos / 2;

	console.log("El promedio del numero es: " + promedio);

	resto = numero_uno % numero_dos;

	console.log("El modulo de los numeros es: " + resto);

}
