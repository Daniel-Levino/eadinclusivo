module.exports = function (app) {
    const cursosController = require('../controllers/cursosController.js')

    app.route('/cursos')
    .get(cursosController.listAll)
}