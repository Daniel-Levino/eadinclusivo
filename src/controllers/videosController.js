exports.listAll = (req, res) =>{
    let videos = [
        {
            titulo: "Jogo em JAVA - Aula 001",
            descricao: "Vamos iniciar com a história da linguagem JAVA.",
            url: "https://www.youtube.com/watch?v=sTX0UEplF54"
        },
        {
            titulo: "Jogo em JAVA - Aula 002",
            descricao: "como funciona o JAVA?.",
            url: "https://www.youtube.com/watch?v=v_ZCtgwbS3o"
        },
        {
            titulo: "NodeJS+SQL - Aula 001",
            descricao: "SQL no Node.js com Sequelize",
            url: "https://www.youtube.com/watch?v=Fbu7z5dXcRs"
        }
    ]
    res.send(videos)
}