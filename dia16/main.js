const textarea = document.querySelector("textarea");
const count = document.querySelector(".count");

function contarLetras() {
    const texto = textarea.value;
    const textoLength = texto.length;
    count.innerText = `${textoLength}`;
}
