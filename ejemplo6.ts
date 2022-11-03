/*
 6.- 3 ejemplos de uso de template literal
  - Debe contener string, number
  - Debe contener function flecha
  - Debe contener string y usar boolean para cambiar un texto 
*/

const numero = 20;
const cadena = "Soy un texto"
const literal1 = `Numero ${numero} y  String ${cadena}`;
const literal2 = `Function Flecha ${ (() => 'Bienvenidos al Bootcampp de NTT DATA')()}`;
const literal3 = `String ${cadena} ${ true ? 'grande' : 'chico'} `;

console.log("--------EJERCICIO6---------------");
console.log(`Template Literals 1  ${literal1}`);
console.log(`Template Literals 2  ${literal2}`);
console.log(`Template Literals 3  ${literal3}`);

