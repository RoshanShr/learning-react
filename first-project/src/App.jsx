import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './Product'

function App() {

  return (
    <div>
      <h1>App component</h1>
      <Product name="Samsung" price="2000" specs={{ram:"2gb", screen:"19cm"}}/>
      <Product name="Iphone" price="5000" specs={{ram:"4gb", screen:"24cm"}}/>
      <Product name="OnePlus" price="3000" specs={{ram:"1gb", screen:"20cm"}}/>
    </div>

  )
}

export default App
