import { useEffect, useState } from 'react';
import { RouteComponentProps, useParams, Link } from '@reach/router';
import BeatLoader from 'react-spinners/BeatLoader';

import { Character, Status } from '../Characters/types';

// images
import { ReactComponent as DeadIcon } from '../../assets/dead.svg';
import { ReactComponent as AliveIcon } from '../../assets/alive.svg';

const API_URL = process.env.REACT_APP_API_URL;

const CharacterDetails: React.FC<RouteComponentProps> = () => {
  const { charId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [charData, setCharData] = useState<Character>();

  const Badge = ({ items }: { items: string[] | number[] }): JSX.Element => (
    <div className="d-flex">
      {items.map((item) => (
        <p
          key={item}
          style={{ fontSize: 10, fontWeight: 400, marginRight: 10 }}
          className="badge bg-info text-dark mb-0"
        >
          {item}
        </p>
      ))}
    </div>
  );

  useEffect(() => {
    const getAllChars = async () => {
      fetch(`${API_URL}/${charId}`)
        .then((response) => response.json())
        .then((data) => {
          setCharData(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(true);
          setLoading(false);
          console.error(err);
        });
    };

    getAllChars();
  }, [charId]);

  return (
    <div className="container">
      <p className="mt-3">
        <Link to="/">Back to Home</Link>
      </p>
      <div className="row">
        {loading && (
          <div className="mt-6">
            <BeatLoader color="#ccc" loading={loading} size={16} />
          </div>
        )}

        {error && !loading ? <p className="alert alert-danger mx-3">Oops! Unable to fetch character details</p> : null}

        {!error && !loading && !charData && <p className="alert alert-info mx-3">No data found for this character</p>}

        {charData && (
          <div className="border shadow-sm mt-6 p-0">
            <div className="d-flex">
              <div className="d-flex flex-column align-items-center w-auto">
                <img src={charData.img} alt="Char" className="img-fluid border" width={300} />
                <h5 className="my-3 px-2">{charData.portrayed}</h5>
              </div>
              <div className="d-flex justify-content-between w-100 p-4">
                <div>
                  <h2>{charData.name}</h2>
                  <span className="fst-italic">Nickname: {charData.nickname} </span>
                  <div className="my-3">
                    <p className="">Occupation:</p>
                    <Badge items={charData.occupation} />
                  </div>
                  <div className="my-3">
                    <p className="">Episodes:</p>
                    <Badge items={charData.appearance} />
                  </div>
                </div>
                <p>Date of Birth: {charData.birthday}</p>
                <p className="mb-0">
                  Status: &nbsp;&nbsp;
                  {charData.status === Status[0] ? (
                    <AliveIcon width={18} fill="#20c997" />
                  ) : (
                    <DeadIcon width={18} fill="#dc3545" />
                  )}
                  &nbsp;&nbsp;{charData.status}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterDetails;
