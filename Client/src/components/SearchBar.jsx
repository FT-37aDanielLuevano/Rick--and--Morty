import './Global.css'

import { useState } from "react";


export default function SearchBar({onSearch}) {

   const [character,setCharacters] = useState('') 
   const handleChange = (event) => {
      setCharacters(event.target.value)
   }
   return (
    <div class="container-fluid buscador">

  <input class="form-control" type="search" placeholder="Search" aria-label="Search"  value={character} onChange={handleChange}/>
  <button class="btn btn-outline-success " onClick={()=> onSearch(character)}>Search</button>

</div>
   );
}
