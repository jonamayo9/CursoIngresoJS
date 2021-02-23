/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	//Declarar
	var numero;
	var aumento;
	var porcentajeAumento = 10;
	var resultado;

	numero = parseInt(txtIdSueldo.value);

	aumento = numero * porcentajeAumento / 100;

	resultado = numero + aumento;

	txtIdResultado.value = resultado;


}
