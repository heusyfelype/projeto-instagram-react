export default function Usuario() {
    return(
        <UsuarioProps imagem="assets/img/catanacomics.svg" nomeStrong="catanacomics" nome="Catana"/>
    )
}

function UsuarioProps(props){
    return (
        <div className="usuario">
            <img src={props.imagem} />
            <div className="texto">
                <strong> {props.nomeStrong} </strong>
                {props.nome}
            </div>
        </div>
    )
}