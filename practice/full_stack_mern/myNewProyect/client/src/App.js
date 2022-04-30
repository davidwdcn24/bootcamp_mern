import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Detail from "./views/Detail";
import Main from './views/Main';
import Update from "./views/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/people/" element={ <Main /> }/>
        <Route path="people/:id" element={ <Detail /> } />
        <Route path="people/:id/edit" element={ <Update /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
