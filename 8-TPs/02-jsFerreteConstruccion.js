/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

	// Declaro

	var largo;
	var ancho;
	var perimetro;
	var tresHilos;

	// Asigno Y Realizo Caluculo

	largo = parseFloat(txtIdLargo.value);
	ancho = parseFloat(txtIdAncho.value);

	petimetro = largo + ancho;

	tresHilos = perimetro * 3;

	// Muestro

	alert("La cantidad de alambre que necesitas para dar tres hilos a " + perimetro + "metros es: " + tresHilos + " metros");

}
function Circulo () 
{	
	// Declaro

	var radio;
	var calculoRadio;
	var calculoTresHilosAlambre

	// Asigno Y Realizo Caluculo

	radio = parseFloat(txtIdRadio.value);

	calculoRadio = (radio * 2) * 3.14;

	calculoTresHilosAlambre = calculoRadio * 3;

	//Muestro

	alert("La cantidad de alambre que necesita para dar tres hilos tu terreno circular es: " + calculoTresHilosAlambre);
}
function Materiales () 
{ 	

	//Declaro

	var largo;
	var ancho;
	var area;
	var MaterialesMetroCuadradoCal = 3;
	var MaterialesMetroCuadradoCemento = 2;
	var calculoTotalCemento;
	var calculoTotalCal;
	var resultado;

	// Asigno Y Realizo Caluculo

	largo = parseFloat(txtIdLargo.value);
	ancho = parseFloat(txtIdAncho.value);

	area = largo * ancho;

	calculoTotalCemento = area * MaterialesMetroCuadradoCemento;
	calculoTotalCal = area * MaterialesMetroCuadradoCal;


	// Muestro


	alert("La cantidad de bolsa de Cemento que se necesita para " + area + " M2 es: " +calculoTotalCemento + " y  la cantidad de Cal " + calculoTotalCal); 
	
}