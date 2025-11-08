let progresso = 0;

let intervalo = setInterval(() => {
  progresso += 10
  document.querySelector("h1").textContent = `Baixando... ${progresso}%`

   if (progresso >= 100) {
      clearInterval(intervalo);
      document.querySelector("h1").textContent = "Download completo!"
    }

}, 1000)

