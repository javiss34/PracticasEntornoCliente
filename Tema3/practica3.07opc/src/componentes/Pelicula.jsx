import React from 'react';

const Pelicula = (props) => {
    const {titulo,cartela,resumen,id} = props.datos;
  return (
    <div>
      <p>{id}</p>
      <p>{titulo}</p>
      <img src={cartela} alt={titulo}></img>
      <p>{resumen}</p>
    </div>
  )
}

export default Pelicula;
