document.addEventListener("DOMContentLoaded", () => {

  const imageUrls = [
    "https://www.pngall.com/wp-content/uploads/15/Muzan-PNG-Cutout.png",
    "https://png.pngitem.com/pimgs/s/152-1527318_eren-jaeger-head-eren-jaeger-face-hd-png.png",
    "https://www.pngitem.com/pimgs/m/83-834540_ponyo-redbubble-sticker-hd-png-download.png",
    "https://www.kindpng.com/picc/m/260-2608124_barbie-life-in-the-dreamhouse-png-transparent-png.png",
    "https://www.pngitem.com/pimgs/m/87-872571_transparent-el-principito-png-piccolo-principe-png-png.png",
  ];

  const gallery = document.getElementById("gallery");
  const deleteButton = document.getElementById("deleteImage");
  const addButton = document.getElementById("addImage");
  const imageInput = document.getElementById("imageUrl");

  let selectedImage = null;

  // Función para crear imágenes
  function createImage(url) {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Imagen de la galería";

    img.addEventListener("click", () => {
      document.querySelectorAll("#gallery img").forEach(image => {
        image.classList.remove("selected");
      });
      img.classList.add("selected");
      selectedImage = img;
    });

    gallery.appendChild(img);
  }

  // Cargar imágenes por defecto
  imageUrls.forEach(url => createImage(url));

  // Agregar imagen desde URL
  addButton.addEventListener("click", () => {
    const url = imageInput.value.trim();

    if (url === "") {
      alert("Ingrese una URL válida");
      return;
    }

    createImage(url);
    imageInput.value = "";
  });

  // Eliminar imagen seleccionada
  deleteButton.addEventListener("click", () => {
    if (selectedImage) {
      selectedImage.remove();
      selectedImage = null;
    } else {
      alert("Seleccione una imagen primero");
    }
  });

});