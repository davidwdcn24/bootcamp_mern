import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/home/Home';
import Person from './components/person/Person';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={ <Person />}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
