import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import AuthorCreate from "./views/authors/AuthorCreate";
import AuthorUpdate from "./views/authors/AuthorUpdate";
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<AuthorCreate />} />
          <Route path="/edit/:id" element={<AuthorUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
