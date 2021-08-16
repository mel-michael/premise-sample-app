import { useEffect, useState } from 'react';
import { RouteComponentProps, useParams, Link } from '@reach/router';
import BeatLoader from 'react-spinners/BeatLoader';

import { Character } from '../Characters/types';

const API_URL = process.env.REACT_APP_API_URL;

const CharacterDetails: React.FC<RouteComponentProps> = () => {
  const { charId } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [charData, setCharData] = useState<Character>();

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
      Character Details Page: {charId}
      <Link to="/">Back to Home</Link>
      <div className="row pb-6">
        {loading && (
          <div className="mt-6">
            <BeatLoader color="#ccc" loading={loading} size={16} />
          </div>
        )}

        {error && !loading ? <p className="alert alert-danger mx-3">Oops! Unable to fetch character details</p> : null}

        {!error && !loading && !charData && <p className="alert alert-info mx-3">No data found for this character</p>}

        {charData && <div>{charData.portrayed}</div>}
      </div>
    </div>
  );
};

export default CharacterDetails;
