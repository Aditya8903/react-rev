import React from 'react'
import Row from './Row'

const Table = ({items}) => {
    console.log("LOGGED ITEMS IS ->",items);
  return (
    <div className='tableContainer'>
      <table>
        <tbody>
            {items.map((item)=>{
                console.log(item);
                return (<Row key={item.id} item = {item}/>)
            }
            )}
        </tbody>
      </table>
    </div>
  )
}

export default Table
