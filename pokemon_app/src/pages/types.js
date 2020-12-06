import '../style/types.css'
import React from 'react'
import Card from '../components/card'

class Types extends React.Component {
    constructor() {
        super();
        this.state = {
            types: []
        }
    }
    async componentDidMount() {
        console.log(`start fetching`);
        const response = await fetch(`https://pokeapi.co/api/v2/type`);
        const fetchedData = await response.json();
        this.setState({
            types: fetchedData.results
        })
        console.log(`this is fetched data ${this.state.types}`);
    }

    mapping() {
        this.state.types.map(type => console.log(type))
    }

    render() {
        this.mapping();
        const typeName = this.state.types.map((type, i = 0) => 
            <Card key={i} name={type.name} imageURL={'../img/pokemon_types/GO_Normal.webp'} />
        );
        return (
            <div className="types">
                <h1>Types Page</h1>
                <div className="types-container">
                    {typeName}
                </div>
            </div>

        );
    }
}

export default Types;