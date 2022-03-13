export default function Posts() {
    return (
        <div className="posts">
            <PostMap />
        </div>
    )
}

let objetoPost = [{
    imagemPerfilPost: "assets/img/meowed.svg",
    perfilPost: "meowed",
    imagemPost: "assets/img/gato-telefone.svg",
    imagemQuemCurtiu: "assets/img/respondeai.svg",
    nomeQuemCurtiu: "respondeai",
    qtdCurtidas: "101.523"
}, {
    imagemPerfilPost: "assets/img/barked.svg",
    perfilPost: "barked",
    imagemPost: "assets/img/dog.svg",
    imagemQuemCurtiu: "assets/img/adorable_animals.svg",
    nomeQuemCurtiu: "adorable_animals",
    qtdCurtidas: "99.159"
}]

function PostMap(){
    return(
        objetoPost.map(objeto =>{
            return (
                <Post key={JSON.stringify(objeto)}
                imagemPerfilPost=   {objeto.imagemPerfilPost}
                perfilPost=         {objeto.perfilPost}
                imagemPost=         {objeto.imagemPost}
                imagemQuemCurtiu=   {objeto.imagemQuemCurtiu} 
                nomeQuemCurtiu=     {objeto.nomeQuemCurtiu}
                qtdCurtidas=        {objeto.qtdCurtidas} />
            )
        })
    )
}

function Post(props) {
    const {imagemPerfilPost, perfilPost, imagemPost, imagemQuemCurtiu, nomeQuemCurtiu, qtdCurtidas} = props;

    return (
        <section className="post">
            <div className="topo">
                <div className="usuario">
                    <img src={imagemPerfilPost} />
                    {perfilPost}
                </div>
                <div className="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div className="conteudo">
                <img src={imagemPost} />
            </div>

            <div className="fundo">
                <div className="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div className="curtidas">
                    <img src={imagemQuemCurtiu} />
                    <div className="texto">
                        Curtido por <strong>{nomeQuemCurtiu}</strong> e <strong>outras {qtdCurtidas} pessoas</strong>
                    </div>
                </div>
            </div>
        </section>

    )
}