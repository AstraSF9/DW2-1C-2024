document.querySelector("#app").innerHTML

function sumarProductos(precioUnitario, cantidadDeseada){
    let totalGastado = precioUnitario * cantidadDeseada;
    return totalGastado;
}


let precioUnitario = 10;
let cantidadProducto = 5;
let totalCompra = sumarProductos(precioUnitario, cantidadProducto)

alert("Bienvenidos a la tienda de luz AP, vendemos certificados totalmente reales a un módico precio esta vez de verdad, cada uno a: " + precioUnitario)
alert("Advertimos que esta sucursal solo acepta cambios locales en el codigo (modifico la funcion directamente desde ahi)")

console.log("El costo total de su compra es: $" + totalCompra)

