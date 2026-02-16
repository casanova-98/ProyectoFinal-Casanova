// MENU

const seccionMenuPrincipal = document.getElementById("menuPrincipal");
const btnMonedaExtranjera = document.getElementById("monedaExtranjera");
const btnBtc = document.getElementById("btc");
const btnPlazoFijo = document.getElementById("btnplazoFijo");
const seccionDivisas = document.getElementById("divisas");
const seccionBitcoin = document.getElementById("bitcoin");
const seccionPlazoFijo = document.getElementById("plazoFijo");


btnMonedaExtranjera.addEventListener("click", () => {
    seccionMenuPrincipal.classList.add("oculto");
    seccionDivisas.classList.remove("oculto");
});

btnBtc.addEventListener("click", () => {
    seccionMenuPrincipal.classList.add("oculto");
    seccionBitcoin.classList.remove("oculto");
    obtenerPrecioBitcoin();
});

btnPlazoFijo.addEventListener("click", () => {
    seccionMenuPrincipal.classList.add("oculto");
    seccionPlazoFijo.classList.remove("oculto");
});

// MONEDA EXTRANJERA

const btnConvertir = document.getElementById("btnConvertir");
const inputMontoPesos = document.getElementById("montoPesos");
const selectorMoneda = document.getElementById("tipoMoneda");
const textoResultado = document.getElementById("textoResultado");
const btnVolver = document.querySelectorAll(".btnVolver");


btnConvertir.addEventListener("click", async () => {
    const monto = parseFloat(inputMontoPesos.value);
    const monedaSeleccionada = selectorMoneda.value;

    if (isNaN(monto) || monto <= 0) {
        alert("Por favor, ingresa un monto valido.");
        return;
    }

    try {
        textoResultado.innerText = "Consultando cotizacion...";

        let url = "https://dolarapi.com/v1/dolares/oficial";
        if (monedaSeleccionada === "blue") url = "https://dolarapi.com/v1/dolares/blue";
        if (monedaSeleccionada === "euro") url = "https://dolarapi.com/v1/cotizaciones/eur";

        const respueta = await fetch(url);
        const datos = await respueta.json();

        const cotizacion = datos.venta;
        const resultado = monto / cotizacion;

        textoResultado.innerHTML = `
             <p>Cotizacion actual: <strong>$${cotizacion}</strong></p>
                <p>Resultado: <strong>${resultado.toFixed(2)} ${monedaSeleccionada.toUpperCase()}</strong></p>
        `;

    } catch (error) {
        console.error("error al traer la API:", error);
        textoResultado.innerText = "error al conectar con la API. Intenta mas tarde";

    }
});

// BITCOIN

const btnSimularBtc = document.getElementById("btcSimularBtc");
const inputMontoBtc = document.getElementById("montoInvertir");
const textoBtc = document.getElementById("textoBtc");
const precioBtcSpan = document.getElementById("precioBtc");

async function obtenerPrecioBitcoin() {
    try {
        const respuesta = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd");
        const datos = await respuesta.json();
        const precio = datos.bitcoin.usd;
        precioBtcSpan.innerText = `U$D ${precio.toLocaleString()}`;
        return precio;
    } catch (error) {
        precioBtcSpan.innerText = "Error al cargar precio";
        console.error("Error CoinGecko:", error);
    }
}

btnSimularBtc.addEventListener("click", async () => {
    const montoUsd = parseFloat(inputMontoBtc.value);

    if (isNaN(montoUsd) || montoUsd <= 0) {
        alert("Ingresa un monto en dólares válido.");
        return;
    }

    textoBtc.innerText = "Calculando...";

    const precioActual = await obtenerPrecioBitcoin();

    if (precioActual) {
        const cantidadBtc = montoUsd / precioActual;

        textoBtc.innerHTML = `
            <p>Con U$D ${montoUsd} comprarías:</p>
            <p><strong>${cantidadBtc.toFixed(8)} BTC</strong></p>
            <p style="font-size: 0.9rem; color: #8a2be2;">Eso es aprox. ${(cantidadBtc * 100000000).toLocaleString()} bitcoins</p>
        `;
    }
});