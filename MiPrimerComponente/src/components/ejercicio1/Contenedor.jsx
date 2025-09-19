import React from 'react';
import './Contenedor.css';

const Contenedor = ({children}) => {
  return (
    <div className='contenedor_alerta'>
      {children}
    </div>
  )
}

export default Contenedor;
