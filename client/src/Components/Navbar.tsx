import './Navbar.css'
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className='links flex-row-reverse'>
        <Link className='hover:text-blue-500' to='/signup'>Signup</Link>
        <Link className='hover:text-blue-500' to='./login'>Login</Link>
    </div>
  )
}

export default Navbar;