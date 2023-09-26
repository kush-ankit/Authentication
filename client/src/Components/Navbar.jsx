import { useAppStore } from '../Global/App-state';
import { useUserStore } from '../Global/User-state';
import './Navbar.css'
import { Link } from "react-router-dom"


function Navbar() {

  const [setUserLogout] = useUserStore((state) => [state.setUserLogout]);

  const [isLoggedIn,currentUser] = useAppStore((state) => [state.isLoggedIn,state.currentUser]);

  return (
    <div className='links flex-row-reverse justify-between bg-red-400 rounded-xl p-2'>
      {
        !isLoggedIn ? (<div>
          <Link className='hover:bg-red-300 p-1 rounded-md' to='/signup'>Signup</Link>
          <Link className='hover:bg-red-300 p-1 rounded-md' to='./login'>Login</Link>
        </div>):(<button onClick={()=>{setUserLogout()}}>Logout</button>)
      }
      <div>
        {
          currentUser
        }
      </div>
    </div>
  )
}

export default Navbar;