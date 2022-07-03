import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components";
import { Home, Menu, Keranjang, About, Contact, NoPage } from './pages'
// import { Route, NavLink, HashRouter } from "react-router-dom"
// import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="keranjang" element={<Keranjang />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
