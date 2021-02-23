/* 

Mayo Jonathan Ezequiel

1. Ingresar descripción (por prompt) y precio de un producto (por id).
El programa deberá mostrar por alert la descripción del producto 
junto al precio aumentado en un 30%. Pueden utilizar el html del ejercicio 4 para resolverlo.
*/


function mostrar()
{
var descripcion;
var precioIngresado;
var aumento; 
var suma;

descripcion = prompt("Ingrese un dato");
precioIngresado = parseFloat(prompt("Ingrese el Precio"));

aumento = parseFloat(precioIngresado * 30 / 100);

suma = parseFloat(precioIngresado + aumento);

alert("El Producto " +descripcion+ "con el 30% de aumento es: " + suma );

}

