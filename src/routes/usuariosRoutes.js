module.exports = function (app) {
    const usuariosController = require('../controllers/usuariosController.js')

    app.route('/usuarios')
    .get(usuariosController.listAll)
}