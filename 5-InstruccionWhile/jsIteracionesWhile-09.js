/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var numero;
	var continuar;
	var numeroMax;
	var numeroMin;
	var flag="Es la primera vez";//true
do
{
	numero = parseInt(prompt("Ingrese un numero"));

	if (flag == "Es la primera vez") 
	{
		numeroMax = numero;
		numeroMin = numero;	

		flag = "Ya pase";//False
	}
	else
	{
		if (numero > numeroMax) 
		{
			
			numeroMax = numero;
		
		}
		else if (numero < numeroMin) 
		{
		
			numeroMin = numero;
			
		}
	}
	
	console.log(flag);
	console.log(numeroMax);
	console.log(numeroMin);
	continuar = confirm("Desea seguir agregando numeros? ");
}while(continuar);

	txtIdMaximo.value=numeroMax;
	txtIdMinimo.value=numeroMin;
}//FIN DE LA FUNCIÓN