const figuras = ["A", "B", "C", "D"]; 
let cartas = [...figuras, ...figuras]; 
cartas.sort(() => Math.random() - 0.5); 

const tabuleiro = document.getElementById("tabuleiro");

let primeiraCarta = null;
let segundaCarta = null;
let bloqueado = false;

cartas.forEach((figura, i) => {
  const carta = document.createElement("div");
  carta.classList.add("carta");
  carta.dataset.figura = figura;
  carta.addEventListener("click", () => virarCarta(carta));
  tabuleiro.appendChild(carta);
});

function virarCarta(carta) {
  if (bloqueado || carta.classList.contains("virada")) return;

  carta.classList.add("virada");
  carta.textContent = carta.dataset.figura;

  if (!primeiraCarta) {
    primeiraCarta = carta;
  } else {
    segundaCarta = carta;
    verificarPar();
  }
}

function verificarPar() {
  if (primeiraCarta.dataset.figura === segundaCarta.dataset.figura) {
    primeiraCarta = null;
    segundaCarta = null;
  } else {
    bloqueado = true;
    setTimeout(() => {
      primeiraCarta.classList.remove("virada");
      segundaCarta.classList.remove("virada");
      primeiraCarta.textContent = "";
      segundaCarta.textContent = "";
      primeiraCarta = null;
      segundaCarta = null;
      bloqueado = false;
    }, 1000);
  }
}