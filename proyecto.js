//Variables utiles 
//Precio base de la cotización, en quetzales, lo puede cambiar
var precio_base = 2000;

//Valores de los recargos 
var edad_18 = 0.1; // 10%
var edad_25 = 0.2; // 20%
var edad_50 = 0.3; // 30%

var casado_18 = 0.1; // 10%
var casado_25 = 0.2; // 20%
var casado_50 = 0.3; // 30%

var hijos_recargo = 0.2; // 20%


//Recargo
var recargo = 0;
var recargo_total = 0;

//Precio final 
var precio_final = 0;

//Mensajes de alerta para ingresar datos 
var nombre = prompt("Ingrese su nombre, por favor");
var edad = prompt("¿Cuantos años tiene?, Ingrese solamente números ");

var casado = prompt("¿Está casado actualmente?");
//Comprobamos la edad del cónyuge, solamente si se está casado/a
var edad_conyuge;
if("SI" == casado.toUpperCase()){
  edad_conyuge = prompt("¿Que edad tiene su esposo/a?", "Ingrese numeros");
}
//convirtiendo las edades ingresadas a números 
var edad_numero = parseInt(edad);
var edad_conyuge_numero = 0;
var cantidad_hijos_numero = 0;
//convirtiendo la edad del cónyuge si se esta casado/a
if("SI" == casado.toUpperCase()){
  edad_conyuge_numero = parseInt(edad_conyuge);
}
//Comprobamos si tiene hijos
var hijos = prompt("¿Tiene hijos o hijas?");
//Comprobamos la cantidad de hijos solamente si los tienen
if("SI" == hijos.toUpperCase()){
var cantidad_hijos = prompt("¿Cuantos hijos/as tiene?", "INGRESE NUMERO");
//Convertir edad de hijo a numero entero
var cantidad_hijos_numero = parseInt(cantidad_hijos);
}

//Con los datos obtenidos calcular los recargos y el valor final

//Validar el recargo del cliente por edad
if(edad_numero>=18 && edad_numero<25){
  recargo = precio_base * edad_18;
  recargo_total = recargo_total + recargo;
}
else if(edad_numero >= 25 && edad_numero < 50){
  recargo = precio_base * edad_25;
  recargo_total = recargo_total + recargo;
}
else{
  recargo = precio_base * edad_50;
  recargo_total = recargo_total + recargo;
}

// Recargo por la edad del conyuge
if(edad_conyuge_numero >=18 && edad_numero < 25){
  recargo = precio_base * casado_18;
  recargo_total = recargo_total + recargo;
}
else if(edad_conyuge_numero >= 25 && edad_numero < 50){
  recargo = precio_base * casado_25;
  recargo_total = recargo_total + recargo;
}
else if (edad_conyuge_numero >= 50){
  recargo = precio_base * casado_50;
  recargo_total = recargo_total + recargo;
}
 //Recargo por la cantidad de hijos 
 if("SI" == hijos.toUpperCase()){
recargo_total = recargo_total + precio_base * ( cantidad_hijos* hijos_recargo);
}
c
precio_final = precio_base + recargo_total;
//Resultado
alert ("Para el asegurado "+nombre);
alert ("El recargo total sera de: "+recargo_total);
alert ("El precio sera de: "+precio_final);

