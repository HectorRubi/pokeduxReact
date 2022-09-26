import { getPokemonDetails } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";

// Siempre recibe un payload
// El payload va a ser, en nuestro caso, los nuevos pokemons
export const setPokemons = (payload) => ({
  type: SET_POKEMONS,   // Aqui usamos el type definido
  payload,              // Y le pasamos el payload
});

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setFavorite = (payload) => ({
  type: SET_FAVORITE,
  payload,
})

export const getPokemonsWithDetails = (pokemons = []) => async (dispatch) => {
  const pokemonsDetailed = await Promise.all(
    pokemons.map(pokemon => getPokemonDetails(pokemon))
  );
  dispatch(setPokemons(pokemonsDetailed));
};
