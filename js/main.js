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
        Swal.fire({
            icon: 'warning',
            title: 'Campos vacíos',
            text: 'Por favor, completa todos los campos para continuar.',
            confirmButtonColor: '#bb5cd6',
            background: '#251729',
            color: '#fff'
        });
        return;
    }

    const usuariosActuales = JSON.parse(localStorage.getItem("usuariosDB")) || [];

    const usuarioExiste = usuariosActuales.find(u => u.username === user);

    if (usuarioExiste) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ese usuario ya existe!",
            confirmButtonColor: '#bb5cd6',
            background: '#251729',
            color: '#fff'
        });
    } else {
        const nuevoUsuario = {
            username: user,
            password: pass
        };
        usuariosActuales.push(nuevoUsuario);


        localStorage.setItem("usuariosDB", JSON.stringify(usuariosActuales));

        Swal.fire({
            title: "Creaste la cuenta con exito!",
            icon: "success",
            draggable: true,
            confirmButtonColor: '#bb5cd6',
            background: '#251729',
            color: '#fff'
        });


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
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "El usuario no existe!",
            confirmButtonColor: '#bb5cd6',
            background: '#251729',
            color: '#fff'
        });
    } else if (usuarioEncontrado.password === passLogin) {
        Swal.fire({
            position: "top-end",
            icon: "suscces",
            title: "Bienvenido al simulador de inversiones!",
            showConfirmButton: false,
            timer: 1500,
            confirmButtonColor: '#bb5cd6',
            background: '#251729',
            color: '#fff'
        });

        localStorage.setItem("usuarioLogueado", usuarioEncontrado.username);

        window.location.href = "../pages/menu.html";
    } else {
         Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Contraseña incorrecta!",
            confirmButtonColor: '#bb5cd6',
            background: '#251729',
            color: '#fff'
        });
    }
});
