import { useState } from 'react'
import TablaDatos from './componentes/Tabla'
import BotonAgregar from './componentes/Boton_agregar';

function App() {
  //! funcion que me dio chat para agregar productos
  const agregarProducto = (nuevoProducto) => {
    fetch('http://localhost/php-con-david-/api/api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(nuevoProducto),
    })
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log('Producto agregado:', data);
        // Puedes agregar aquí lógica adicional si lo necesitas, como volver a cargar los datos de la tabla
      })
      .catch((error) => {
        console.error('Error al agregar el producto:', error);
      });
  };


  return (
    <>
      <h1>consumo de api propia</h1>
      <TablaDatos/>
      <BotonAgregar onAgregar={agregarProducto} />
    </>
  )
}

export default App
