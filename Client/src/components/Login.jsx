import { useState } from 'react';
import { validate } from '../validation';
import './Global.css';
import logo from './login/login.jpg'




export default function Login({login}) {

  const [userData,Setuserdata] = useState({
    email: "",
    password: ""
  });
  // Nuestro estado local para manejo de errores en los inputs 
  const [Errors,Seterros] = useState({
    email: "",
    password: ""
  });

// La funcion handleChange nos ayuda a llenar la informacion de todos los inoputs que tengamos en nuestro formulario 
  const  handleChange = (event) => {
    Setuserdata({
    ...userData,
      [event.target.name]: event.target.value
    })
    Seterros(validate({
      ...userData,
      [event.target.name]: event.target.value
    }))
  }
  // Vamos a refrescar nuestro form para no renderisar nuevamente toda la pagina si no solo lo que cambio 
  const  handleSubmit = (event) => {
    event.preventDefault()
    login(userData)
  
  }
 
  

  return (
    <div className="login-container-1">
    <div className="login-container loggin">
      <div className='Titulo'>
        <h1>Bienvenido a Rick and Morty</h1>
      </div>
    
    <div className='login'>
      
      <div className='img'>
     
        <img src={logo} alt="imagen login" />
      </div>
      <div className='log'>
      
        <div className='form'>
         
          <form onSubmit={handleSubmit}>
      <label htmlFor="email">Ingresa un Email:</label>
      <input type="text" name="email" id="" placeholder="ingresa tu Email"  value={userData.email} onChange={handleChange}/>
      {Errors.email && <p>{Errors.email}</p>}
      <br />
      <label htmlFor="password">Ingresa tu Password:</label>
      <input type="password" name="password" placeholder="Ingresa tu pasword" value={userData.password} onChange={handleChange}/>
      {Errors.password && <p>{Errors.password}</p>}
      
      <button className='btn-login' type="submit">Login</button>
    </form>

        </div>
      </div>

    </div>
    </div>
    <footer>
      <div className='footer'>
        <p>© 2021 Rick and Morty</p>
        <p>
          <a href="https://www.linkedin.com/in/rick-and-morty/">LinkedIn</a>
        </p>
        <p>
          <a href="https://github.com/rick-and-morty">Github</a>
        </p>
        <p>
          <a href="https://www.instagram.com/rickandmorty/">Instagram</a>
        </p>
        <p>
          <a href="https://www.facebook.com/rickandmorty/">Facebook</a>
        </p>
      </div>

    </footer>
    </div>
    
  )
}