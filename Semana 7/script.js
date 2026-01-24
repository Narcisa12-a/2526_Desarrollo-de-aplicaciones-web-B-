// Arreglo que contiene los productos de anime
const productos = [
    {
        nombre: "Figura de Tanjiro",
        precio: "$25.00",
        descripcion: "Figura coleccionable de Demon Slayer"
    },
    {
        nombre: "Capa de Akatsuki",
        precio: "$30.00",
        descripcion: "Capa inspirada en Naruto Shippuden"
    },
    {
        nombre: "Sombrero de Luffy",
        precio: "$12.00",
        descripcion: "Sombrero icónico de One Piece"
    }
];

// Referencia al elemento <ul> del HTML
const lista = document.getElementById("listaProductos");

// Función que renderiza los productos en la lista
function mostrarProductos() {
    // Limpia la lista antes de volver a mostrarla
    lista.innerHTML = "";

    // Recorre cada producto del arreglo
    productos.forEach(producto => {
        // Crea un nuevo elemento <li>
        const li = document.createElement("li");

        // Plantilla básica con la información del producto
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: ${producto.precio}<br>
            ${producto.descripcion}
        `;

        // Agrega el producto a la lista
        lista.appendChild(li);
    });
}

// Muestra los productos automáticamente al cargar la página
mostrarProductos();

// Evento del botón para agregar un nuevo producto
document.getElementById("btnAgregar").addEventListener("click", () => {

    // Nuevo producto de ejemplo (anime)
    const nuevoProducto = {
        nombre: "Espada Nichirin",
        precio: "$40.00",
        descripcion: "Espada inspirada en Demon Slayer"
    };

    // Agrega el nuevo producto al arreglo
    productos.push(nuevoProducto);

    // Vuelve a renderizar la lista
    mostrarProductos();
});