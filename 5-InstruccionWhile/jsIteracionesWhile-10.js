/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	var respuesta;
	var numeroIngresado;
	var sumaNegativos=0;
	var sumaPositivo=0;
	var contadorPositivo=0;
	var contadorNegativo=0;
	var contadorCero=0;
	var contadorResto=0;
	var promedioPositivo=0;
	var promedioNegativo=0;
//	var flag = "Es la primera Vez";
do 
{ 
	numeroIngresado = parseInt(prompt("Ingrese un Numero"));
	if (isNaN(numeroIngresado)) {
		numeroIngresado = parseInt(prompt("Ingrese un Numero"));
	}

	if (numeroIngresado < 0) 
	{
		sumaNegativos = sumaNegativos + numeroIngresado;
		alert("suma de negativo" + sumaNegativos);
		contadorNegativo = contadorNegativo + 1;
	}
	else 
	{ 
		if (numeroIngresado > 0)
		{ 
			sumaPositivo = sumaPositivo + numeroIngresado;
			alert("suma de positivo" + sumaPositivo);
			contadorPositivo = contadorPositivo + 1;
		} 
		else
		{
			if (numeroIngresado == 0) 
			{
				contadorCero = contadorCero + 1;
			}
		}														 
	}
	if (numeroIngresado %2 == 0) 
	{
		contadorResto = contadorResto +1;
	}
	if (contadorPositivo > 0) 
	{
		promedioPositivo = sumaPositivo / contadorPositivo;
	}
	if (contadorNegativo > 0) 
	{
		promedioNegativo = sumaNegativos / contadorNegativo;
	}
	respuesta = confirm("Desea ingresar mas numeros?");


	

}while (respuesta);
	
/*
document.write("sumaNegativos" + sumaNegativos+ "<br>");
document.write("sumaPositivo" + sumaPositivo + "<br>");
document.write("contadorNegativo" + contadorNegativo + "<br>");
document.write("contadorPositivo" + contadorPositivo + "<br>");
document.write("contadorCero" + contadorCero + "<br>" );
document.write("contadorResto" + contadorResto + "<br>");
document.write("promedioPositivo" + promedioPositivo + "<br>");
document.write("promedioNegativo" + promedioNegativo + "<br>" );
*/


console.log("sumaNegativos",sumaNegativos);
console.log("sumaPositivo",sumaPositivo);
console.log("contadorPositivo",contadorPositivo);
console.log("contadorNegativo",contadorNegativo);
console.log("contadorCero",contadorCero);
console.log("contadorResto",contadorResto);
console.log("promedioPositivo",promedioPositivo);
console.log("promedioNegativo",promedioNegativo);



}//FIN DE LA FUNCIÓN