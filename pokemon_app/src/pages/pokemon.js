import React from 'react'
import Card from '../components/card'
import '../style/pokemon.css'

class Pokemon extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemons: []
        }
    }

    async componentDidMount() {
        const response =  await fetch(`https://pokeapi.co/api/v2/pokemon/`);
        const fetchedData = await response.json();
        this.setState({
                pokemons: fetchedData.results
            })
        console.log(this.state.pokemons);
    }
    render() {
        const pokemonMapping = this.state.pokemons.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} imageURL={`https://raw.githubusercontent.com/robert-z/simple-pokemon-json-api/master/public/images/${pokemon.name}.jpg`} detail={pokemon.url}/>)
        return (
            <div className="pokemon-list">
                {pokemonMapping}
            </div>
        );
    }



}

export default Pokemon;