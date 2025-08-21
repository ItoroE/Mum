import {Outlet, Link} from 'react-router-dom'
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

export default Layout;