import { useAppStore } from '../Global/App-state';
import { useUserStore } from '../Global/User-state';
import './Navbar.css'
import { Link } from "react-router-dom"


function Navbar() {

  const [setUserLogout] = useUserStore((state) => [state.setUserLogout]);

  const [isLoggedIn, currentUser] = useAppStore((state) => [state.isLoggedIn, state.currentUser]);

  return (
    <div className='form-a links flex flex-row justify-between rounded-xl p-2'>
      <div className='text-black'>
        {
          currentUser
        }
      </div>
      {
        !isLoggedIn ? (<div>
          <Link className='button-confirm px-4' to='/signup'>Signup</Link>
          <Link className='button-confirm px-4 mx-2' to='./login'>Login</Link>
        </div>) : (<div><Link onClick={() => { setUserLogout() }} className='button-confirm px-4' to='/'>Logout</Link></div>)
      }
    </div>
  )
}

export default Navbar;