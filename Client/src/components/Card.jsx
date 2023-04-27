import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { useState } from "react";
import { addFav, removeFav} from "../Redux/actions";
import { useEffect } from "react";
import './Global.css'



export default function Card({
  id,
  name,
  onClose,
  species,
  gender,
  image,
  origin,
}) {
   const [isFav, SetisFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((state) => state.myFavorites);

  const handleFavorite = () => {
    if (isFav) {
      SetisFav(false);
      dispatch(removeFav(id));
    } else {
      SetisFav(true);
      dispatch(
        addFav({ id, name, onClose, species, gender, image, origin })
      );
    }
  };
  useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         SetisFav(true);
      }
   });
}, [myFavorites,id]);
  return (
    <div key={id} className="container_card">
     
      <button className="d-grid gap-2 cerrar" onClick={onClose}>
        X
      </button>
      <div class="card personaje">
        <img src={image} class="card-img-top" alt={name} />
        <div class="card-body">
          <Link to={`/detail/${id}`}>
            <h5 class="card-title">{name}</h5>
          </Link>
          <p class="card-text">{species}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{gender}</li>
          <li class="list-group-item">{origin}</li>
        </ul>
      </div>
      <div className="fav"> 
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      </div>
    </div>
  );
}
