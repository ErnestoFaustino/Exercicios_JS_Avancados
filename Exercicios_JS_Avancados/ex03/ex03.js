const obj = { nome: "Ana", endereco: { cidade: "Luanda" } }
const obj2 = Object.assign({}, obj)
obj2.endereco = { cidade: "Madrid" }
console.log(obj.endereco.cidade)