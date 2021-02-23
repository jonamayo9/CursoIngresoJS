/*
3-con if
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata 
tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/
function mostrar()
{

var estacionAño;
var localidad;
var tarifaViaje;
var aumento;
var descuento;
var calculoAum;
var	calculoDesc;
var resultado;

 aumento = 0;
 descuento = 0;
 calculoAum = 0;
 calculoDesc = 0;


	estacionAño = prompt("Ingrese la estacion de al año");
	localidad = prompt("Ingrese la localidad");

	tarifaViaje = 15000;

if (estacionAño == "Verano") 
	{
	if (localidad == "Bariloche") 
	{
		descuento = 20; 
	} else 
	{
		if (localidad == "Mar del Plata") 
		{
			aumento = 20;
		} else {
			if (localidad == "Cataratas" || localidad == "Cordoba") 
			{
				aumento = 10;
			}
		}
	}
}
if (estacionAño == "Invierno") 
	{
		if (localidad == "Bariloche") 
		{
			aumento = 20;
		} else 
		{
			if (localidad == "Mar del Plata") 
			{
				descuento= 20;
			} else 
			{
				if (localidad == "Cataratas" || localidad == "Cordoba") 
				{
					descuento = 10;
				}
			}
		} 
}
if (estacionAño == "Otoño" || estacionAño == "Primavera") 
	{
		console.log("hola", localidad);
		if (localidad == "Bariloche" || localidad == "Cataratas" || localidad == "Mar del Plata")
		{
			aumento = 10;
		}else
		{
			if (localidad == "Cordoba") 
			{
				alert("Su Precio final es: " + tarifaViaje);
			}
		}
	}

if (aumento) {	
	calculoAum = (tarifaViaje * aumento) / 100;
}
if (descuento) {
	calculoDesc = (tarifaViaje * descuento) / 100;	
}

console.log(tarifaViaje);
console.log(calculoDesc);
console.log(calculoAum);
resultado = parseInt(tarifaViaje + calculoAum - calculoDesc);
alert("Su precio final es: " + resultado );

}