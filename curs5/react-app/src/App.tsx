//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Salut from './components/Salut'
import Masina from './cpmponents/Masina'

function App() {
  const carInfo = { name: "Ford", model: "Mustang" };
  

  return (
    <>
     <Salut nume={'Ion'} curs={123}/>
     <Salut nume='Dan'/>    
     <Salut nume='Ana'/>
    </>
  )
}

export default App
