const axios = require('axios');

const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (req,res) => {
  const {id} = req.params
  axios.get(`${URL}${id}`)
  .then(response => response.data)
  .then(({status,name,species,origin,image,gender}) => {
    if(name){
      const character = {
        id,
        status,
        name,
        species,
        origin,
        image,
        gender
      }
      return res.status(200).json(character)
    }
    return res.status(404).json({message: 'Character not found'})
  })
  .catch(err => res.status(500).send(err.message))
}


module.exports = getCharById