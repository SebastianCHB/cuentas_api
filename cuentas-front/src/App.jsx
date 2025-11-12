import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ItemComponent from './components/ItemComponent'
import Button from 'react-bootstrap/Button';

function App() {
var x = 0;
//React Hooks
let [contador, setContador] = useState(10)
let [arr, setArr]= useState([])
let clickbtn=()=>{
  
  console.log(contador)
  setContador(contador+1)
  let x=[...arr,contador]
  setArr(x)
}
  return (
    <>
      <h1>Hola mundo</h1>
      <h2>Contador</h2>
      <p>{contador}</p>
      <button onClick={clickbtn}>Aumentar</button>
      {arr.map((item)=>( <ItemComponent key={item}/>))}
      <Button variant="light">Light</Button>
    </>
  )
}

export default App
