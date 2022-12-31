import './App.css';
import Explore from './pages/Explore';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
      <div className="App">
        <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/explore" element={<Explore />} /> 
        </Routes>
        </header>
      </div>
  );
}

export default App;
