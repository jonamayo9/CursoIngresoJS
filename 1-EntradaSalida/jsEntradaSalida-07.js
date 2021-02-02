/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	// Declaracion
	var numero_uno
	var numero_dos
	var suma

	//Asignacion
	numero_uno=parseInt(txtIdNumeroUno.value);
	numero_dos=parseInt(txtIdNumeroDos.value);

	suma = numero_uno + numero_dos;

	alert("La suma de los dos numero es: " + suma);	
}

function restar()
{
	
	// Declaracion
	var numero_uno
	var numero_dos
	var resta

	//Asignacion
	numero_uno=parseInt(txtIdNumeroUno.value);
	numero_dos=parseInt(txtIdNumeroDos.value);

	resta = numero_uno - numero_dos;
	
	alert("La Resta de los dos numero es: " + resta);	

}

function multiplicar()
{ 
	
	// Declaracion
	var numero_uno
	var numero_dos
	var multiplicar

	//Asignacion
	numero_uno=parseInt(txtIdNumeroUno.value);
	numero_dos=parseInt(txtIdNumeroDos.value);

	multiplicar = numero_uno * numero_dos;
	
	alert("La Multiplicacion de los dos numero es: " + multiplicar);

}

function dividir()
{
	
	// Declaracion
	var numero_uno
	var numero_dos
	var dividir

	//Asignacion
	numero_uno=parseInt(txtIdNumeroUno.value);
	numero_dos=parseInt(txtIdNumeroDos.value);

	dividir = numero_uno / numero_dos;
	
	alert("La Division de los dos numero es: " + dividir);

}

