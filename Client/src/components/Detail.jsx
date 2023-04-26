
import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


export default function Deatil() {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert('No hay personajes con ese ID');
      }
    });
    return setCharacter({});
  }, [id]);

  return (
    <div  key={character.id}>
      <div class="card personaje detail" >
        <img src={character?.image} class="card-img-top" alt={character?.name} />
        <div class="card-body">
          <h5 class="card-title">{character?.name}</h5>
          <p class="card-text">{character?.status}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{character?.species}</li>
          <li class="list-group-item">{character?.gender}</li>
          <li class="list-group-item">{character?.origin?.name}</li>

        </ul>
      </div>
    </div>

  )
}