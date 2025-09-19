import React from 'react';
import './Interprete.css';

const Interprete = ({nombre,foto,children}) => {
  return (
    <div className='interprete_alerta'>
            <img src={foto} alt={`Foto de ${nombre}`} className='foto'></img>
        <div className='texto'>
            <h2>{nombre}</h2>
            <p>{children}</p>
        </div>

    </div>
  )
}

export default Interprete;
