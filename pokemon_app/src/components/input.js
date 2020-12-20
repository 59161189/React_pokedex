import React, {useState} from 'react'
import "../style/navInput.css";


function Input(props) {
    const [search, setSearch] = useState("");

    const recieveSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <input type="text" placeholder={`Search ${props.keyword}`} name="input box" value={search} onChange={recieveSearch} />
            <button type="submit" className="submit-btn" onClick={() => props.search(search)}>search</button>
        </div>
    );
}

export default Input;