
function mostrar()
{
var altura;
var base;
var calculo_altura;
var calculo_base;

altura = prompt("Ingrese la altura del Rectangulo");
base = prompt("Ingrese la base del Rectangulo");


calculo_altura = altura * altura;
calculo_base = base * base;

calculo_final = calculo_altura + calculo_base;

alert("el perimetro de la base es " + calculo_final);

}

