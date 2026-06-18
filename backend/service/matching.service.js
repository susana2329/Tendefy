const users = require('../mocks/profiles.json')
const userActual = require('../mocks/me.json')

const getMatches = (userActual, usuarios) =>{
    const matches = []
    
    for (let h = 0; h < usuarios.length; h++) {
        
        if(usuarios[h].name === userActual){
            continue
        }

        const compatibilidad = calcularCompatibilidad(userActual.artists, usuarios[h].artists)

        matches.push({
            usuario:usuarios[h],
            compatibility: compatibilidad
        })
    }
        matches.sort(
            (a,b) =>  b.compatibility - a.compatibility
        )
        return matches
    }



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
    let maximoTeorico = 0
    for(let k = 0; k < maximo; k++){
        maximoTeorico += Math.pow(n,k)
    }

    
    
    if(maximoTeorico === 0){
        return 0
    }
        return (score / maximoTeorico) * 100
     
}


console.log(
    getMatches(userActual, users)
)

module.exports ={
    getMatches,calcularCompatibilidad
}