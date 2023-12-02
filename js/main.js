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
        Toastify({
            text: 'Tu elemento se agregó al carrito',
            duration: 2000,
            close: true,
            gravity: 'bottom',
            style: {
                background: "linear-gradient(to right, #ffc2d1, #ffe5ec)",
                color: "#023e8a",
            },
        }).showToast();

    console.log(carrito);
    });
});

verCarrito.addEventListener("click", () => {
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

    carrito.forEach((productos, index) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
            <img src="${productos.img}">
            <h3>${productos.nombre}</h3>
            <p>$${productos.precio}<p>
            <button class="borrar-btn" data-index="${index}">Borrar</button>
        `;

        modalContainer.append(carritoContent);

        const btnBorrar = carritoContent.querySelector(".borrar-btn");
        btnBorrar.addEventListener("click", () => {
            const indexToDelete = parseInt(btnBorrar.getAttribute("data-index"));

            carrito.splice(indexToDelete, 1);

            localStorage.setItem("carrito", JSON.stringify(carrito));

            modalContainer.innerHTML = "";
            verCarrito.click();
        });
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);

    const totalBuying = document.createElement("div")
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `Total a pagar: $${total}`;
    modalContainer.append(totalBuying);

    const realizarCompraBtn = document.createElement("button");
    realizarCompraBtn.innerText = "Realizar compra";
    realizarCompraBtn.className = "realizar-compra-btn";
    modalContainer.append(realizarCompraBtn);

    realizarCompraBtn.addEventListener("click", () => {
        carrito = [];
        localStorage.setItem("carrito", JSON.stringify(carrito));
        
        window.alert('¡Compra realizada con éxito!');
        modalContainer.style.display = "none";
    
        location.reload();
    });
    
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
        localStorage.setItem("carrito", JSON.stringify(carrito));
});
});