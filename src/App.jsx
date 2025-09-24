import { useState } from 'react'
import './App.css'
import Color from './components/color.jsx'

function App() {
  const [color, setColor] = useState("Apagado")

  return (
    <>
      <h1>Semáforo :)</h1>
      <Color color={color} texto="" /> 

      <input type="button" className='btn btn-danger' onClick={() => setColor("Rojo")} value="Rojo"/>
      <input type="button" className='btn btn-warning' onClick={() => setColor("Amarillo")} value="Amarillo"/>
      <input type="button" className='btn btn-success' onClick={() => setColor("Verde")} value="Verde"/>
      
      <input type="button" className='btn btn-dark' onClick={() => setColor("Apagado")} value="Apagar"/>
    </>
  )
}

export default App
