import { Routes, Route} from "react-router-dom";
import API from "./routes/API";
import TicTacToe from "./routes/TicTacToe";
import Home from "./routes/Home";
import Navbar from './Navbar';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/API" element={<API />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
      </Routes>
    </>
  );
}
export default App;