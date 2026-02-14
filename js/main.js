const seccionPrimerPantalla = document.getElementById("primerPantalla")
const seccionRegistrarse = document.getElementById("registrarse");
const seccionIniciarSesion = document.getElementById("iniciarsesion");
const btnIniciarSesion = document.getElementById("btnIniciarSesion");
const btnRegistrarse = document.getElementById("btnRegistrarse");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const btnGuardar = document.getElementById("btnGuardar");
const inputLoginUser = document.getElementById("loginuser");
const inputLoginPass = document.getElementById("loginpass");
const btnEntrar = document.getElementById("btnEntrar");

btnIniciarSesion.addEventListener("click", () => {
    seccionPrimerPantalla.classList.add("oculto");
    seccionRegistrarse.classList.add("oculto");
    seccionIniciarSesion.classList.remove("oculto");
});

btnRegistrarse.addEventListener("click", () => {
    seccionPrimerPantalla.classList.add("oculto");
    seccionIniciarSesion.classList.add("oculto");
    seccionRegistrarse.classList.remove("oculto");
});

