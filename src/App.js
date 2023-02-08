import "./App.css";
import UserProfile from "./pages/UserProfile"
import { Routes, Route } from "react-router-dom";
import PreSignIn from "./pages/PreSignIn";
import PostSignIn from "./pages/PostSignIn";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<PreSignIn />} />
          <Route path="signin" element={<PostSignIn />} />
          <Route path=":username" element={<UserProfile />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
