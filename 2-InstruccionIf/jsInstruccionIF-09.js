/*
Mayo Jonathan Ezequiel  Div  G
Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive*/
function mostrar()
{
	var peso;
	var altura;
	var calculoImc;

	peso = parseFloat(prompt("Por favor, ingrese su Peso"));
	altura = parseFloat(prompt("Por favor, ingrese su Altura"));

	calculoImc = parseInt(peso / (altura * altura));
	
	alert(calculoImc);
	if(calculoImc < 16)
	{

		alert("Tu IMC es: "+calculoImc+ " Estas Bajo peso");

	}else{

		if(calculoImc >= 16 && calculoImc < 24.99)
		{
			alert("Tu IMC es: "+calculoImc+ " Tu peso es Normal");
		}else{
			if (calculoImc >= 25 && calculoImc < 29.99) 
			{
				alert("Tu IMC es: "+calculoImc+ " Estas Preobeso");
			}else{
				if (calculoImc >=30 && calculoImc < 34.99) 
				{
					alert("Tu IMC es: "+calculoImc+ " Sos obeso tipo I");
				}else{
					if (calculoImc >=35 && calculoImc <= 40) 
					{
						alert("Tu IMC es: "+calculoImc+ " Sos obeso tipo II");
					}else{
						alert("Tu IMC es: "+calculoImc+ " Sos obeso tipo III");
					}
				}
			}
		}
	}

}//FIN DE LA FUNCIÓN