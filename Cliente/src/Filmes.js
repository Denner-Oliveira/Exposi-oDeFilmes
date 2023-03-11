export default async function Valores(){
    const result = await fetch('http://localhost:3001').then(res => {return res.json()})
    let acao = [],terror = [],romance = [],ficcao = [],comedia = [];

    result.filter((element)=>{
        element.genero === 'acao'? acao.push(element):
          element.genero === 'terror'? terror.push(element):
            element.genero === 'romance'? romance.push(element): 
              element.genero === 'ficcao'? ficcao.push(element): 
                element.genero === 'comedia'? comedia.push(element):console.log()
    })
    let generos = [acao,terror,romance,ficcao,comedia]
    return generos
}

