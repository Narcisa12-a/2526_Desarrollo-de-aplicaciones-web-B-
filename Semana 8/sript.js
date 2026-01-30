// ALERTA
function mostrarAlerta(){
alert("¡Bienvenido al mundo de Barbie!");
}

// VALIDACION FORMULARIO
document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let nombre = document.getElementById("nombre").value.trim();
let correo = document.getElementById("correo").value.trim();
let pelicula = document.getElementById("pelicula").value;
let mensaje = document.getElementById("mensaje").value.trim();

let valido = true;

// Nombre
if(nombre === ""){
document.getElementById("errorNombre").textContent = "Ingrese su nombre";
valido = false;
}else{
document.getElementById("errorNombre").textContent = "";
}

// Correo
if(correo === ""){
document.getElementById("errorCorreo").textContent = "Ingrese su correo";
valido = false;
}else{
document.getElementById("errorCorreo").textContent = "";
}

// Pelicula
if(pelicula === ""){
document.getElementById("errorPelicula").textContent = "Seleccione una película";
valido = false;
}else{
document.getElementById("errorPelicula").textContent = "";
}

// Mensaje
if(mensaje === ""){
document.getElementById("errorMensaje").textContent = "Ingrese un mensaje";
valido = false;
}else{
document.getElementById("errorMensaje").textContent = "";
}

if(valido){
alert("Formulario enviado. Tu película favorita es: " + pelicula);
document.getElementById("contactForm").reset();
}

});