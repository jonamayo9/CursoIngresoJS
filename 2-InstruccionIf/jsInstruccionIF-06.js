// Mayo Jonathan Ezequiel   Div   G
//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
// o adolescente (entre 13 y 17 años) o niño (menor a 13 años).
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

if(edad > 17){

		alert("Eres mayor de edad");

	} 
	else if(edad < 13){

		alert("Eres un niño");

	}else {

		alert("Eres un adolescente");
	}
	
}//FIN DE LA FUNCIÓN