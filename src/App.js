import "./App.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Home } from "./components/Home/Home";
import { Sort } from "./components/Sort/Sort";

function App() {
  return (
    <div className="App">
      <h1 className="app_name">My Forum</h1>
      <div className="content_container">
        <Sidebar />
        <Home />
        <Sort />
      </div>
    </div>
  );
}

export default App;
