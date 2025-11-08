verificar = document.querySelector("#btn")

verificar.addEventListener("click", () => {

  nome = document.querySelector("#nome").value
  if(nome === "") {
    alert("Campo vazio")

  }else{
   document.querySelector("#mostrar").textContent = "Verificando disponibilidade..."
    setTimeout(() => {
      const nomes = ["admin", "user", "teste"]

      if (nomes.includes(nome)) {
        document.querySelector("#mostrar").textContent = "Esse nome já existe"
      } else {
        document.querySelector("#mostrar").textContent = "  Nome disponivel"
      }
    }, 2000);
  }
})

