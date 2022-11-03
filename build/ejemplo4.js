/* # 4.- Crear una función con parametros obligatorios, opcionales y por defecto. Para ello usar estos parametros:
#  - Nombre (obligatorio): string
#  - Apellido (opcional): string
#  - Edad (obligatorio): number
#  - Es Peruano (opcional): boolean (default = true)
#  Debe imprimir: El nombre del usuario es <nombre> <apellido> con edad de <edad> y con|sin nacionalidad peruana */
function Persona(nombre, edad, apellido, esPeruano) {
    if (esPeruano === void 0) { esPeruano = true; }
    console.log("--------EJERCICIO4---------------");
    console.log("El nombre del usuario es ".concat(nombre, " ").concat(apellido, " con edad de ").concat(edad, " y ").concat(esPeruano ? 'con' : 'sin', " nacionalidad peruana"));
}
var objPersona = {
    nombre: "jorge",
    apellido: "reyes",
    edad: 20
};
var nombre = objPersona.nombre, apellido = objPersona.apellido, edad = objPersona.edad;
Persona(nombre, edad, apellido);
