const users = require("../utils/users");
const{ User} = require("../DB_connection")

const login = (req, res) => {
  const { email, password } = req.query;
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  user
    ? res.status(200).json({ access: true })
    : res.status(404).json({ access: false });
};

async function register (req, res)  {
  const { email, password ,id} = req.body 
  console.log('register',email, password,id)
  console.log('register')
  try {
    if(!password || !email){
      res.status(404).json({ message: "Acceso Denegado"});

    }
    const user = await User.create({password,email,id})
    res.status(200).json({ user});
  } catch (error) {
    res.status(500).json({ message: error});
    
  }
}

module.exports = {
  login,
  register
};
