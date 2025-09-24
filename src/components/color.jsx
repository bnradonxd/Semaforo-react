import React from 'react'
import { useState } from 'react'

export default function Color(props) {
  const {texto} = props

  const colores= {
    Rojo: '#ff0000',
    Amarillo: '#ffff00ff',
    Verde: '#03f703ff', 
    off: '#191b1c'
  }
  
  const colorOn = colores[props.color]


  return (
    <>
      <div className={`circulo1 ${ props.color === "Rojo" ? "activoR" : ""}`} style={{ background: props.color === "Rojo" ? colores.Rojo : colores.off  }}></div>
   
      <div className={`circulo2 ${ props.color === "Amarillo" ? "activoA" : ""}`} style={{ background: props.color === "Amarillo" ? colores.Amarillo : colores.off }}></div>
   
      <div className={`circulo3 ${ props.color === "Verde" ? "activoV" : ""}`}style={{ background: props.color === "Verde" ? colores.Verde : colores.off }}></div>

      <h3 style={{color: colorOn}}>{props.color}</h3>
    </>
  )
}
