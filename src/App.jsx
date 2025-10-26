import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header.jsx'
import Carousel from './Component/Carousel/Carousel.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> 
      <Carousel />
      </>
  )
}

export default App
