import '../style/card.css'


function Card(props) {
    return (
        <div className="card-container">
            <div className="card-header">
                <img className="img" src={props.imageURL} alt={props.name}></img>
            </div>
            <div className="card-detail">
                <div className="name">
                    <h1>{props.name}</h1>
                </div>
                <div className="detail">
                    <a href={props.detail}>{props.detail}</a>
                </div>
            </div>
        </div>
    );
}

export default Card;
