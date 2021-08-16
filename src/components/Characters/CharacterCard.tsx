import { Link } from '@reach/router';

// styles
import './Characters.css';

import { Character } from './types';

type CardProps = {
  data: Character[];
};

const CharacterCard: React.FC<CardProps> = ({ data }) => (
  <>
    {data.map((item) => {
      const { char_id, name, img } = item;
      return (
        <div key={char_id} className="col-3 mb-5">
          <Link to={`/character/${char_id}`}>
            <div data-testid="character-element" className="image-card position-relative rounded shadow-sm p-0">
              <img src={img} alt="Char" className="img-fluid image-overlay shadow" style={{ maxHeight: 420 }} />
              <h6 className="character-name">{name}</h6>
            </div>
          </Link>
        </div>
      );
    })}
  </>
);

export default CharacterCard;
