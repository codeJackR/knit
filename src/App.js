import "./App.css";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="explore" element={<Explore />} />
          <Route path=":username" element={<UserProfile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
