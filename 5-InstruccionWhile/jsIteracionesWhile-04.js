/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	
	numeroIngresado = prompt("Ingrese un numero");

	numeroIngresado = parseInt(numeroIngresado);

	while( numeroIngresado <=0 || numeroIngresado >= 9) 
	{
		numeroIngresado = prompt("ingrese un número entre 0 y 9.");
		
		numeroIngresado = parseInt(numeroIngresado);
		
	}

	alert("su numero se registro correctamente");

}//FIN DE LA FUNCIÓN