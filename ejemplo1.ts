/*  1.- Ejemplo de uso de let y const */ 

interface Planet{
	namee: string;
	galaxy: string;
}

interface Person{
	sexo: string;
	age:  number;
}


let planet: Planet = {
    namee : "Earth",
    galaxy : "Milky Way"
};

planet.namee = "Tierra";

const person : Person = {
    sexo : 'Masculino',
    age: 27 
}
person.age = 50


let   { namee, galaxy } = planet;
const { sexo, age } = person;


console.log("--------EJERCICIO1---------------")
console.log(`Objeto con let valores son  ${namee} y ${galaxy}`);
console.log(`Objeto con const valore son ${sexo}  y ${age}`);


