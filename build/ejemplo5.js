/* # 5.- Crear una clase que permita la siguiente estructura
#  - La clase se debe de llamar rectangulo, con las siguientes propiedades: (base y altura)
#  - La clase rectangulo debe calular el area y devolver un número*/
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Rectangulo.prototype.getArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
var rectangulo = new Rectangulo(10, 20);
console.log("--------EJERCICIO5---------------");
console.log("El area del rectangulo es  ".concat(rectangulo.getArea()));
