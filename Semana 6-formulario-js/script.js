// Captura de los elementos del formulario
const nombre = document.getElementById("nombre");
const correo = document.getElementById("correo");
const password = document.getElementById("password");
const confirmarPassword = document.getElementById("confirmarPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

// Validar nombre
function validarNombre() {
    if (nombre.value.length >= 3) {
        nombre.className = "valido";
        document.getElementById("errorNombre").textContent = "";
        return true;
    } else {
        nombre.className = "invalido";
        document.getElementById("errorNombre").textContent =
            "Mínimo 3 caracteres";
        return false;
    }
}
// Validar correo electrónico con expresión regular
function validarCorreo() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(correo.value)) {
        correo.className = "valido";
        document.getElementById("errorCorreo").textContent = "";
        return true;
    } else {
        correo.className = "invalido";
        document.getElementById("errorCorreo").textContent =
            "Correo no válido";
        return false;
    }
}
// Validar contraseña
function validarPassword() {
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])/;
    if (password.value.length >= 8 && regex.test(password.value)) {
        password.className = "valido";
        document.getElementById("errorPassword").textContent = "";
        return true;
    } else {
        password.className = "invalido";
        document.getElementById("errorPassword").textContent =
            "Debe tener 8 caracteres, un número y un símbolo";
        return false;
    }
}
// Confirmar contraseña
function validarConfirmacion() {
    if (confirmarPassword.value === password.value &&
        confirmarPassword.value !== "") {
        confirmarPassword.className = "valido";
        document.getElementById("errorConfirmar").textContent = "";
        return true;
    } else {
        confirmarPassword.className = "invalido";
        document.getElementById("errorConfirmar").textContent =
            "Las contraseñas no coinciden";
        return false;
    }
}
// Validar edad
function validarEdad() {
    if (edad.value >= 18) {
        edad.className = "valido";
        document.getElementById("errorEdad").textContent = "";
        return true;
    } else {
        edad.className = "invalido";
        document.getElementById("errorEdad").textContent =
            "Debe ser mayor de edad";
        return false;
    }
}
// Validar todo el formulario
function validarFormulario() {
    if (
        validarNombre() &&
        validarCorreo() &&
        validarPassword() &&
        validarConfirmacion() &&
        validarEdad()
    ) {
        btnEnviar.disabled = false;
    } else {
        btnEnviar.disabled = true;
    }
}
// Eventos en tiempo real
nombre.addEventListener("input", validarFormulario);
correo.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmarPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);
// Evento al enviar formulario
document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault(); // Evita recargar la página
    alert("Formulario enviado correctamente ✔");
});