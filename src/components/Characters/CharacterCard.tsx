// import { useEffect, useState, ChangeEvent } from 'react';
// import { RouteComponentProps } from '@reach/router';

// styles
import './Characters.css';

// images
import { ReactComponent as DeadIcon } from '../../assets/dead.svg';
import { ReactComponent as AliveIcon } from '../../assets/alive.svg';

import { Status, Character } from './types';

const Occupation = ({ jobs }: { jobs: string[] }): JSX.Element => (
  <>
    {jobs.map((job) => (
      <span key={job} style={{ fontSize: 10, fontWeight: 400 }} className="badge bg-light text-dark">
        {job}
      </span>
    ))}
  </>
);

type CardProps = {
  data: Character[];
};

const CharacterCard: React.FC<CardProps> = ({ data }) => (
  <>
    {data.map((item) => {
      const { char_id, name, img, status, nickname } = item;
      return (
        <div key={char_id} className="col-3 mb-5">
          <div data-testid="character-element" className="image-card position-relative rounded shadow-sm p-0">
            <img src={img} alt="Char" className="img-fluid rounded-top w-100 h-100" style={{ maxHeight: 420 }} />
            <h6 className="character-name">{name}</h6>
            <div className="d-flex justify-content-between align-items-center px-3 pt-2">
              <p className="mb-0 font-weight-bold" style={{ fontSize: 12 }}>
                Nickname: {nickname}
              </p>
              <p className="mb-0">
                {status === Status[0] ? (
                  <AliveIcon width={18} fill="#20c997" />
                ) : (
                  <DeadIcon width={18} fill="#dc3545" />
                )}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </>
);

export default CharacterCard;
