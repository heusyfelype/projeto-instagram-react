export default function Stories() {

    return (
        <div className="stories">
            <StoryMap />
            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}

let arrayDeObjetosStory = [{ img: "assets/img/9gag.svg", user: "9gag" },
{ img: "assets/img/meowed.svg", user: "meowed" }, 
{ img: "assets/img/barked.svg", user: "barked" }, 
{ img: "assets/img/nathanwpylestrangeplanet.svg", user: "nathanwpylestrangeplanet" }, 
{ img: "assets/img/wawawicomics.svg", user: "wawawicomics" }, 
{ img: "assets/img/respondeai.svg", user: "respondeai" }, 
{ img: "assets/img/filomoderna.svg", user: "filomoderna" }, 
{ img: "assets/img/memeriagourmet.svg", user: "memeriagourmet" }, ];


function StoryMap() {
    return (
        arrayDeObjetosStory.map(objeto => {
            return <Story key={JSON.stringify(objeto)} imagem={objeto.img} usuario={objeto.user} />
        })
    )
}

function Story(props) {
    const {imagem, usuario} = props;
    return (
        <div className="story">
            <div className="imagem"> <img src={imagem} /> </div>
            <div className="usuario">{usuario}</div>
        </div>
    )
}