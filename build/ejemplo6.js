/*
 6.- 3 ejemplos de uso de template literal
  - Debe contener string, number
  - Debe contener function flecha
  - Debe contener string y usar boolean para cambiar un texto
*/
var numero = 20;
var cadena = "Soy un texto";
var literal1 = "Numero ".concat(numero, " y  String ").concat(cadena);
var literal2 = "Function Flecha ".concat((function () { return 'Bienvenidos al Bootcampp de NTT DATA'; })());
var literal3 = "String ".concat(cadena, " ").concat(true ? 'grande' : 'chico', " ");
console.log("--------EJERCICIO6---------------");
console.log("Template Literals 1  ".concat(literal1));
console.log("Template Literals 2  ".concat(literal2));
console.log("Template Literals 3  ".concat(literal3));
