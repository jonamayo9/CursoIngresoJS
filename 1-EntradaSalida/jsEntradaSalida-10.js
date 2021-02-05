/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{

var numero
var Descuento
var porcentajeDescuento = 25;
var resultado

numero = parseInt(txtIdImporte.value);

Descuento = numero * porcentajeDescuento / 100;

resultado = numero - Descuento;

txtIdResultado.value = resultado;

}
