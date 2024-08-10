import { useState } from 'react';
import '../styles/Productos.css';

const productosIniciales = [
  {
    id: 1,
    nombre: 'Producto 1',
    descripcion: 'Increíble premio sorpresa que te sorprenderá.',
    precio: 1000,
    numerosDisponibles: 10,
    numerosVendidos: [],
    imagen: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    nombre: 'Producto 2',
    descripcion: 'Un segundo premio que no querrás perderte.',
    precio: 1000,
    numerosDisponibles: 15,
    numerosVendidos: [],
    imagen: 'https://via.placeholder.com/150',
  }
];

function Productos() {
  const [productos, setProductos] = useState(productosIniciales);

  const comprarNumero = (productoId) => {
    setProductos(prevProductos => prevProductos.map(producto => {
      if (producto.id === productoId && producto.numerosDisponibles > 0) {
        producto.numerosVendidos.push(Math.floor(Math.random() * 100) + 1); // Genera un número aleatorio
        producto.numerosDisponibles--;
      }
      return producto;
    }));
  };

  return (
    <div className="productos-container">
      <h2>Productos Disponibles</h2>
      <p>Elige tu número y participa en el sorteo de estos increíbles productos.</p>
      <div className="productos-grid">
        {productos.map(producto => (
          <div className="producto-card" key={producto.id}>
            <img src={producto.imagen} alt={producto.nombre} className="producto-imagen" />
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p>Precio por número: <strong>${producto.precio}</strong></p>
            <p>Números disponibles: <strong>{producto.numerosDisponibles}</strong></p>
            <button onClick={() => comprarNumero(producto.id)} disabled={producto.numerosDisponibles === 0}>
              {producto.numerosDisponibles > 0 ? 'Comprar Número' : 'Agotado'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productos;
