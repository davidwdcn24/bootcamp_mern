import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Detail from "./components/Detail";
import Main from './views/Main';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/people/" element={ <Main /> }/>
        <Route path="people/:id" element={ <Detail /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
