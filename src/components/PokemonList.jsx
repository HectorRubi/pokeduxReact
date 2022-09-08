import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  console.log("file: PokemonsList.jsx ~ line 4 ~ PokemonList ~ pokemons", pokemons);
  return (
    <div className='PokemonList'>
      {pokemons.map(pokemon => {
        return <PokemonCard name={pokemon.name} key={pokemon.name} />
      })}
    </div>
  )
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''), // ['', '', ... x10]
}

export default PokemonList;
