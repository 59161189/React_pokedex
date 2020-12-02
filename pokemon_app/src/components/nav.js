import '../style/nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Nav() {
    const [pokemon, setPokemon] = useState("");

    const ShowPokemon = (event) => {
        setPokemon(event.target.value)
        console.log(`this is value ${event.target.value}`);
        console.log(`this is pokemon ${pokemon}`);
    }

    return (
        <div className="navbar">
            <div className="nav-items">
                <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo" /></Link>
                <input type="text" placeholder="Search" name="" value={pokemon} onChange={ShowPokemon} />

                <ul className="navlinks">
                    <Link to="/" style={{ textDecoration: "none" }}><li>home</li></Link>
                    <Link to="/type" style={{ textDecoration: "none" }}><li>type</li></Link>
                    <Link to="/stats" style={{ textDecoration: "none" }}><li>stats</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Nav;