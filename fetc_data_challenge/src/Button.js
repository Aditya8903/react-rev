import React from 'react'

const Button = ({btnText , reqType , setReqType}) => {
  return (
    <button className={btnText===reqType ? 'selected' : null}
    type='button' onClick={()=>setReqType(btnText)}>
      {btnText}
    </button>
  )
}

export default Button
