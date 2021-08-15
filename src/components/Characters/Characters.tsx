import { useEffect, useState, ChangeEvent } from 'react';

// styles
import './Characters.css';

// images
import { ReactComponent as AliveIcon } from '../../assets/alive.svg';
import { ReactComponent as DeadIcon } from '../../assets/dead.svg';

import { Status, Character } from './types';

const API_URL = 'https://www.breakingbadapi.com/api';

const Characters = () => {
  const [list, setList] = useState<Character[]>([]);
  const [filteredData, setFiltered] = useState<Character[]>([]);
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchInput(event.target.value);

    if (value.length === 0) {
      setFiltered(list);
    }
    if (value.length >= 3) {
      handleNameSearch(value);
    }
  };

  const handleNameSearch = (data: string) => {
    const searchRegex = new RegExp(data, 'i');
    const result = list.filter(({ name }) => {
      if (name.match(searchRegex)) return true;
      return false;
    });
    setFiltered(result);
  };

  useEffect(() => {
    const getAllChars = async () => {
      fetch(`${API_URL}/characters`)
        .then((response) => response.json())
        .then((data) => {
          console.log('DATA::', data);
          setList(data);
          setFiltered(data);
        });
    };

    getAllChars();
  }, []);

  const Occupation = ({ jobs }: { jobs: string[] }): JSX.Element => (
    <>
      {jobs.map((job) => (
        <span key={job} style={{ fontSize: 10, fontWeight: 400 }} className="badge bg-light text-dark">
          {job}
        </span>
      ))}
    </>
  );

  return (
    <div className="container pt-3">
      <header>
        <h3>The Breaking Bad TV Series</h3>
      </header>
      <div className="row">
        <form className="d-flex my-3 col pl-0 ml-3">
          <input
            value={searchInput}
            onChange={handleChange}
            className="form-control me-2"
            type="search"
            placeholder="Search Characters by name"
            aria-label="Search"
          />
          <button className="btn btn-outline-info" type="submit">
            Search
          </button>
        </form>
        <div className="col" />
      </div>

      <div className="row pb-6">
        <h5 className="m-3 p-0">All Characters</h5>
        {filteredData.map((option) => {
          const { char_id, name, img, occupation, status, nickname } = option;
          return (
            <div key={char_id} className="col-3 mb-4">
              <div style={{ height: 540 }} className="position-relative border rounded shadow-sm p-0">
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
                <div className="px-3 pt-2" style={{ fontSize: 14 }}>
                  <p className="m-0" style={{ fontSize: 12 }}>
                    Occupation:
                  </p>
                  <Occupation jobs={occupation} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
