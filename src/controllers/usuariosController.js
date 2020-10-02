const User = require('../models').Usuarios

exports.listAll = (req, res) =>{
    User.findAll().then(usuarios =>{
        res.send(usuarios)
    }).catch(error =>{
        res.send(error)
    })
}
exports.createOne = (req, res) => {
    const {nome,email,senha} = req.body
    User.create({nome,email,senha}).then(usuario =>{
        res.send(usuario)
    }).catch(error =>{
        res.send(error)
    })
}