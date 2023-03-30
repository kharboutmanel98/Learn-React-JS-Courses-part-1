import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import ShowProduct from "./components/ShowProduct";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id/:slug" element={<ShowProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
