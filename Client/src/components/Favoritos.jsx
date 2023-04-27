import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { orderCards , filterCards} from "../Redux/actions";

export default function Favoritos  ()  {

  const dispatch = useDispatch();

const hanclerOrder = event => {
  dispatch(orderCards(event.target.value))

}
const hanclerFilter = event => {
  dispatch(filterCards(event.target.value))

}


  const { myFavorites } = useSelector((state) => state);
  console.log('ruta favs',myFavorites)
  return (
    <div>
      <div>
        <select onChange={hanclerOrder}>
          <option value="order" disabled='disabled'>Order By</option>
          <option value="Ascendente">Acscendente</option>
          <option value="Decendente">Decendente</option>
        </select>
        <select onChange={hanclerFilter}>
        <option value="filter" disabled='disabled'>Filter By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {myFavorites.map((item) => {
        return (
          <div>
            <div key={item.id} className="container_card">
              <div class="card personaje">
                <img src={item.image} class="card-img-top" alt={item.name} />
                <div class="card-body">
                  <Link to={`/detail/${item.id}`}>
                    <h5 class="card-title">{item.name}</h5>
                  </Link>
                  <p class="card-text">{item.species}</p>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{item.gender}</li>
                  <li class="list-group-item">{item.origin}</li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
