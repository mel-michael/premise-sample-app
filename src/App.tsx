import React, { useEffect, useState } from 'react';

// styles
import './App.css';

// images
import { ReactComponent as AliveIcon } from './assets/alive.svg';
import { ReactComponent as DeadIcon } from './assets/dead.svg';

enum Status {
  'Alive',
  'Deceased',
  'Presumed dead'
}

type Character = {
  char_id: number;
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: keyof typeof Status;
  nickname: string;
  appearance: number[];
  portrayed: string;
  category: string;
  better_call_saul_appearance: number[];
};

const API = 'https://www.breakingbadapi.com/api';
function App() {
  const [list, setList] = useState<Character[]>([]);

  useEffect(() => {
    const getAllChars = async () => {
      fetch(`${API}/characters`)
        .then((response) => response.json())
        .then((data) => {
          console.log('DATA::', data);
          setList(data);
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
        <h3>The Breaking Bad Movie</h3>
      </header>
      <form className="d-flex my-3">
        <input className="form-control me-2" type="search" placeholder="Search Characters" aria-label="Search" />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>

      <div className="row py-4">
        {list.map((option) => {
          const { char_id, name, img, occupation, status, nickname } = option;
          return (
            <div
              style={{ height: 420 }}
              key={char_id}
              className="position-relative col-2 border rounded shadow-sm m-3 mb-4 p-0"
            >
              <img src={img} alt="Char" className="img-fluid rounded-top w-100 h-100" style={{ maxHeight: 300 }} />
              <h6 className="character-name">{name}</h6>
              <div className="d-flex justify-content-between align-items-center p-2">
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
              <div className="p-2" style={{ fontSize: 14 }}>
                <p className="m-0" style={{ fontSize: 12 }}>
                  Occupation:
                </p>
                <Occupation jobs={occupation} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
