function mostrar()
{


	var arrayNumeros = [];
	var numeros;
	var acumuladorNumero=0;

	for (var i = 0; i <5; i++)
	{
		numeros=parseInt(prompt("Ingrese un numero"));
		arrayNumeros.push(numeros);
		acumuladorNumero = acumuladorNumero + numeros;
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+arrayNumeros[i]+"<br>");


	}

	document.write("<h1> La suma de todos los numeros es: "+acumuladorNumero+"</h1>")




}//FIN DE LA FUNCIÓN