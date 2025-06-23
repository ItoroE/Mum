import './App.css'
import {Outlet, Link, BrowserRouter, Routes, Route} from 'react-router-dom'

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

const Layout = () => {
  return (
    <>
      <nav>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/checkout">Check Out</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default App
