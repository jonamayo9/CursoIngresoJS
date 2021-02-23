/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/
function mostrar()
{
	var numeroUno;
	var numeroDos;
	var resta;
	var suma;

	numeroUno = parseInt(prompt("Ingrese un Numero"));
	numeroDos = parseInt(prompt("Ingrese un Segundo Numero"));

	if (numeroUno == numeroDos)
	{
		alert("Tus Numero son iguales: "+numeroUno+ ", "+numeroDos);
	}
	else if(numeroUno > numeroDos)
	{
		resta = numeroUno - numeroDos;
		alert("Tu primer numero es Mayor, la resta es: " +resta);
	}
	else if(numeroUno < numeroDos)
	{
			suma = numeroUno + numeroDos; 
			if(suma > 10)
			{
				alert("La suma es: " +suma+ " y supero el 10");
			}
			else
			{
				alert("Tu segundo numero es Mayor, la suma es: " +suma);
			}
	}
}
