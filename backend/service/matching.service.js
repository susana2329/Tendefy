const matchingRepository = require('../repository/matching.repository')

const getMatches = async (userId) => {

    const [userActual, usuarios] = await matchingRepository.getMatches(userId)

    const artistasActual = []

    for (let i = 0; i < userActual.topArtists.length; i++) {
        artistasActual.push(userActual.topArtists[i].nombre)
        
    }
        const matches = []
        console.log("ACTUAL")
        console.log(userActual.topArtists)

        console.log("PRIMER USUARIO")
        console.log(usuarios[0].topArtists)
        
    for (let i = 0; i < usuarios.length; i++) {
            const artistasUsuario = []

            
            for (let j = 0; j < usuarios[i].topArtists.length; j++) {
                artistasUsuario.push(usuarios[i].topArtists[j].nombre) 
                
            
            }
    
    

    const compatibilidad = calcularCompatibilidad(artistasActual,artistasUsuario)


   matches.push({
    id: usuarios[i]._id,
    nombre: usuarios[i].nombre,
    edad: usuarios[i].edad,
    descripcion: usuarios[i].descripcion,
    fotos: usuarios[i].fotos,
    avatarUrl: usuarios[i].avatarUrl,
    topTracks: usuarios[i].topTracks,
    topArtists:usuarios[i].topArtists,
    compatibilidad: compatibilidad
})

}
    matches.sort((a,b) =>{
       return b.compatibilidad - a.compatibilidad
    })

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




module.exports ={calcularCompatibilidad,getMatches}