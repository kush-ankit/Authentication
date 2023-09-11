import { Button, Input } from "@mui/material"

function Signup() {

  function handleEvent() {

  }

  return (
    <div className='flex justify-center p-2'>
      <div className="flex flex-col max-w-md">
        <div className="outline outline-1">
          <h1 className='font-semibold text-lg py-4'>Signup Tab</h1>
        </div>
        <div className="outline outline-1 p-2">
          <form onClick={(ev) => (ev.preventDefault(), handleEvent())} className='flex flex-col gap-4 '>
            <Input placeholder='Fullname' color='secondary' required sx={{
              color: '#ffffff',
            }} />
            <Input type="phone" placeholder='Phone no.' sx={{
              color: '#ffffff',
            }} />
            <Input type="email" placeholder='Email' color='secondary' required sx={{
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

export default Signup;