import {filmes} from "../data/filmes.js"

function home () {
    
    
    const estiloImagem={
        width:"300px"
    };
    return <>
        <h1>filmes</h1>

        <ul> 
            {
                filmes.map((filme) => {
                    return(
                        <li key={`card-filme-${filme.id}` }> 
                            <p>Nome do filme:</p>

                            <p>Título:{filme.titulo }</p>
                            <p>Ano:{filme.ano }</p>
                            <p>Gênero:{filme.grnero}</p>
                            <p>Nota:{filme.nota }</p>

                            <img style={estiloImagem} src={filme.poster}></img>
                        </li>   
                    );

                })
            }
            
        </ul>
    
    </>

    
}

export default home;