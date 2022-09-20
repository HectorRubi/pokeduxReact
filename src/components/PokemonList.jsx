import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemons }) => {
  const formatAbilities = abilities => 
    abilities.map(abilityInfo => abilityInfo.ability.name).join(', ');

  return (
    <div className='PokemonList'>
      {pokemons.map(pokemon => {
        return (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.sprites.front_default}
            abilities={formatAbilities(pokemon.abilities)}
          />
        );
      })}
    </div>
  );
}

PokemonList.defaultProps = {
  pokemons: Array(10).fill(''), // ['', '', ... x10]
}

export default PokemonList;
