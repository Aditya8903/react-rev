import React from 'react'
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa'; // Corrected import statement
const Header = ({title,width}) => {
  return (
    <header className='Header'>
        <h1>{title}</h1>
        {
          width<768 ? <FaMobileAlt/>  : width<900? <FaTabletAlt />: <FaLaptop/>
        }
    </header>
  )
}

export default Header
