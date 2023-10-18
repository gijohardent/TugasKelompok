import { useState } from 'react'
import Header from './Components/Header/'
import Home from './Components/Home/'
import Footer from './Components/Footer/'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}
