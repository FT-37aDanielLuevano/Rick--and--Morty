let myFavorites = []

const postFav = (req,res) => {
  const character = req.body  
  myFavorites.push(character)
  return res.status(200).json(myFavorites)
}

const deleteFav = (req,res) => {
  const {id} = req.params
 const  myFavoritesd = myFavorites.filter((favorite) => favorite.id !== id)
  
  return res.status(200).json(myFavoritesd)
}

module.exports = {
  postFav,
  deleteFav
}