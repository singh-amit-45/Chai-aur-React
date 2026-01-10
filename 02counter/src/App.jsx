import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [counter,setCounter]= useState(15)

  //let counter (15)
 
  const addValue =()=>{
    //counter = counter +1
    setCounter(PrevCounter =>  PrevCounter + 1)
    setCounter(PrevCounter =>  PrevCounter + 1)
    setCounter(PrevCounter =>   PrevCounter + 1)
    setCounter(PrevCounter =>   PrevCounter  + 1)
  }

  const removeValue =() =>{
    setCounter(counter  - 1)
    
  }

  return (
    <>
    <h1> chai aur react</h1>
    <h2> counter value </h2>
    
    <button onClick={addValue}
    >Add value{counter} </button>
         <br/>
    <button onClick={removeValue}
    >Remove value{counter} </button>
    </>
  )
}

export default App
