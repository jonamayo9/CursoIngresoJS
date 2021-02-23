/*
Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	
	switch (mesDelAño) {
		case "Febrero":
			alert("Tiene 28 Dias");
			break;

		case "Abril":
			alert("Tiene 30 Dias");
			break;

		case "Junio":
			alert("Tiene 30 Dias");
			break;


		case "Septiembre":
			alert("Tiene 30 Dias");
			break;

		case "Noviembre":
			alert("Tiene 30 Dias");
			break;

		default:
			alert("Tiene 31 Dias");
		break;


	}



}//FIN DE LA FUNCIÓN