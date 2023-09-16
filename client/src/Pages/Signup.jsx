function Signup() {


    return (
        <div className='flex justify-center p-2'>
            <div className="flex flex-col max-w-md">
                <div className="outline outline-1 px-2">
                    <h1 className='font-semibold text-lg py-4'>Signup Tab</h1>
                </div>
                <div className="outline outline-1 p-2">
                    <form onClick={(ev) => (ev.preventDefault())} className='flex flex-col gap-4 '>
                        <input placeholder='Fullname' color='secondary' required />
                        <input type="phone" placeholder='Phone no.' />
                        <input type="email" placeholder='Email' color='secondary' required />
                        <input type="Password" placeholder='Password' color='secondary' required />
                        <button>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup;