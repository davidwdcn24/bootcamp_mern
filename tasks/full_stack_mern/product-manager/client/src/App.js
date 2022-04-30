import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './views/Main';
import ProductDetail from "./views/product/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
