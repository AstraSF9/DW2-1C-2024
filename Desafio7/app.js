// Array de productos

const producto1 = {
    nombre: "SmartphoneXYZ",
    precio: "Precio: $450",
    stock: 123
}


let precioProducto = document.getElementById("precioProducto")

//Console log antes del cambio
console.log(precioProducto.innerText)

precioProducto.innerText = producto1.precio