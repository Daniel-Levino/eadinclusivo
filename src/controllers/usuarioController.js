exports.listAll = (req, res) =>{
    let usuarios = [
        {
            nome: "jose carlos",
            email: "jose.carlos@email.com"
        },
        {
            nome: "maria silva",
            email: "maria.silva@email.com"
        },
        {
            nome: "daniel levino",
            email: "daniel.levino@email.com"
        }
    ]
    res.send(usuarios)
}