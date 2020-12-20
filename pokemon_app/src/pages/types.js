import '../style/types.css'
import Card from '../components/card'
import Detail from '../components/detail'
import React, { useState, useEffect } from 'react'


function Types() {
    const [types, setTypes] = useState([]);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/type`)
            .then((res) => res.json())
            .then(result => setTypes(result.results))
    }, [])

    const typesData = types.map((type) => <Detail key={type.name} name={type.name}/>)

    return (
        <div className="container">
            <div className="types">
                <h1>Types Page</h1>
                <div className="types-container">
                    {typesData}
                </div>
            </div>
            <div className="stats">
                <h1>Types Page</h1>
                <div className="stats-container">
                </div>
            </div>
        </div>
    )
}

export default Types;