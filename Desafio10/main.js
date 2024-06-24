
// Mi teclado no tiene estos simbolos asi que los comento para usarlos cuanto desee ><
// Array de productos
const productos = [
    {
        id: 1,
        nombre: "Medias",
        precio: 2000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAxZQfTxvnmHSj7SqXWfLQ1wB19mdrmHm_6g&s",
        stock: 3,
        categoria: "Calzado"
    },
    {
        id: 2,
        nombre: "Pelota",
        precio: 18000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMa_GOFe8U_Qq7mmFfZijLk1bddyS5fzOfCQ&s",
        stock: 8,
        categoria:"Accesorios"
    },
    {
        id: 3,
        nombre: "Botines",
        precio: 55000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3W1cBPUOZRQQq9EN1MyHqM0tWsBGPnjlBHA&s",
        stock: 8,
        categoria: "Calzado",
    },   
    {
        id: 4,
        nombre: "Cristian Medina",
        precio: 10000000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQymiwFnvvHZju2VNgMidu5AgbLGldwpJkjuQ&s",
        stock: 1,
        categoria: "Jugadores"


    }
]

const carrito = []

const productosFiltrados = productos.filter( prod => prod.categoria)

console.log(productosFiltrados)

const productosContainer = productos.map(prod => {
    return `
    <div class="producto">
        <h3>${prod.nombre}</h3>
        <img src="${prod.img}">
        <p>${prod.precio}</p>
        <p>${prod.categoria}</p>
        <button class="btn-comprar" id=${prod.id}>Comprar</button>
    </div>
    `
}).join("");


let totalCarrito = 0
let cantItems = 0


const totalContainer = document.getElementById("total")

const container = document.getElementById('container')

console.log(container.innerHTML)


container.innerHTML = productosContainer
totalContainer.innerHTML = `🛒${carrito.length} Total de tu compra : ${totalCarrito}`


const botonesComprar = document.querySelectorAll(".btn-comprar")


const AgregarAlCarrito = (id) => {
    let prodComprado = productos.find(prod => prod.id === id)
    carrito.push(prodComprado)
    mostrarCarrito()
    totalCarrito = calcularTotal()
    totalContainer.innerHTML = `🛒${carrito.length} Total de tu compra : ${totalCarrito}`
}


botonesComprar.forEach( boton => {
   boton.addEventListener('click', ()=> {
        AgregarAlCarrito(parseInt(boton.id))
    })
})


const  mostrarCarrito = () => {
    carritoContainer.innerHTML = ""
    for (const prod of carrito) {
        let h2 = document.createElement('h2')
        h2.innerHTML = prod.nombre
        carritoContainer.appendChild(h2)
    }
}


const calcularTotal = () =>{
    let total = 0
    for (const prod of carrito) {
        total += prod.precio
    }
    return total
}


const carritoContainer = document.getElementById('carrito')



