import { Router } from '@reach/router';

// components & styles
import './App.css';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';

function App() {
  return (
    <Router>
      <Characters path="/" />
      <CharacterDetails path="/character/:charId" />
    </Router>
  );
}

export default App;
