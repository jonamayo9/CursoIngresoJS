/*1. Para el departamento de facturación:
A. Ingresar tres precios de productos y mostrar la suma de los mismos.
B. Ingresar tres precios de productos y mostrar el promedio de los mismos.
C. ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar ()
{
// Declaro

var precioUno;
var precioDos;
var precioTres;
var suma;

// Asigno y Realizo Calculo

precioUno = parseInt(txtIdPrecioUno.value);
precioDos = parseInt(txtIdPrecioDos.value);
precioTres = parseInt(txtIdPrecioTres.value);

suma = precioUno + precioDos + precioTres;

// Muestro

alert("La suma de los tres precios es: " +suma);
}
function Promedio ()
{
// Declaro

var precioUno;
var precioDos;
var precioTres;
var resultado;

// Asigno y Realizo Calculo

precioUno = parseInt(txtIdPrecioUno.value);
precioDos = parseInt(txtIdPrecioDos.value);
precioTres = parseInt(txtIdPrecioTres.value);


resultado = parseInt(precioUno + precioDos + precioTres / 3);

// Muestro

alert("El promedio de los tres precios es: " + resultado);

}
function PrecioFinal ()
{
// Declaro

var precioUno;
var precioDos;
var precioTres;
var suma;
var iva;
var resultado;

// Asigno y Realizo Calculo

precioUno = parseInt(txtIdPrecioUno.value);
precioDos = parseInt(txtIdPrecioDos.value);
precioTres = parseInt(txtIdPrecioTres.value);


suma = parseInt(precioUno + precioDos + precioTres);
iva = suma * 21 / 100;

resultado = parseInt(suma + iva);

// Muestro

alert("El precio final de los tres precios mas el 21% IVA es: " + resultado);

}