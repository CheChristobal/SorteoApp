import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Bienvenidos a la Página de Sorteos</h1>
        <p>Compra tus números y participa para ganar increíbles premios.</p>
      </header>

      <section className="trending-products">
        <h2>Productos en Tendencia</h2>
        <div className="product-grid">
          <div className="product-card">
            <h3>Producto 1</h3>
            <p>Descripción del producto 1</p>
            <Link to="/productos" className="btn">Ver Más</Link>
          </div>
          <div className="product-card">
            <h3>Producto 2</h3>
            <p>Descripción del producto 2</p>
            <Link to="/productos" className="btn">Ver Más</Link>
          </div>
          <div className="product-card">
            <h3>Producto 3</h3>
            <p>Descripción del producto 3</p>
            <Link to="/productos" className="btn">Ver Más</Link>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Categorías</h2>
        <div className="category-grid">
          <div className="category-card">
            <h3>Electrónica</h3>
            <Link to="/productos" className="btn">Explorar</Link>
          </div>
          <div className="category-card">
            <h3>Hogar</h3>
            <Link to="/productos" className="btn">Explorar</Link>
          </div>
          <div className="category-card">
            <h3>Moda</h3>
            <Link to="/productos" className="btn">Explorar</Link>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>Sobre Nosotros</h2>
        <p>
          Somos una plataforma dedicada a ofrecer los mejores sorteos para nuestros usuarios.
          Compra tus números para tener la oportunidad de ganar grandes premios.
        </p>
        <Link to="/quienes-somos" className="btn">Conoce Más</Link>
      </section>

      <section className="winners">
        <h2>Últimos Ganadores</h2>
        <ul className="winner-list">
          <li>Juan Pérez - Producto 1</li>
          <li>María García - Producto 2</li>
          <li>Carlos López - Producto 3</li>
        </ul>
        <Link to="/ganadores" className="btn">Ver Todos los Ganadores</Link>
      </section>
    </div>
  );
}

export default Home;
