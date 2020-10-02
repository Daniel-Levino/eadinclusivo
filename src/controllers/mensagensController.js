const mensagens = require('../models/mensagens')

const Message = require('../models').Mensagens

exports.listAll = (req, res) =>{
    Message.findAll().then(mensagens =>{
        res.send(mensagens)
    }).catch(error =>{
        res.send(error)
    })
    
}
exports.createOne = (req, res) =>{
    const {texto} = req.body
    Message.create({texto}).then(mensagem =>{
        res.send(mensagem)
    }).catch(error =>{
        res.send(error)
    })
}