/*
Mayo Jonathan Ezequiel Div G
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function mostrar()
{
	var edad;
	var civil;

	//tomo la edad  

	var edad = parseInt(txtIdEdad.value);
	var civil = estadoCivil.value;

//alert(civil);

	if (isNaN(edad))
	{

		alert("El dato ingresado no es un numero, Por favor ingrese un numero");
		
	}else if(edad >18 && civil == "Soltero"){

		alert("Es soltero y no es menor");

	}
	

}//FIN DE LA FUNCIÓN