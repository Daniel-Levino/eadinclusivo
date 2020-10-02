const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const usuariosRoutes = require('./src/routes/usuariosRoutes.js')
const cursosRoutes = require('./src/routes/cursosRoutes.js')
const videosRoutes = require('./src/routes/videosRoutes.js')
const mensagensRoutes = require('./src/routes/mensagensRoutes.js')

usuariosRoutes(app)
cursosRoutes(app)
videosRoutes(app)
mensagensRoutes(app)

app.route('/')
    .get((req, res) => {
        res.send("API EADInclusivo Funcionando")
})  
           

const port = process.env.PORT || 3000

app.listen(port)

console.log("servidor funcionando", port)