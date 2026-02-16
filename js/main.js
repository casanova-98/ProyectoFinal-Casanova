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


// REGISTRARSE 

btnGuardar.addEventListener("click", () => {
    const user = inputUsername.value;
    const pass = inputPassword.value;

    if (user === "" || pass === "") {
        alert("Por fabor, completa todos los campos");
        return;
    }

    const usuariosActuales = JSON.parse(localStorage.getItem("usuariosDB")) || [];

    const usuarioExiste = usuariosActuales.find(u => u.username === user);

    if (usuarioExiste) {
        alert("Este nombre de usuario ya existe. Elige otro.");
    } else {
        const nuevoUsuario = {
            username: user,
            password: pass
        };
        usuariosActuales.push(nuevoUsuario);


        localStorage.setItem("usuariosDB", JSON.stringify(usuariosActuales));

        alert("¡Registro exitoso! Ahora puedes iniciar sesión.");


        inputUsername.value = "";
        inputPassword.value = "";
        seccionRegistrarse.classList.add("oculto");
        seccionIniciarSesion.classList.remove("oculto");
    }
});

// INICIAR SESION

btnEntrar.addEventListener("click", () => {
    const userLogin = inputLoginUser.value;
    const passLogin = inputLoginPass.value;

    const usuariosActuales = JSON.parse(localStorage.getItem("usuariosDB")) || [];

    
    const usuarioEncontrado = usuariosActuales.find(u => u.username === userLogin);

    if (!usuarioEncontrado) {
        alert("El usuario no existe.");
    } else if (usuarioEncontrado.password === passLogin) {
        alert("¡Bienvenido al simulador de inversiones!");

        localStorage.setItem("usuarioLogueado", usuarioEncontrado.username);

        window.location.href = "../pages/menu.html";
    } else {
        alert("Contraseña incorrecta.");
    }
});
