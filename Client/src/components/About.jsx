import './Global.css'
import img from './About/Rick.jpg'
const About = () => {
  return (
    <>
    <center>
    <h2>Bienvenidos al App De Rick and Morty</h2>
    <p>En Esta app vas a poder traer de un pequeno servidor una imagen de la serie rick and Morty con los datos de cada personaje</p>
    <h3>Asi como Se muestra en la siguiente imagen</h3>
    <div class="card ejemplo">
  <img src={img} class="rick" alt="Rick"/>
  <div class="card-body">
    <h5 class="card-title">El es Rick</h5>
    <p class="card-text">Vive en un Universo Paralelo.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">EART-37 a</li>
    <li class="list-group-item">Comida Favorita: Javascript</li>
    <li class="list-group-item">Age:13449 Anos</li>
  </ul>
 
</div>
    </center>
    </>
  )
}

export default About