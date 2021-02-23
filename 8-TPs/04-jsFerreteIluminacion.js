/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

HECHO CON IF (SE PROCEDE A COMENTAR TODO YA QUE TRATAMOS DE HACERLO CON SWITCH)
 	if(lamparita >= 6)
 	{
 		porcentajeDesc = 50;

 	}else{ 
 		 	if(lamparita == 5 && marcas == "ArgentinaLuz")
 			{

 				porcentajeDesc = 40;

 			}else
 			{
 				if(lamparita == 5 && marcas != "ArgentinaLuz")
 				{

 					porcentajeDesc = 30;

 				}
 			}

 			if(lamparita == 4 && (marcas == "ArgentinaLuz" || marcas == "FelipeLamparas"))
 			{

 				porcentajeDesc = 25;

 			}	
 			else 
 			{
 				if(lamparita == 4 && (marcas != "ArgentinaLuz" || marcas != "FelipeLamparas"))
 					{

 						porcentajeDesc = 20;

 					}
 			}
 			
 			if(lamparita == 3 && marcas == "ArgentinaLuz")
 			{

 				porcentajeDesc = 15;

 			}else
 			{ 
 			
 				if(lamparita == 3 && marcas == "FelipeLamparas")
 				{

 					porcentajeDesc = 10;

 				}

 				else
 				{
 					if(lamparita == 3 && (marcas != "ArgentinaLuz" || marcas != "FelipeLamparas"))
 					{ 

 						porcentajeDesc = 5;

 					}
 				}
 			}
 		}
		 
 		if (lamparita < 3) 
 		{
 			precioDesc = 0;
 		}
		
 		else
 		{
 			 precioDesc = (calcLampara * porcentajeDesc) / 100;
 		}*/

 
function CalcularPrecio () 
{
	var lamparita;
	var calcLampara;
	var marcas;
	var precioDesc;
	var resultado;
	var porcentajeDesc;
	var precioAum;

	lamparita = parseInt(txtIdCantidad.value);
	precioDesc = parseFloat(precioDesc);

	calcLampara = parseFloat(lamparita * 35);



	marcas = Marca.value;

switch (lamparita) 
{
	case 6:
	porcentajeDesc = 50;
	break;
}

switch (lamparita) 
{
	case 5:
		switch (marcas) 
		{
			case "ArgentinaLuz":
				porcentajeDesc = 40;
			break;

			default:
				porcentajeDesc = 30;
			break;
		}
	break;	
}
switch (lamparita) 
{
	case 4:
		switch (marcas) 
		{
			case "ArgentinaLuz":
			case "FelipeLamparas":
				porcentajeDesc = 25;
			break;

			default:
				porcentajeDesc = 20;
			break;
		}
	break;
}

switch (lamparita) 
{
	case 3:
		switch (marcas) 
		{
			case "ArgentinaLuz":
				porcentajeDesc = 15;
			break;
		}
		switch (marcas) 
		{
			case "FelipeLamparas":
				porcentajeDesc = 10;
			break;
		}
		switch (marcas) 
		{
			case "HazIluminacion":
			case "Osram":
			case "JeLuz":	
				porcentajeDesc = 5;
			break;
		}
	break;
}
switch (lamparita) 
{
	case 2:
	case 1:
		porcentajeDesc = 0;	
	break;
}



		 precioDesc = (calcLampara * porcentajeDesc) / 100;
		 resultado = calcLampara - precioDesc;


 		if (resultado > 120)
 		{
 			precioAum = (calcLampara * 10) / 100;
 			resultado = calcLampara + resultado;
 			alert("IIBB Usted pago " +resultado+ ", siendo " +precioAum+ " el impuesto que se pagó");
 		}

 		txtIdprecioDescuento.value = resultado;
		 
 			
}
