/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	// Asigno
	var temperaturaFahrenheit;
	var conversionFahrenheit_Celsius;
	var parsearConversion;

	//Declaro y Realizo Calculo

	temperaturaFahrenheit = txtIdTemperatura.value;

	conversionFahrenheit_Celsius = (temperaturaFahrenheit - 32) / 1.8;

	parsearConversion = parseInt(conversionFahrenheit_Celsius);

	// Muestro

	alert("La temperatura en " + temperaturaFahrenheit +" °F (Fahrenheit)" + " son " + parsearConversion + " °C (Centígrados)"  );
	
}

function CentigradosFahrenheit () 
{
	// Asigno

	var temperaturaCentigrado;
	var conversionCelsius_Fahrenheit;
	var parsearConversion;

	//Declaro y Realizo Calculo

	temperaturaCentigrado = txtIdTemperatura.value;

	conversionCelsius_Fahrenheit = ((temperaturaCentigrado * 9)/5) + 32;

	parsearConversion = parseFloat(conversionCelsius_Fahrenheit);

	// Muestro

	alert("La temperatura en " + temperaturaCentigrado +" °C (Celsius)" + " son " + parsearConversion + " °F (Fahrenheit)"  );
	
}
