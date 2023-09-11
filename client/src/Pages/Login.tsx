import Input from '@mui/material/Input';
import { Button } from '@mui/material';


function Login() {
  return (
    <div className='flex justify-center p-2'>
      <div className="flex flex-col max-w-md">
        <div className="outline outline-1">
          <h1 className='font-semibold text-lg py-4'>Login Tab</h1>
        </div>
        <div className="outline outline-1 p-2">
          <form onClick={(ev) => (ev.preventDefault())} className='flex flex-col gap-4 '>
            <Input type="phone" placeholder='Phone no.' sx={{
              color: '#ffffff',
            }} />
            <Input type="Password" placeholder='Password' color='secondary' required sx={{
              color: '#ffffff',
            }} />
            <Button variant="outlined">submit</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login;