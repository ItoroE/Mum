import './App.css'
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'
import Gallery from './pages/Gallery'

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
    .then((res) => res.json())
    .then((data) => setMessage(data.message))
  })

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}></Route>
          <Route path="/menu"></Route>
          <Route path="/about"></Route>
          <Route path="/contact"></Route>
          <Route path="/checkout"></Route>
        </Routes>
      </BrowserRouter>
      <Gallery />
      <h1 style={{color:"red"}}>{message}</h1>
    </>
  )
}

export default App
