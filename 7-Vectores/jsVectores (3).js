function mostrar()
{

	var arrayNumeros = [];
	var numeros;

	for (var i = 0; i <5; i++)
	{
		numeros=parseInt(prompt("Ingrese un numero"));
		arrayNumeros.push(numeros);
	}



	for(var i=0; i<5; i++)
	{

		document.write("Posicion "+i+"-->"+arrayNumeros[i]+"<br>");
	}





}//FIN DE LA FUNCIÓN