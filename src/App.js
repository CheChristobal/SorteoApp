import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Registro from './components/Registro';
import Login from './components/Login';
import Productos from './components/Productos';
import QuienesSomos from './components/QuienesSomos';
import Ganadores from './components/Ganadores';
import BasesDeSorteos from './components/BasesDeSorteos';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/ganadores" element={<Ganadores />} />
        <Route path="/bases-de-sorteos" element={<BasesDeSorteos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </Router>
  );
}

export default App;
