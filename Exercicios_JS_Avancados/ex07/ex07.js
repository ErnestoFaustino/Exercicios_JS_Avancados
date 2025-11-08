const jogadores = [
    { nome: "Ana", pontos: 120 },
    { nome: "Carlos", pontos: 200 },
    { nome: "Beatriz", pontos: 150 }
]

let mostrar = ""
jogadores.sort((a, b) => b.pontos - a.pontos)

  
jogadores.forEach((jogador) => {

  mostrar += `1º${jogador.nome} - ${jogador.pontos} pontos\n`

})
document.querySelector("pre").textContent = mostrar