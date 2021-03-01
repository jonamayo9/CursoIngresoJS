function mostrar()
{
	/*
	var i=0
	while (1>10) {
		alert(i);
		i++
	}
	*/

	for(var i=0; i<10; i++)
	{
		alert(i);
		if (i ==4) {
			break; // termina de hacer la interaccion. rompe una estructura interactiva
		}
		if (i==8) {
			continue; //salta a la linea 11. Lo que hace es terminar esa interaccion en 
			//donde llega a continue y vuelve arriba. osea en este caso llegaria hasta el 7 
			//y seguira al 9
			
		}
	//	continue; 
	}
	
}