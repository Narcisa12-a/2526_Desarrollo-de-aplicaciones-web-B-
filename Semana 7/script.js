// Arreglo de productos (datos iniciales)
const productos = [
    {
        nombre: "Espada Nichirin",
        precio: 120,
        descripcion: "Espada utilizada por los cazadores de demonios."
    },
    {
        nombre: "Capa de Akatsuki",
        precio: 80,
        descripcion: "Capa negra con nubes rojas del anime Naruto."
    },
    {
        nombre: "Sombrero de Luffy",
        precio: 40,
        descripcion: "Sombrero de paja del capitán de One Piece."
    }
];
// Seleccionamos la lista del HTML
const lista = document.getElementById("listaProductos");
// Función para mostrar los productos en pantalla
function mostrarProductos() {
    // Limpiamos la lista para evitar que se repitan
    lista.innerHTML = "";
    // Recorremos el arreglo de productos
    productos.forEach(producto => {
        // Creamos un elemento <li>
        const item = document.createElement("li");
        // Contenido del producto
        item.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        // Agregamos el producto a la lista
        lista.appendChild(item);
    });
}
// Mostrar productos al cargar la página
mostrarProductos();
// Botón para agregar nuevos productos
document.getElementById("btnAgregar").addEventListener("click", () => {
    // Obtenemos los valores de los inputs
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("descripcion").value;
    // Validación básica
    if (nombre === "" || precio === "" || descripcion === "") {
        alert("Por favor completa todos los campos");
        return;
    }
    // Creamos un nuevo objeto producto
    const nuevoProducto = {
        nombre: nombre,
        precio: precio,
        descripcion: descripcion
    };
    // Agregamos el producto al arreglo
    productos.push(nuevoProducto);
    // Volvemos a mostrar la lista actualizada
    mostrarProductos();
    // Limpiamos los campos
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("descripcion").value = "";
});
