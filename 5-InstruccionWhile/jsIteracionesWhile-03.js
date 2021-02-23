/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	var clave;
	var contador;

	contador = 0;
	clave = "utn750";
	
	while (claveIngresada != clave) {
	
		claveIngresada = prompt("ingrese el número clave.");
		
		if (contador >= 2) {
			alert("su usuario fue bloqueado ");
		}
		contador = contador +1;
	}if (claveIngresada == clave) {
			alert("la clave fue ingresada correctamente");
		}
	   

	
}//FIN DE LA FUNCIÓN
