import '../styles/Ganadores.css';

function Ganadores() {
  const ganadores = [
    { id: 1, nombre: 'Juan Pérez', producto: 'Smartphone de última generación' },
    { id: 2, nombre: 'Ana García', producto: 'Laptop de alta gama' },
    { id: 3, nombre: 'Carlos Ramírez', producto: 'Consola de videojuegos' },
    { id: 4, nombre: 'María López', producto: 'Viaje a Cancún para dos personas' },
    { id: 5, nombre: 'Pedro Martínez', producto: 'Reloj inteligente' },
  ];

  return (
    <div className="ganadores-container">
      <h2>Nuestros Ganadores</h2>
      <p>Estos son algunos de los afortunados ganadores de nuestros sorteos más recientes:</p>
      <div className="ganadores-grid">
        {ganadores.map(ganador => (
          <div className="ganador-card" key={ganador.id}>
            <h3>{ganador.nombre}</h3>
            <p>Premio Ganado: <strong>{ganador.producto}</strong></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Ganadores;
