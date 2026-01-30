function mostrarAlerta(){
    alert("¡Bienvenido al mundo de Barbie!");
    }

    document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let pelicula = document.getElementById("pelicula").value;
    let mensaje = document.getElementById("mensaje").value.trim();

    let valido = true;

    if(nombre === ""){
    document.getElementById("errorNombre").textContent = "Ingrese su nombre";
    valido = false;
    }else{
    document.getElementById("errorNombre").textContent = "";
    }

    if(correo === ""){
    document.getElementById("errorCorreo").textContent = "Ingrese su correo";
    valido = false;
    }else{
    document.getElementById("errorCorreo").textContent = "";
    }

    if(pelicula === ""){
    document.getElementById("errorPelicula").textContent = "Seleccione una película";
    valido = false;
    }else{
    document.getElementById("errorPelicula").textContent = "";
    }

    if(mensaje === ""){
    document.getElementById("errorMensaje").textContent = "Ingrese un mensaje";
    valido = false;
    }else{
    document.getElementById("errorMensaje").textContent = "";
    }

    if(valido){
    alert("Formulario enviado. Película favorita: " + pelicula);
    document.getElementById("contactForm").reset();
    }

    });
}