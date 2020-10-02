const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

const usuarioRoutes = require('./src/routes/usuarioRoutes.js')

usuarioRoutes(app)

app.route('/')
    .get((req, res) => {
        res.send("API EADInclusivo Funcionando")
})  
           

const port = process.env.PORT || 3000

app.listen(port)

console.log("servidor funcionando", port)