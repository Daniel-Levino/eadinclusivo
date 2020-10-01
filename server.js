const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.route('/')
    .get((req, res) => {
        res.send('Deu certo o get')
})
    .post((req, res) => {
        res.send(req.body)
    })

const port = process.env.PORT || 3000

app.listen(port)

console.log("servidor funcionando", port)