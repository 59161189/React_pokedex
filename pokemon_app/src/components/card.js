import '../style/card.css'


function Card(props) {
    return (
        <div className="card-container">
            <div className="card-header">
                <img className="pokemon-img" src={props.imageURL} alt={props.name}></img>
            </div>
            <div className="card-detail">
                <div className="pokemon-name">
                    <h1>{props.name}</h1>
                </div>
                <div className="pokemon-detail">
                    <a href={props.detail}>{props.detail}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
