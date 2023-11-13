// let ingresar = false
// function ingreso1(){
// for(let i=2; i>=0; i--){
//     let nombre= prompt("Ingresa tu nombre");
//     if (nombre != ""){
//         alert("bienvenido/a " + nombre);
//         ingresar=true
//         break;
//     }else{
//         alert("Opcion invalida.")
//     }
// }
// }
// ingreso1()
// let edadMayor=18, edadResponsable=14, edadLimite=100;
// let edad=parseFloat(prompt("Ingresa tu edad"));

// if(edad >= edadMayor && edad <= edadLimite) {
//     alert("Ya podes ingresar a la tienda.");
// }else if(edad >= edadResponsable || edad > edadMayor){
//     alert("Atencion! Debes ingresar acompañado/a de un mayor.");
// }else{
//     alert("No podes ingresar");
// }

// const productosMagnolia = [
//     {
//         nombre: "Conjunto Andressa",
//         color: ["Rojo", "Negro", "Blanco"],
//         precio: 2000,
//     },
//     {
//         nombre: "Conjunto Kaury",
//         color: ["Rojo", "Negro", "Blanco"],
//         precio: 2300,
//     },
//     {
//         nombre: "Conjunto Sigry",
//         color: ["Rojo", "Negro", "Blanco"],
//         precio: 2500,
//     },
//     {
//         nombre: "Conjunto Lody",
//         color: ["Rojo", "Negro", "Blanco"],
//         precio: 3000,
//     },
// ];

// let carrito = [];

// function agregarAlCarrito(producto, color) {
//     if (producto.color && color >= 1 && color <= producto.color.length) {
//         const colorElegido = producto.color[color - 1];
//         carrito.push({ ...producto, color: colorElegido });
//         alert(`Agregaste ${producto.nombre} (${colorElegido}) a tu carrito por $${producto.precio}`);
//     } else {
//         alert("Color no válido");
//     }
// }

// function mostrarCarrito() {
//     let carritoDetails = "Productos en el carrito:\n";
//     for (const producto of carrito) {
//         if (producto.color) {
//             carritoDetails += `- ${producto.nombre} (${producto.color}): $${producto.precio}\n`;
//         } else {
//             carritoDetails += `- ${producto.nombre}: $${producto.precio}\n`;
//         }
//     }
//     alert(carritoDetails);
// }

// function ingreso2() {
//     let opcion = prompt("Elegí el número de la opción que quieras comprar:\n" + productosMagnolia.map((producto, index) => `${index + 1}- ${producto.nombre}-${producto.precio}`).join('\n') + "\nPresiona X para finalizar tu compra.");
//     while (opcion !== "x" && opcion !== "X") {
//         const opcionNum = parseInt(opcion);
//         if (opcionNum >= 1 && opcionNum <= productosMagnolia.length) {
//             const producto = productosMagnolia[opcionNum - 1];
//             let color = prompt(`Elige el color para el ${producto.nombre}:\n${producto.color.map((color, index) => `${index + 1}- ${color}`).join('\n')}`);
//             agregarAlCarrito(producto, parseInt(color));
//         } else {
//             alert("Opción no válida");
//         }
//         opcion = prompt("Elegí el número de la opción que quieras comprar:\n" + productosMagnolia.map((producto, index) => `${index + 1}- ${producto.nombre}-${producto.precio}`).join('\n') + "\nPresiona X para finalizar tu compra.");
//     }
//     let total = 0;
//     for (const producto of carrito) {
//         total += producto.precio;
//     }
//     alert("El total de tu compra es: $" + total);
//     mostrarCarrito();
//     alert("Te enviaremos un mail con los pasos a seguir para terminar tu compra. ¡Gracias!");
// }
// ingreso2();


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");

const productosMagnolia = [
    {
        id: 1,
        nombre: "Conjunto Andressa",
        precio: 8000,
        img:"imagenes/Conjuntoandressa.jpg",
    },
    {
        id:2,
        nombre: "Conjunto Kaury",
        precio: 8300,
        img:"imagenes/Conjuntokaury.jpeg",
    },
    {
        id:3,
        nombre: "Conjunto Brigitte",
        precio: 8500,
        img:"imagenes/Conjuntobrigitti.jpg",
    },
    {
        id:4,
        nombre: "Conjunto Lody",
        precio: 9500,
        img:"imagenes/Conjuntolody.jpg",
    },
];

let carrito = [];

productosMagnolia.forEach((productos) => {
    let content = document.createElement("div");
    content.className = "card"
    content.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>$${productos.precio}<p>
    `;
    
    shopContent.append(content);

    let comprar = document.createElement("button");
    comprar.innerText = "comprar";

    content.append(comprar);

    comprar.addEventListener("click", () => {
        carrito.push({
            id : productos.id,
            img : productos.img,
            nombre : productos.nombre,
            precio : productos.precio,
        });
    console.log(carrito);
    });
});

verCarrito.addEventListener("click", () =>{
    
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <h1 class= "modal-header-title">Carrito:</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "Cerrar";
    modalbutton.className = "modal-header-buton;";

    modalbutton.style.cursor = "pointer";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    })

    modalHeader.append(modalbutton);
    
    carrito.forEach((productos) => {
    let carritoContent = document.createElement("div");
    carritoContent.className = "modal-content"
    carritoContent.innerHTML = `
        <img src="${productos.img}">
        <h3>${productos.nombre}</h3>
        <p>$${productos.precio}<p>
    `;

    modalContainer.append(carritoContent)
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalBuying);
});