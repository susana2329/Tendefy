
const calcularCompatibilidad = (vectorA,vectorB) =>{
    let score = 0
    const n = 0.98
    for (let i = 0; i < vectorA.length; i++) {
      const pesoA = Math.pow(n,i)
        
        for (let j = 0; j < vectorB.length; j++) {

            if(vectorA[i] == vectorB[j]){
                const pesoB = Math.pow(n,j)

                score += Math.sqrt(pesoA * pesoB)
                
            }
        }

    }

    const maximo = Math.min(vectorA.length, vectorB.length)
    let afinidad
    let maximoTeorico = 0
    for(let k = 0; k < maximo; k++){
        maximoTeorico += Math.pow(n,k)
    }

    
    
    if(maximoTeorico === 0){
        return 0
    }
        return (score / maximoTeorico) * 100
     
}

console.log(calcularCompatibilidad(["A","B","X","D","E","F"],["A","B","X","Y"])
)