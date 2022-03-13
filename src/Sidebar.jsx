import Usuario from "./Usuario"

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <Usuario />
            <div className="sugestoes">
                <div className="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                <SugestaoMap />
            </div>

            <AbaixoSugestao nomeclasse="links" texto="Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma" />
            <AbaixoSugestao nomeclasse="copyright" texto="© 2021 INSTAGRAM DO FACEBOOK" />

        </aside>
    )
}

let objetoSugestao = [  {imagem: "assets/img/bad.vibes.memes.svg",      nome: "bad.vibes.memes",    razao: "Segue você"},
                        {imagem:"assets/img/chibirdart.svg",            nome: "chibirdart",         razao: "Segue você"},
                        {imagem:"assets/img/razoesparaacreditar.svg",   nome: "razoesparaacreditar",razao: "Novo no Instagram"},
                        {imagem:"assets/img/adorable_animals.svg",      nome: "adorable_animals",   razao: "Segue você"},
                        {imagem:"assets/img/smallcutecats.svg",         nome: "smallcutecats",      razao: "Segue você"}]

function SugestaoMap(){
    return(
        objetoSugestao.map(objeto =>{
            return <Sugestao key={JSON.stringify(objeto)} imagem={objeto.imagem} nome={objeto.nome} razao={objeto.razao} />
        })
    )
}


function Sugestao(props) {
    const {imagem, nome, razao} = props;

    return (
        <div className="sugestao">
            <div className="usuario">
                <img src={imagem} />
                <div className="texto">
                    <div className="nome">{nome}</div>
                    <div className="razao">{razao}</div>
                </div>
            </div>
            <div className="seguir">Seguir</div>
        </div>
    )
}

function AbaixoSugestao(props) {
    return (<div className={props.nomeclasse}>
        {props.texto}
    </div>)
}