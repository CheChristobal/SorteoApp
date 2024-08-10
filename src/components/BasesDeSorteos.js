import '../styles/BasesDeSorteos.css';

function BasesDeSorteos() {
  return (
    <div className="bases-container">
      <h2>Bases de los Sorteos</h2>
      <div className="bases-content">
        <p>
          Las siguientes bases y condiciones aplican para todos los sorteos organizados por nuestra plataforma. Al participar en nuestros sorteos, los usuarios aceptan íntegramente las condiciones aquí expuestas.
        </p>

        <h3>Requisitos de Participación</h3>
        <ul>
          <li>Ser mayor de 18 años.</li>
          <li>Residir en el país en el que se realiza el sorteo.</li>
          <li>Registrarse en la plataforma con datos verídicos.</li>
        </ul>

        <h3>Proceso del Sorteo</h3>
        <p>
          Los sorteos se realizarán una vez que todos los números asignados a un producto hayan sido comprados. Se utilizará un sistema de selección aleatoria para determinar el ganador.
        </p>

        <h3>Entrega de Premios</h3>
        <p>
          Los ganadores serán notificados a través del correo electrónico registrado en su cuenta. Los premios serán entregados dentro de los 30 días hábiles posteriores a la realización del sorteo.
        </p>

        <h3>Términos Adicionales</h3>
        <ul>
          <li>No se permitirá la participación de empleados de la empresa organizadora ni de sus familiares directos.</li>
          <li>Los premios no son transferibles ni canjeables por dinero en efectivo.</li>
          <li>La empresa organizadora se reserva el derecho de modificar las bases del sorteo en cualquier momento.</li>
        </ul>
      </div>
    </div>
  );
}

export default BasesDeSorteos;
