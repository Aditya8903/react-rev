import React from 'react'
import Button from './Button'

const Form = ({reqType , setReqType}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Button btnText = 'users' reqType={reqType} setReqType={setReqType}/>
      <Button btnText = 'posts' reqType={reqType} setReqType={setReqType}/>
      <Button btnText = 'todos' reqType={reqType} setReqType={setReqType}/>
    </form>
  )
}

export default Form
