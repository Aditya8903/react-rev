import React from 'react'

const Col = ({cellData}) => {
    console.log("CELL DATA IS :->",cellData);
  return (
    <td>
      {cellData}
    </td>
  )
}

export default Col
