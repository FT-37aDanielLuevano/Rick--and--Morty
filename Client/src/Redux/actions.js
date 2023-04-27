import { ADD_FAVORITE,REMOVE_FAVORITE,FILTER,ORDER } from "./actions-types";
import axios from "axios";


export const addFav = (character) => {
  const enpoint = 'http://localhost:3001/rickandmorty/fav'
  return async (dispatch) => {
    try {
      const {data} = await axios.post(enpoint,character)
      if(!data.length) throw new Error("No Hay Favoritos")
      return dispatch({
        type: ADD_FAVORITE,
        payload: character
      })
    } catch (error) {
      console.log(error.message)
      
    }
  }
  
}

export const removeFav = (id) => {
  const enpoint = `http://localhost:3001/rickandmorty/fav/${id}`
  return async (dispatch) => {
    try {
      const {data} = await axios.delete(enpoint)
      console.log(data)
      if(!data.length) throw new Error("No Hay Favoritos")
      return dispatch({
        type: REMOVE_FAVORITE,
        payload: id
      })
    } catch (error) {
      console.log(error.message)
      
    }
  }
  
}

export const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender
  }

}

export const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id
  }

}