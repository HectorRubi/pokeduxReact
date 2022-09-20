import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ name, image, abilities }) => {
  const getCapitalizedString = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Card
      title={getCapitalizedString(name)}
      cover={
        <img
          src={image}
          alt={name}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta description={abilities} />
    </Card>
  );
};

export default PokemonCard;
