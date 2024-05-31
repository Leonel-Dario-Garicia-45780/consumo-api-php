// src/componentes/TablaDatos.jsx
import React, { useEffect, useState } from 'react';
import BotonEditar from './Boton_editar';
import BotonEliminar from './Boton_eliminar';

const TablaDatos = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch('http://localhost/php-con-david-/api/api.php') // Reemplaza con la URL de tu API
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setDatos(datos);
        setCargando(false);
      })
      .catch((error) => {
        console.error('Error al obtener los datos:', error);
        setCargando(false);
      });
  }, []);

  if (cargando) {
    return <div>Cargando...</div>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripcion</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {datos.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nombre}</td>
            <td>{item.descripcion}</td>
            <td className='display flex'>
              <BotonEditar
                id={item.id}
                nombreInicial={item.nombre}
                descripcionInicial={item.descripcion}
                onEditar={(productoEditado) => console.log('Editar:', productoEditado)}
              />
              <BotonEliminar
                id={item.id}
                onEliminar={(id) => console.log('Eliminar:', id)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TablaDatos;
