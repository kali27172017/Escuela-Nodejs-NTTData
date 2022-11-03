/*  1.- Ejemplo de uso de let y const */
var planet = {
    namee: "Earth",
    galaxy: "Milky Way"
};
planet.namee = "Tierra";
var person = {
    sexo: 'Masculino',
    age: 27
};
person.age = 50;
var namee = planet.namee, galaxy = planet.galaxy;
var sexo = person.sexo, age = person.age;
console.log("--------EJERCICIO1---------------");
console.log("Objeto con let valores son  ".concat(namee, " y ").concat(galaxy));
console.log("Objeto con const valores son ".concat(sexo, "  y ").concat(age));
