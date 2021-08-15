import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container pt-3">
      <header>
        <h3>The Breaking Bad Movie</h3>
      </header>
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a className="btn btn-primary" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </a>
      <form className="d-flex mt-3">
        <input className="form-control me-2" type="search" placeholder="Search Characters" aria-label="Search" />
        <button className="btn btn-outline-info" type="submit">
          Search
        </button>
      </form>

      <div></div>

      <div className="row py-4">
        <div className="col border rounded shadow-sm m-3 p-2">col</div>
        <div className="col border rounded shadow-sm m-3 p-2">col</div>
        <div className="col border rounded shadow-sm m-3 p-2">col</div>
        <div className="col border rounded shadow-sm m-3 p-2">col</div>
      </div>
    </div>
  );
}

export default App;
