import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Contenedor from './components/ejercicio1/contenedor'
import Interprete from './components/ejercicio2/Interprete'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Contenedor>
        <h1>F.C.B</h1>
        <p>SEMPRE</p>
      </Contenedor> */}
      <Interprete nombre="Messi" foto="https://upload.wikimedia.org/wikipedia/commons/6/68/Leo_Messi_%28cropped%29.jpg">
        <p>EL MEJOR DEL MUNDO</p>
      </Interprete>

    </>
  )
}

export default App
