/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//Declaraciones
	var nombreIngresado;
	var edadIngresada;

	//Asignacion

	nombreIngresado = txtIdNombre.value;
	edadIngresada = txtIdEdad.value;

	//Mostrar
	alert("su nombre es: " + nombreIngresado + " y tiene "+ edadIngresada +" años ");
}

