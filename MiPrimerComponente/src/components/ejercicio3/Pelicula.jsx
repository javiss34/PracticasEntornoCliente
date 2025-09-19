import React from 'react';
import './Pelicula.css';

const Pelicula = (props) => {
  return (
    <div className='pelicula_alerta'>
      <div className='titulo_direccion'>
        <h1 className='titulo'>{props.titulo}</h1>
        <h2 className='direccion'>{props.direccion}</h2>
      </div>
      <img src={props.cartela} alt={`Foto de ${props.titulo}`} className='cartela'></img>
      <p className='resumen'>{props.children}</p>
    </div>
  )
}

export default Pelicula;
