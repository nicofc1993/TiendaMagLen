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
    {
        id:5,
        nombre: "Conjunto Coramina",
        precio: 9800,
        img: "imagenes/Conjuntocoramina.jpg"
    },
    {
        id:6,
        nombre: "Conjunto Cris Latina",
        precio: 9000,
        img: "imagenes/Conjuntocrislatina.jpeg"
    }
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