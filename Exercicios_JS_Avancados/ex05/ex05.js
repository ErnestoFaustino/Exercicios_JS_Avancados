async function filaDePromises(funcoes) {
  const resultados = [];

  for (const func of funcoes) {
    const resultado = await func() 
    resultados.push(resultado)
  }

  return resultados
}


const f1 = () => new Promise(r => setTimeout(() => r("primeira"), 1000))
const f2 = () => new Promise(r => setTimeout(() => r("segunda"), 500))

async function teste() {
  const resultados = await filaDePromises([f1, f2])
  console.log(resultados)
}

teste()