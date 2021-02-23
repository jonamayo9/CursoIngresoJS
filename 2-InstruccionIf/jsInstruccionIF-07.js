/*
Mayo Jonathan Ezequiel Div G
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero*/
function mostrar()
{
	var edad;
	var civil;
	//tomo la edad  
	var edad = txtIdEdad.value;
	var civil = estadoCivil.value;
//alert(civil);
	if(edad <= 17 && civil != "Soltero"){

		alert("Es muy pequeño para NO ser soltero");
		
	}
		

}//FIN DE LA FUNCIÓN