import React, { useState } from 'react'; // Asegúrate de importar useState desde React
import '../styles/Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensaje enviado:', { nombre, email, mensaje });
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="contacto-container">
      <h2>Contacto</h2>
      <p>Si tienes alguna pregunta o necesitas asistencia, no dudes en ponerte en contacto con nosotros a través del siguiente formulario.</p>
      <form onSubmit={handleSubmit} className="contacto-form">
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Tu nombre"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Tu email"
          required
        />
        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Tu mensaje"
          required
        ></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
    </div>
  );
}

export default Contacto;
