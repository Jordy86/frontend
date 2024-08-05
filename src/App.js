import './App.css';
import Film from './pages/films/Film';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <div className='topnav'>
          <a href='#'>Accueil</a>
          <a href='#'>Series</a>
        </div>
        <Film />
      </div>
    </div>
  );
}

export default App;
