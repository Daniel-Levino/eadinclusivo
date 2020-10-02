exports.listAll = (req, res) =>{
    let usuarios = [
        {
            nome: "jose carlos",
            email: "jose.carlos@email.com",
            senha: "abc123"
        },
        {
            nome: "maria silva",
            email: "maria.silva@email.com",
            senha: "abc123"
        },
        {
            nome: "daniel levino",
            email: "daniel.levino@email.com",
            senha: "abc123"
            
        }
    ]
    res.send(usuarios)
}