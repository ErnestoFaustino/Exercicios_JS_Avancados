// Entrada: [1,[2,[3,[4]]]]
vetor = []
for(let i = 1; i < 2; i++){
    vetor.push([i, [i+1,[i+2,[i+3]]]]);
}
console.log(vetor.flat(Infinity))