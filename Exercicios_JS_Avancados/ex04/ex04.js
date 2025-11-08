pessoa = { user: { name: "Ana", age: 20 } }
const chave = Object.keys(pessoa)
const valor = pessoa[chave]
const sub = Object.keys(valor)

let res = `\{"${chave[0]}.${sub[0]}\":${pessoa.user.name} \"${chave[0]}.${sub[1]}\":${pessoa.user.age}} `
console.log(res)
