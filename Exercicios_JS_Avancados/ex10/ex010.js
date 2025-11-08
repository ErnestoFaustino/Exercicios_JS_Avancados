let body = document.body
let botao = document.getElementById("btn")
let tema = localStorage.getItem("tema")

  if (tema === "escuro") {
      body.classList.add("preto")
  }

botao.addEventListener("click", () => {
  body.classList.toggle("preto")

    let atual = body.classList.contains("preto") ? "escuro" : "claro"
    localStorage.setItem("tema", atual);
})