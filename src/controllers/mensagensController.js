exports.listAll = (req, res) =>{
    let mensagens = [
        {
            texto: "oi jose carlos, tudo bem?"
        },
        {
            texto: "oi. queria só saber quando será proxim aula ao vivo"
        },
        {
            texto: "vai ser na quinta."
        }
    ]
    res.send(mensagens)
}