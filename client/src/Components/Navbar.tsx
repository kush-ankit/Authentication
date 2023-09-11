import './Navbar.css'
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div className='links flex-row-reverse bg-red-400 rounded-xl p-2'>
        <Link className='hover:bg-red-300 p-1 rounded-md' to='/signup'>Signup</Link>
        <Link className='hover:bg-red-300 p-1 rounded-md' to='./login'>Login</Link>
    </div>
  )
}

export default Navbar;