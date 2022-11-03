/* 3.- Convertir esta funcion a una funcion de flecha
#  function caluloSumaCuadadro(x, y) {
#    const resultado = (x + y)^2;
#    return 'El resultado es ' + resultado;
#  }*/

console.log("--------EJERCICIO3---------------")
const calculoSumaCuadadro = (x:number, y:number) => `El resultado es ${(x + y)^2}`;
console.log(calculoSumaCuadadro(2,2));

