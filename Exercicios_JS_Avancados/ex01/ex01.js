vetor = [1,2,2,3,3,3,4,4,4,4,5,5,5]
vetor2 = []
saida = []
mostrar=""
let cont = 0
for(let i = 0; i < vetor.length ; i++){
    if(!vetor2.includes(vetor[i])){
        vetor2.push(vetor[i])
    }
}

for(let i = 0; i< vetor2.length ; i++){
    for(let j = 0; j < vetor.length ; j++){
        if(vetor2[i] == vetor[j]){
            cont++
        }
    }
    saida.push({numero: vetor2[i], vezes: cont})
    cont = 0
}
console.log(saida)