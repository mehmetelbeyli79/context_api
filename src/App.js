import "./App.css";
import "./lib/fontawesome/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { GlobalProvider } from "./context/GlobalState";
import Watchlist from "./components/Watchlist";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />}></Route>
            <Route path="/watched" element={<Watched />}></Route>
            <Route path="/add" element={<Add />}></Route>
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
