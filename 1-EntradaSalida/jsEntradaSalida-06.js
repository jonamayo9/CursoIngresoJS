/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaracion
	var numero_uno
	var numero_dos

	//Asignacion
	numero_uno=parseInt(txtIdNumeroUno.value);
	numero_dos=parseInt(txtIdNumeroDos.value);


	var suma = numero_uno + numero_dos;

	//Mostrar
	alert("la suma de los numero es " + suma);
}

