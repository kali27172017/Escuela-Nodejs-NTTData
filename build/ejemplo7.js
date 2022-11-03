/* 7.- 3 ejemplo de uso de desestructuración
  - Desestructuración de todas las variables de un objeto (funsionando interfaces). Las propiedades serian:
    - usuario: string
    - clave: string
    - fecha: fecha actual
    - estado: boleano
  - Desestructuración de objecto (usando type). La estructura seria: nombre: string, precio: number
  - En una funcion flecha, realizar la desestructuración solo de los 2 ultimos elementos del array. El contenido del array es el siguiente:
    ['Jhon','Luis','Mateo','Ana'] */
var user = {
    usuario: "rejore",
    clave: "123456",
    fecha: new Date(),
    estado: true
};
var usuario = user.usuario, clave = user.clave, fecha = user.fecha, estado = user.estado;
console.log("Primera Ejemplo de Desestructuraci\u00F3n usando Fusion de interfaces ".concat(usuario, " - ").concat(clave, " - ").concat(fecha, " - ").concat(estado));
var producto = {
    nombree: "kolinos",
    precio: 30
};
var nombree = producto.nombree, precio = producto.precio;
console.log("Segundo Ejemplo de Desestructuraci\u00F3n usando Type ".concat(nombree, " - ").concat(clave));
var arreglo = ['Jhon', 'Luis', 'Mateo', 'Ana'];
var terceroElemento = arreglo[2], cuartoElemento = arreglo[3];
var dosUltimosValoresArreglo = function () { return console.log("Tercer Ejemplo de Desestructuraci\u00F3n dos ultimos valores de un arreglo ".concat(terceroElemento, " - ").concat(cuartoElemento)); };
dosUltimosValoresArreglo();
