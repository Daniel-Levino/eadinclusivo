const VideoConst = require('../models').Videos

exports.listAll = (req, res) =>{
    VideoConst.findAll().then(videos =>{
        res.send(videos)
    }).catch(error =>{
        res.send(error)
    })
}
exports.createOne = (req,res) =>{
    const {titulo,descricao,url} = req.body
    VideoConst.create({titulo,descricao,url}).then(video =>{
        res.send(video)
    }).catch(error =>{
        res.send(error)
    })
}