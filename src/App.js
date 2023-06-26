import { Route, Routes, useNavigate } from "react-router-dom";

import "./App.css";
import { Home } from "./components/Home/Home";
import { PostDetails } from "./pages/PostDetails/PostDetails";

function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
      <h1 className="app_name" onClick={() => navigate("/")}>My Forum</h1>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/:postId" element={<PostDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
