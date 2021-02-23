/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	var numero;
	//Genero el número RANDOM entre 1 y 10 
	numero = Math.floor(Math.random() * 10) + 1;

	if (numero >= 9)
		{
			alert("Excelente tu nota es: " + numero);
		}else
		{ 

			if(numero <= 8 && numero >= 4)
			{
				alert("Aprobó tu nota es: " + numero);

			}
			else {
					alert("Vamos, la proxima se puede. Tu nota es: " + numero);
				  }
		}
	

}//FIN DE LA FUNCIÓN