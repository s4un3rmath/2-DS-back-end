// adicionar
//adicionar musica
const musicas = require("./musicas.json")
musicas.push({  
    //11
    
    nome:  "GOSSIP",
    artista: "Måneskin",
    album:  "Rush!",
    lancamento:  "06/10/2023",
    duracao:  "4:44",
    vizualizacoes: 24.0000

})
 

console.log("##### musicas filtradas po vizualizacoes com menos de 15 milhões #####")
const filtro = musicas.filter((musica)=> musica.vizualizacoes < 15.0000)
console.log(filtro)

console.log("##### musica encontrada pelo nome do artista #####")
const encontrar = musicas.find((musica) => musica.artista == "Måneskin" )
console.log(encontrar)



// MOSTRAR OS DADOS DO ARQUIVO ORGANIZADAMENTE
// alunosArquivo.forEach() ... etc

musicas.js.forEach((musica)=>{
    console.log(musica.nome + 
        " artista " +  musica.artista  + 
        "album " + musica.album +
        " duração  " + musica.duracao )
})
