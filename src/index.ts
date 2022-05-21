/*Ejercicio: Cálculo de Descuento
55
• Implemente un algoritmo que calcule y
muestre por pantalla el precio final de un
producto después de aplicarle un descuento
• El precio inicial del producto es $450,50
• El descuento a aplicar es del 10%.
Recuerde que puede obtener el 10% de un valor
multiplicando por 0,1
• El precio y el descuento deben ser guardados en
variables (no ingresados por teclado)*/

let btnEnv = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");

rotulo1.innerHTML = "Precio del producto $450,50";
rotulo2.innerHTML = "Descuento10%";

btnEnv.addEventListener("click", () => {
  let dato1 = 450.0;
  let descuento: number = 10;
  let descuento: number = dato1 - (dato1 * 0.1);
  console.log(
    "El precio final de su compra con descuento es de",
    descuento,
    "pesos"
  );
});
