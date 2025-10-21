import {filmes} from "../data/filmes.js"

function CardFilme({filme}){
    const estiloImagem={
        width:"300px"
    };

    return( 
        <li > 
             <p>Nome do filme:</p>

             <p>Título:{filme.titulo }</p>
             <p>Ano:{filme.ano }</p>
             <p>Gênero:{filme.grnero}</p>
             <p>Nota:{filme.nota }</p>

             <img style={estiloImagem} src={filme.poster}></img>
        </li>   
    );
}
function home () {
    
    return <>
        <h1>filmes</h1>

        <ul> 
            {
                filmes.map((filme) => {
                    return(
                       <CardFilme key={`card-filme-${filme.id}` } filme={filme}/>
                    );

                })
            }
            
        </ul>
    
    </>

    
}

export default home;