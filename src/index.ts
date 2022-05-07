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
