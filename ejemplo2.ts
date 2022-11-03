/* 2.- Crear una interfaz que sirva para validar el siguiente objeto
  interface casa {
    area: number,
    ambientes: number,
    colorParedes: string
}*/

interface Casa {
  area: number,
  ambientes: number,
  colorParedes: string
}

const objeCasa :Casa = {
    area: 100,
    ambientes: 2,
    colorParedes: "Red"
}

const { area, ambientes, colorParedes} = objeCasa;
console.log("--------EJERCICIO1---------------")
console.log(`Objeto Validado con interfaz Casa sus valores son ${area}  ${ambientes} ${colorParedes} `);

