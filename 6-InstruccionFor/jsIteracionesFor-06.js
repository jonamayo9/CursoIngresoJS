function mostrar()
{
  var numero;
  var modulo;

  numero = parseInt(prompt("Ingrese un numero"));

  for (let i = numero; i > 0; i--) 
  {
	 modulo = i % 2; 
	 if (modulo == 0) {
		 alert(i);
	 }
	  
  }

//alert(acumulador);

}//FIN DE LA FUNCIÓN