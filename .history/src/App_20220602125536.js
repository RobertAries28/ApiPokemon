import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Pokedex from './Components/Pokedex';
import PokedexId from './Components/PokedexId';
import PokemonInput from './Components/PokemonInput';
import Protected from './Components/Protected';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
             <Route path="/" element={<PokemonInput/>}/>
               <Route element={<Protected/>}>
                  <Route path='/pokedex' element={<Pokedex/>} />
                  <Route path='/pokedex/:id' element={<PokedexId/>}/>
               </Route>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
