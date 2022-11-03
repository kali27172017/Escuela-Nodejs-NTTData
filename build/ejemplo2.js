/* 2.- Crear una interfaz que sirva para validar el siguiente objeto
  interface casa {
    area: number,
    ambientes: number,
    colorParedes: string
}*/
var objeCasa = {
    area: 100,
    ambientes: 2,
    colorParedes: "Red"
};
var area = objeCasa.area, ambientes = objeCasa.ambientes, colorParedes = objeCasa.colorParedes;
console.log("--------EJERCICIO1---------------");
console.log("Objeto Validado con interfaz Casa sus valores son ".concat(area, "  ").concat(ambientes, " ").concat(colorParedes, " "));
