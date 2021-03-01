function mostrar()
{

	var numeroPorUsuario;
	var restoDivision;
  
	numeroPorUsuario = parseInt(prompt("Ingrese un numero"));
  
	for (let i = numeroPorUsuario; i > 0; i--) 
	{
	   restoDivision = numeroPorUsuario % i; 
	   if (restoDivision == 0) {
		   console.log(restoDivision+"  "+i);
	   }
		
	}
  /*Maximo
  Ejercicio con array 
Minimo
Promedio

Pedir N números guardarlos en un array y luego calcular MAX MIN y PROM
*/


}
//que es un array? es una variable que puede tener un monton de varoles y no uno unico
// var arrayEdades = [20,30,50,60];
// alert(arrayEdades[0]);
// for(var i=0 ; i<5 ; i++)
//{
//	alert(arrayEdades[i]);
//}
//FIN DE LA FUNCIÓN
