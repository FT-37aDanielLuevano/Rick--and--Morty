import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navar = ({ onSearch, cerrar }) => {
  const rutas = ["About", "Home", "favorites"];
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark ">
        <div className="rutas">
          {rutas.map((ruta, index) => {
            return (
              <Link to={ruta}>
                <button>{ruta}</button>
              </Link>
            );
          })}
        </div>
        <div class="container  send">
          <button
            onClick={cerrar}
            class="btn btn-primary"
            type="button"
          >
            Cerrar Session
          </button>
        </div>

        <div>
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </div>
  );
};

export default Navar;
