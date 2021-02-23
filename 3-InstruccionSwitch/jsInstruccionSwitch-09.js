function mostrar()
{
	
	/*
3-con Switch
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata 
tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata 
tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata 
tiene un aumento del 10% y Cordoba tiene el precio sin descuento
*/


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


	estacionAño = txtIdEstacion.value;
	localidad = txtIdDestino.value;

	tarifaViaje = 15000;

switch (estacionAño) {
	case "Verano":
		switch (localidad) {
			case "Bariloche":
				descuento = 20; 	
				break;
			case "Mar del plata":	
				aumento = 20;
				break;
			case "Cataratas":
			case "Cordoba":
				aumento = 10;
				break;	
		}
		break;
}

switch (estacionAño) {
	case "Invierno":
		switch (localidad) {
			case "Bariloche":
				aumento = 20;
				break;
			case "Mar del plata":
				descuento = 20;
				break;
			case "Cataratas":
			case "Cordoba":
				descuento = 10;			
				break;
		}
		
		break;
}

switch (estacionAño) {
	case "Otoño":
		switch (localidad) {
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":	
				aumento = 10;		
				break;
		}
		switch (localidad) {
			case "Cordoba":
				aumento = 0;
				descuento = 0;
				break;
		
		
		}
}
switch (estacionAño) {
	case "Primavera":
		switch (localidad) {
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":	
				aumento = 10;		
				break;
		}
		switch (localidad) {
			case "Cordoba":
				aumento = 0;
				descuento = 0;
				break;
		}
}
/*

	if (estacionAño == "Otoño" || estacionAño == "Primavera") 
	{
		switch (localidad) {
			case "Bariloche":
			case "Cataratas":
			case "Mar del plata":	
				aumento = 10;		
				break;
		}
		switch (localidad) {
			case "Cordoba":
				alert("Su precio Final es: " + tarifaViaje);
				break;
		
		
		}
	}
}
*/
if (aumento) {	
	calculoAum = (tarifaViaje * aumento) / 100;
}
if (descuento) {
	calculoDesc = (tarifaViaje * descuento) / 100;	
}

resultado = parseInt(tarifaViaje + calculoAum - calculoDesc);
alert("Su precio final es: " + resultado );



}//FIN DE LA FUNCIÓN