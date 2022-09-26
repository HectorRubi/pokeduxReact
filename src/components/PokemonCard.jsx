import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';
import StarButton from './StarButton';

const PokemonCard = ({ name, image, types, id, favorite }) => {
  const dispatch = useDispatch();

  const getCapitalizedString = (string) => string.charAt(0).toUpperCase() + string.slice(1);
  const typeString = types.map(elem => elem.type.name).join(', ');

  const handleOnFavorite = () => {
    dispatch(setFavorite({ pokemonId: id }));
  }

  return (
    <Card
      title={getCapitalizedString(name)}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
    >
      <Meta description={typeString} />
    </Card>
  );
};

export default PokemonCard;
