import React, { useEffect, useState } from 'react'
import Form from './Form';
// import Listdata from './Listdata';
import Table from './Table';

const App = () => {
  const API_URL = 'https://jsonplaceholder.typicode.com'
  // 'https://jsonplaceholder.typicode.com/reqType'
  const[reqType , setReqType] = useState('users');
  const[items,setItems] = useState([])

  useEffect(()=>{
    const fetchdata = async()=>{
      try {
        const response = await fetch(`${API_URL}/${reqType}`)
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }

    fetchdata();
  },[reqType])
  return (
    <div>
      <Form 
      reqType={reqType} setReqType={setReqType}/>
      {/* display data of api */}
      {/* <Listdata  items={items} /> */}
      <Table items = {items}/>
    </div>
  )
}

export default App
