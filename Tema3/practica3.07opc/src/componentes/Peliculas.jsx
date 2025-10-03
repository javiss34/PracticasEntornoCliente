import React from 'react';
import Pelicula from './pelicula.jsx';

const Peliculas = () => {
    const peliculas = [
        {
            id: 1,
            titulo: "Hola",
            cartela: "https://thumbs.dreamstime.com/b/lionel-messi-22716478.jpg",
            resumen: "Muy chula"
        },
        {
            id: 2,
            titulo: "Adios",
            cartela: "https://thumbs.dreamstime.com/b/lionel-messi-22716478.jpg",
            resumen: "ssssssssss"
        },
        {
            id:3,
            titulo: "Hello",
            cartela: "https://thumbs.dreamstime.com/b/lionel-messi-22716478.jpg",
            resumen: "jjjjjjjjjjjj"
        }
    ];
  return (
    <div>
        <h1>Listado de películas</h1>
        <div className='todismo'>
            {peliculas.map((v,i,a) => {
                return (
                    <Pelicula
                        key={v.id}
                        datos={v}
                    />
                )
            })}
        </div>
      
    </div>
  )
}

export default Peliculas;
