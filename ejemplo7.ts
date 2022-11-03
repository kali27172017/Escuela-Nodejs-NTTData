/* 7.- 3 ejemplo de uso de desestructuración
  - Desestructuración de todas las variables de un objeto (funsionando interfaces). Las propiedades serian: 
    - usuario: string
    - clave: string
    - fecha: fecha actual
    - estado: boleano
  - Desestructuración de objecto (usando type). La estructura seria: nombre: string, precio: number
  - En una funcion flecha, realizar la desestructuración solo de los 2 ultimos elementos del array. El contenido del array es el siguiente:
    ['Jhon','Luis','Mateo','Ana'] */

interface User {
    usuario :string;
    clave :string
}

interface User {
    fecha : Date;
    estado : boolean 
}

let user: User = {
    usuario : "rejore",
    clave : "123456",
    fecha : new Date(),
    estado: true
}

let {usuario, clave, fecha, estado} = user;
console.log(`Primera Ejemplo de Desestructuración usando Fusion de interfaces ${usuario} - ${clave} - ${fecha} - ${estado}`);



type Producto = {
    nombree: string; 
    precio: number
}

let  producto : Producto = {
    nombree : "kolinos",
    precio: 30
}

let { nombree, precio} = producto;
console.log(`Segundo Ejemplo de Desestructuración usando Type ${nombree} - ${clave}`);



let arreglo  = ['Jhon','Luis','Mateo','Ana'];
let [, , terceroElemento, cuartoElemento] = arreglo;
let dosUltimosValoresArreglo = () => console.log(`Tercer Ejemplo de Desestructuración dos ultimos valores de un arreglo ${terceroElemento} - ${cuartoElemento}`);
dosUltimosValoresArreglo();