import {filmes} from "../data/filmes.js"

function home () {
    console.log(filmes)

    const primeirofilme =filmes[0]
    const estiloImagem={
        width:"300px"
    };
    return <>
        <h1>filmes</h1>

        <ul>
            <li> 
                <p>Nome do filme:</p>

                <p>Título:{primeirofilme.titulo }</p>
                <p>Ano:{primeirofilme.ano }</p>
                <p>Gênero:{primeirofilme.grnero}</p>
                <p>Nota:{primeirofilme.nota }</p>

                <img style={estiloImagem} src={primeirofilme.poster}></img>
            </li>
        </ul>
    
    </>

    
}

export default home;