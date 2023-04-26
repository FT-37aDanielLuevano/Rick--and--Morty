// import { ADD_FAVORITE,REMOVE_FAVORITE,FILTER,ORDER} from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const favoritesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        myFavorites: [...state.allCharacters, payload],
        allCharacters: [...state.allCharacters, payload],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (favorite) => favorite.id !== payload
        ),
      };
    case "FILTER":
      const allfiltercharacter = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites: allfiltercharacter,
      };
    case "ORDER":
      return {
        ...state,
        myFavorites:
          payload === "Ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default favoritesReducer;
