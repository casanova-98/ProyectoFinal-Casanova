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