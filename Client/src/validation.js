// Esta es una funcion que nos ayudara a realizar validaciones en nuestro Form de login 

// Regex que nos ayudaran a validar condiciones en los input EMAIL && PASSWORD 
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const UnNumero = /\d/


// La funcion que realiza las validaciones y recibe el estado con la información

export const validate = (userData) => {
  const errors = {}
  if (userData.email==='') {
    errors.email = 'Se requiere un nombre';
  }
  if (!regexEmail.test(userData.email)) {
    errors.email = 'Debe ser un correo electrónico';
  }
  if (userData.email.length > 35) {
    errors.email = 'Nombre de usuario no peude ser mayor a 35';
  }
  if (!UnNumero.test(userData.password)) {
    errors.password = 'El Password debe tener almenos un numero ';
  }
  if (userData.password.length < 6 && userData.password.length > 10) {
    errors.password = 'El Password debe tener entre  6 y 10 caracteres';
  }
  return errors;

}