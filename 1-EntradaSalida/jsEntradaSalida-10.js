//Mayo Jonathan Ezequiel  División ´G´

// Correccion 1

//se debe pedir el nombre del producto , tambien se debe pedir el porcentaje de descuento al usuario,
//mostar el mensaje "usted compro un XXXXXX con XX % de descuento, el precio final es XXXX"

function mostrarAumento()
{

	var produccto;
	var importe;
	var Descuento
	var porcentajeDescuento;
	var resultado

	producto = prompt("Ingrese un Producto ");

	importe = prompt("Ingrese un importe")

	porcentajeDescuento=prompt("Ingrese un Descuento")

	Descuento = importe * porcentajeDescuento / 100;

	resultado = importe - Descuento;

	alert("Usted compro " + producto + " con " +porcentajeDescuento+ " % de descuento, el precio final es de $" +resultado);


}