import { Col, Spin } from 'antd';
import Searcher from './components/Searcher';
import PokemonList from './components/PokemonList';
import logo from './statics/logo.svg';
import './App.css';
import { useEffect } from 'react';
import { getPokemon } from './api';
import { getPokemonsWithDetails, setLoading } from './actions';

import { useSelector, useDispatch, shallowEqual } from 'react-redux';

function App() {
  const pokemons = useSelector(state => state.get('pokemons'), shallowEqual).toJS();
  const loading = useSelector(state => state.get('loading'));
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      dispatch(setLoading(true));
      const pokemonsRes = await getPokemon();
      await dispatch(getPokemonsWithDetails(pokemonsRes));
      dispatch(setLoading(false));
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
      {loading
        ?  (
          <Col offset={12}>
            <Spin spinning size='large' />
          </Col>
        )
        : <PokemonList pokemons={pokemons}/>}
    </div>
  );
}

export default App;
