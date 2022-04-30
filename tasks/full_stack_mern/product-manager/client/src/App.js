import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Main from './views/Main';
import ProductDetail from "./views/product/ProductDetail";
import ProductForm from "./components/product/ProductForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/edit/:id" element={<ProductForm petition={"put"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
