import ActorCard from './ActorCard';
import { FlexGrid } from '../common/FlexGrid';

const ActorsGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(item => (
        <ActorCard
          key={item.person.id}
          name={item.person.name}
          image={item.person.image ? item.person.image.medium : 'image-not-found.png'}
          country={item.person.country ? item.person.country.name : null}
          birthday={item.person.birthday}
          deathday={item.person.deathday}
          gender={item.person.gender}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorsGrid;