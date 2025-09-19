import React from 'react';
import './Pelicula.css';

const Pelicula = ({titulo,direccion,cartela,children}) => {
  return (
    <div className='pelicula_alerta'>
      <div className='titulo_direccion'>
        <h1 className='titulo'>{titulo}</h1>
        <h2 className='direccion'>{direccion}</h2>
      </div>
      <img src={cartela} alt={`Foto de ${titulo}`} className='cartela'></img>
      <p className='resumen'>{children}</p>
    </div>
  )
}

export default Pelicula;
