import '../style/detail.css'

function Detail(props) {
    console.log(props.imageURL);
    return(
        <div className="detail-container">
            {/* <div className="detail-logo">
                <img src={props.imageURL} alt={props.name}></img>
            </div> */}
            <div className="detail-name">
                <p>{props.name}</p>
            </div>
        </div>
    ) 
}

export default Detail;