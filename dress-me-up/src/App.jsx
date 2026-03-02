import { useState } from 'react'
import './App.css'
import base from './assets/base.png'
import baseTop from './assets/tops/baseTop.png'
import baseBottom from './assets/bottoms/baseBottoms.png'

function App() {

  return (
    <>
      <div className="dress-up-preview">
        <img src={base}/>
        <img src={baseTop}/>
        <img src={baseBottom}/>
      </div>
    </>
  )
}

export default App
