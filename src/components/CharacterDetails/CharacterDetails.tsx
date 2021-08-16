import { RouteComponentProps, useParams } from '@reach/router';

const CharacterDetails: React.FC<RouteComponentProps> = () => {
  const { charId } = useParams();
  return <div>Character Details Page: {charId} </div>;
};

export default CharacterDetails;
