

export default function CardFilme({filme}){
    const estiloCardFilme={
        width:'100%',
        height:'100%',
        borderRadius:'8px',
        overflow:'hidden',
        position:'relative'
    }
    const estiloImagem={
        width:"300px",
        height:'100%',
        ObjectFit:'cover',
        opacity:'1,'
    };
    const estiloConteinerInfoFilme={
        color:'#ffffff',
        position:'absolute',
        bottom:0,
        background:'liner-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.9))',
        height:'200px',
        width:'100',
        display:'flex',
        flexDirection:'column',
        justifyContent:'end',
        padding:'10px',
    }
    return( 
        <li style={estiloCardFilme} > 
            <img style={estiloImagem} src={filme.poster}></img>
             <div style={estiloConteinerInfoFilme}>
             <p>Nome do filme:</p>

             <p>Título:{filme.titulo }</p>
             <p>Ano:{filme.ano }</p>
             <p>Gênero:{filme.grnero}</p>
             <p>Nota:{filme.nota }</p>

             </div>
        </li>   
    );
}