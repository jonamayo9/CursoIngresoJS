function mostrar()
{
	var precio;
	var descuento;
	var calculo;
	var resultado;

	precio = prompt("Por favor ingrese un precio ");
	descuento = prompt("Por favor ingrese un porcentaje de descuento ");

	calculo = parseInt(precio * descuento / 100);
	resultado = precio - calculo;

	elPrecioFinal.value = resultado;


}
