import { SET_POKEMONS } from "./types";

// Siempre recibe un payload
// El payload va a ser, en nuestro caso, los nuevos pokemons
export const setPokemons = (payload) => ({
  type: SET_POKEMONS,   // Aqui usamos el type definido
  payload,              // Y le pasamos el payload
});
