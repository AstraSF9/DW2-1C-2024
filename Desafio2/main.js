document.querySelector("#app").innerHTML

let nombreProducto = "Certificado de Aprobación"
let precioUnitario = "1000000"

alert("Bienvenidos a la tienda de luz AP, vendemos certificados totalmente reales a un módico precio, cada uno a: " + precioUnitario)
let cantidadDeseada = prompt("Cuantos certificados desea comprar?: ")
console.log(cantidadDeseada*precioUnitario)
alert("El costo total de su compra para " + cantidadDeseada + " certificados es: " + precioUnitario*cantidadDeseada)