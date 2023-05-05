const getCharById = require('../controladores/getCharById')

const {login,register} = require('../controladores/login')

const {postFav,deleteFav} = require('../controladores/handleFavorites')

const router = require('express').Router();



router.get('/character/:id', (req, res) => {

  getCharById(req,res)

})
router.post('/register', (req, res) => {

  register(req,res)

})


router.get('/login', (req, res) => {
  login(req,res);

})

router.post('/fav', (req, res) => {
  postFav(req,res);

});

router.delete('/fav/:id', (req, res) => {

  deleteFav(req,res);

});

module.exports = router ;