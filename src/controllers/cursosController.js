const Course = require('../models').Cursos

exports.listAll = (req, res) =>{
    Course.findAll().then(cursos => {
        res.send(cursos)
    }).catch(error=>{
        res.send(error)
    })
    
}
exports.createOne = (req, res) =>{
    const {titulo, descricao} = req.body
    Course.create({titulo, descricao}).then(curso => {
        res.send(curso)
    }).catch(error =>{
        res.send(error)
    })
}