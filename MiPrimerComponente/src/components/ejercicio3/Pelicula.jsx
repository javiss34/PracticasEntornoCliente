import React from 'react';
import './Pelicula.css';

const Pelicula = ({titulo,direccion,cartela,children,elenco}) => {
  return (
    <div className='pelicula_alerta'>
      <h1 className='titulo'>{titulo}</h1>
      <h2 className='direccion'>{direccion}</h2>
      <img src={cartela} alt={`Foto de ${titulo}`}></img>
      <p>{children}</p>
      
    </div>
  )
}

export default Pelicula;
