import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contenedor from './components/ejercicio1/Contenedor.jsx'
import Interprete from './components/ejercicio2/Interprete.jsx'
import Pelicula from './components/ejercicio3/Pelicula.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contenedor>
        <h1>Ejercicio1</h1>
        <p>Mi primer componente</p>
      </Contenedor>

      <Interprete nombre="Pablo Chiapella" foto="https://album.mediaset.es/cimg/1000001/2017/02/14/p1.jpg">
        <p>Pablo Chiapella Cámara (Albacete, 1 de diciembre de 1976),​​ apodado Chape, es un actor y presentador español con raíces italianas. ​ Es conocido principalmente por el papel de Amador Rivas en la serie de televisión La que se avecina.</p>
      </Interprete>

      <Pelicula titulo='Cars' direccion='John Laster' cartela='https://i.pinimg.com/736x/3c/aa/11/3caa115554f44216154adaed787e1610.jpg' elenco='Rayo McQueen | Doc Hudson | Sally'>
      <p>El aspirante a campeón de carreras Rayo McQueen parece que está a punto de conseguir el éxito. Su actitud arrogante se desvanece cuando llega a una pequeña comunidad olvidada que le enseña las cosas importantes de la vida que había olvidado.</p>

      </Pelicula>



    </>
  )
}

export default App;
