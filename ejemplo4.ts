/* # 4.- Crear una función con parametros obligatorios, opcionales y por defecto. Para ello usar estos parametros:
#  - Nombre (obligatorio): string
#  - Apellido (opcional): string
#  - Edad (obligatorio): number
#  - Es Peruano (opcional): boolean (default = true)
#  Debe imprimir: El nombre del usuario es <nombre> <apellido> con edad de <edad> y con|sin nacionalidad peruana */


interface Person{
    nombre: string;
    edad: number;
    apellido ?: string;
    esPeruano?: boolean
}


function Persona(nombre:string, edad:number,  apellido?:string, esPeruano=true){
    console.log("--------EJERCICIO4---------------");
    console.log(`El nombre del usuario es ${nombre} ${apellido} con edad de ${edad} y ${esPeruano ? 'con' : 'sin' } nacionalidad peruana`);
}

let objPersona = {
    nombre: "jorge",
    apellido: "reyes",
    edad: 20
}

let { nombre, apellido, edad} = objPersona;
Persona(nombre, edad, apellido);



