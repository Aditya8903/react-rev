import { useState } from "react";
import ColorBox from "./ColorBox";
import Header from "./Header";
import ColorInput from "./ColorInput";

function App() {
  const[name,setName] = useState("")
  const[hexname,setHexName] = useState("")
  const[isDark , setDark] = useState('');
  
  return (
    <div className="App">
      <Header/>  
      <ColorBox name={name} hexname = {hexname} isDark={isDark}/> 
      <ColorInput colorName={name} setColorName={setName}
      hexname = {hexname} setHexName = {setHexName} 
      isDark={isDark} setDark = {setDark}/>
    </div>
  );
}

export default App;
