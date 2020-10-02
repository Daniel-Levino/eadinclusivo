module.exports = function (app) {
    const videosController = require('../controllers/videosController.js')

    app.route('/videos')
    .get(videosController.listAll)
    .post(videosController.createOne)
}