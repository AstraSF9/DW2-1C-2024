document.querySelector("#app").innerHTML

// Mi teclado no tiene estos simbolos asi que los comento para usarlos cuanto desee ><
const arrProd = ["Pelota", "Zapatillas", "Certificados", "Edificio de 100 pisos"]

for (let i = 0; i < arrProd.length; i++){
    console.log("El producto ", i+1, "es: ", arrProd[i])
}

arrProd.pop(4)

console.log("Este es el nuevo stock")
for (let i = 0; i < arrProd.length; i++){
    console.log("El producto ", i+1, "es: ", arrProd[i])
}

