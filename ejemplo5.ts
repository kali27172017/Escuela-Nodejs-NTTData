/* # 5.- Crear una clase que permita la siguiente estructura
#  - La clase se debe de llamar rectangulo, con las siguientes propiedades: (base y altura)
#  - La clase rectangulo debe calular el area y devolver un número*/


class Rectangulo {
    base :number;
    altura: number;

    constructor(base:number, altura:number){
         this.base = base;
         this.altura = altura; 
    }

    getArea():number{
       return this.base * this.altura; 
    }
}


let rectangulo = new Rectangulo(10,20);
console.log("--------EJERCICIO5---------------")
console.log(`El area del rectangulo es  ${rectangulo.getArea()}`);

