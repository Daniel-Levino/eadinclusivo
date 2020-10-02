module.exports = function (app) {
    const usuarioController = require('../controllers/usuarioController.js')

    app.route('/usuario')
    .get(usuarioController.listAll)
}