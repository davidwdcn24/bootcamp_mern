import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import NumberWord from "./components/number-word/NumberWord";
import Word from "./components/word/Word";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:text/:color/:background" element={ <Word />}/>
          <Route path="/:text" element={ <NumberWord />}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
