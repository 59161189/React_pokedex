import React, { useState, useEffect } from 'react'
import Card from '../components/card'
import '../style/pokemons.css'
import Input from "../components/input";

function Pokemons() {
    let [pokemons, setPokemons] = useState([]);
    let [search, setSearch] = useState("?limit=400");

    function searchPokemon(name) {
        setSearch(`/${name}`)
        searchPokemons()
    }

    const searchPokemons = () => {
        console.log(search);
        fetch(`https://pokeapi.co/api/v2/pokemon${search}`)
            .then(res => res.json())
            .then(result => {
                if (search === "?limit=400")
                    setPokemons(result.results)
                else {
                    setPokemons([{ id: result.id, name: result.name, url: ""}])
                }
            })
            
        console.log(pokemons);
    }

    useEffect(() => {
        searchPokemon();
    }, [])

    let pokemonList = pokemons.map((pokemon) => <Card key={pokemon.name} detail={pokemon.url}  pokeID={pokemon.id} name={pokemon.name}/>)
    return (
        <div className="pokemons">
            <div className="input">
                <Input keyword="pokemon" search={searchPokemon} />
            </div>
            <div className="pokemon-list">
                {pokemonList}
            </div>
        </div>
    );
}

export default Pokemons;