module.exports = function (app) {
    const mensagensController = require('../controllers/mensagensController.js')

    app.route('/mensagens')
    .get(mensagensController.listAll)
}