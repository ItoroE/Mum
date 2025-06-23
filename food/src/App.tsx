import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './pages/Layout'

function App() {
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
    </>
  )
}

export default App
