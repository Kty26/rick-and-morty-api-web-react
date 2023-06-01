import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'
import bg_header from "./assets/img/bg_header.png"

function App() {

  return (
    <div className="App">
      <header className="AtachmentImage">
        <img width="100%" src={bg_header} alt="" />
      </header>
      <Main />
 
    <div  className='FooterApp'>
    <footer> 
      
      <h4>By Kattia Contreras | G-25 Academlo</h4>
      
      </footer>
    </div>
     
    </div>
    
  )
}

export default App
