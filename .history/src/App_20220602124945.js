import { HashRouter,Routes,Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
          <Routes>
             <Route path="/" element={}/>
               <Route element={}>
                  <Route path='/pokedex' element={} />
                  <Route path='/pokedex/:id' element={}/>
               </Route>
          </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
