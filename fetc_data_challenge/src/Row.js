import React from 'react'
import Col from './Col'

const Row = ({item}) => {
  return (
    <tr>
      {Object.entries(item).map(([key,value])=>{
        console.log("ITEM IS -> ",value);
        return (
            <Col key={key} cellData={JSON.stringify(value)}/>
        )
      })}
    </tr>
  )
}

export default Row
