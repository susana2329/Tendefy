const User = require('../repository/model/usuario')


const getMatches = async (userId) =>{

    const userActual = await User.findById(userId)

    const usuarios = await User.find({
        _id : {$ne:userId}
    })
    console.log(
    usuarios.map(u => ({
    nombre: u.nombre,
    id: u._id.toString()
  }))
);
    console.log(userActual.nombre)
console.log(usuarios.length)
 
    return [userActual,usuarios]


}

module.exports = {getMatches}

