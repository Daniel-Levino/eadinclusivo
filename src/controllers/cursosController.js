exports.listAll = (req, res) =>{
    let cursos = [
        {
            titulo: "Node+SQL",
            descricao: "Aprenda na prática a desenvolver com NodeJS e SQL na prática, criando seu próprio projeto."
        },
        {
            titulo: "GameDev em Java",
            descricao: "Crie jogos incíveis em JAVA e surpreenda a todos."
        }
    ]
    res.send(cursos)
}