/* 3.- Convertir esta funcion a una funcion de flecha
#  function caluloSumaCuadadro(x, y) {
#    const resultado = (x + y)^2;
#    return 'El resultado es ' + resultado;
#  }*/
console.log("--------EJERCICIO3---------------");
var calculoSumaCuadadro = function (x, y) { return "El resultado es ".concat((x + y) ^ 2); };
console.log(calculoSumaCuadadro(2, 2));
