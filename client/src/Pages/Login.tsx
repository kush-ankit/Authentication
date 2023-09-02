import Input from '@mui/material/Input';
import { Button } from '@mui/material';


function Login() {
  return (
    <div className='flex flex-col gap-2'>
      <div>
        <h1 className='font-semibold text-lg py-4'>Login Tab</h1>
      </div>
      div
      <div className='flex flex-col gap-2'>
        <Input placeholder='Username' color='secondary' required />
        <Input placeholder='Password' />
      </div>
      <div className='py-2'>
        <Button variant="outlined">submit</Button>
      </div>
    </div>
  )
}

export default Login;