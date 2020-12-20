import '../style/card.css'
import React, { useState, useEffect } from 'react'

function Card(props) {
    const [details, setDetails] = useState({
        id: 0,
        name: '',
        types: []
    });
    useEffect(() => {
        if (props.detail !== "")
            fetch(props.detail)
                .then(res => res.json())
                .then((result) => setDetails({
                    id: result.id,
                    name: result.name,
                    types: result.types
                }))
        else {
            console.log(`เข้า else`);
            console.log(props.id);
            console.log(props.name);
            setDetails({
                id: props.pokeID,
                name: props.name
            })
        }
    }, [details.id, props.detail]);
    return (
        <div className="card-container">
            <div className="card-header">
                <img className="img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${details.id}.png`} alt={details.name}></img>
            </div>
            <div className="card-detail">
                <div className="detail">
                    <p>#{details.id} {details.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
