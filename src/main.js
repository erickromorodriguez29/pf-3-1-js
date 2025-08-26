const suma  = function(a, b){
    return a + b;
}
const resta = function(a, b){
    return a - b;
}
const multiplicacion = function(a, b){
    return a * b;
}
const divicion = function(a, b){
    return a / b;
}
const addTwoNumbers = function(a, b){
    return a + b;
}
  const option = +prompt("elige una opcion: \n 1.suma \n 2.restar \n 3.multiplicar \n 4.dividir");
switch(option){
case 1:
        const num1 = +prompt("ingresa el primer numero");
        const num2 = +prompt("ingresa el segundo numero");
        console.log(suma(num1, num2));
        break;
case 2:
        const num3 = +prompt("ingresa el primer numero");
        const num4 = +prompt("ingresa el segundo numero");
        console.log(resta(num3, num4));
        break;
case 3:
        const num5 = +prompt("ingresa el primer numero");
        const num6 = +prompt("ingresa el segundo numero");
        console.log(multiplicacion(num5, num6));
        break;
case 4:
        const num7 = +prompt("ingresa el primer numero");
        const num8 = +prompt("ingresa el segundo numero");
        console.log(divicion(num7, num8));
        break;
        default:
        console.log("opcion no valida"); 
}