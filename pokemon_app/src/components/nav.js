import '../style/nav.css'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="navbar">
            <div className="nav-items">
                <Link to="/React_pokedex"><img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg" alt="logo" /></Link>
                {/* <NavInput /> */}
                <ul className="navlinks">
                    <Link to="/React_pokedex" style={{ textDecoration: "none" }}><li>All pokemons</li></Link>
                    <Link to="/React_pokedex/type" style={{ textDecoration: "none" }}><li>types</li></Link>
                    <Link to="/React_pokedex/stats" style={{ textDecoration: "none" }}><li>stats</li></Link>
                </ul>
            </div>
        </div>
    );
}

export default Nav;