import { Col } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';
import { useEffect } from 'react';
import getPokemon from './api';
import { setPokemons } from './actions';

import { useSelector, useDispatch } from 'react-redux';

function App() {
  const pokemons = useSelector(state => state.pokemons);
  const dispatch = useDispatch();
  console.log("🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons", pokemons);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(setPokemons(pokemonsRes));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default App;
