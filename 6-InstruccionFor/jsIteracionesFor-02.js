function mostrar()
{
/*	var i;
	for(var i=10; i>0; i--){
		
		alert(i);
	}
*/
var numerosIngresados;
var arrayNumeros = [];
var numeroMinimo;
var numeroMaximo;
var promedioNumeros;
var suma;
var continuar;


	do
	{

		numerosIngresados = parseInt(prompt("Ingrese un numero"));
		numerosIngresados = arrayNumeros.push(numerosIngresados); 
		continuar = confirm("Quiere seguir ingresando Numeros? ");

	}while (continuar);

	numeroMaximo = arrayNumeros[0];
	
	for(var i = 1 ; i<arrayNumeros.length ; i++)
	{
		if (arrayNumeros[i] > numeroMaximo) 
		{
			numeroMaximo = arrayNumeros[i];
		}
	}

	numeroMinimo = arrayNumeros[0];

	for (var i = 1; i < arrayNumeros.length ; i++) 
	{
		if (arrayNumeros[i] < numeroMinimo) 
		{
			numeroMinimo = arrayNumeros[i];
		}
	}
	
	suma=0;
	
	for(var i = 0 ; i < arrayNumeros.length ; i++)
	{
		suma += arrayNumeros[i];
	}

	promedioNumeros = suma / arrayNumeros.length; 
	alert("El promedio de los numeros es " + promedioNumeros);
	alert(" el numero minimo es: " + numeroMinimo);
	alert("el numero Maximo es: " + numeroMaximo);
	console.log(promedioNumeros);
}