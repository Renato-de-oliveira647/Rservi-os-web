import {filmes} from "../data/filmes.js"
import CardFilme from "../components/CardFilme"

function home () {
   
    const estilolistaCards={
        display:"grid",
        gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))',
        gap:'16px',
        listStyle:'none'
    }
    return <>
        <h1>filmes</h1>

        <ul style={estilolistaCards}> 
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