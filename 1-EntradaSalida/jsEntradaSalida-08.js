/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	// Declaracion
	var numero_uno
	var numero_dos
	var resto

	//Asignacion
	numero_uno=parseInt(txtIdNumeroDividendo.value);
	numero_dos=parseInt(txtIdNumeroDivisor.value);

	resto = numero_uno % numero_dos;


	alert("El resto de la division es: " +resto);
}
