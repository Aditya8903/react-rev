import colorNames from 'colornames';
import React from 'react'
const ColorInput = ({colorName,setColorName  , setHexName , isDark , setDark}) => {
  return (
    <form action="" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="colorInput"></label>
        <input autoFocus type="text" id='colorInput' value={colorName} placeholder='Enter your color'
        onChange={(event)=> {setColorName(event.target.value); 
        setHexName(colorNames(event.target.value))}}/>

        <button
        onClick={()=>setDark(!isDark)}>Toggle text color</button>
    </form>
  )
}

export default ColorInput
