import axios from 'axios';
import { useState } from 'react';

function Login() {

    const [user, setUser] = useState({
        phone: "",
        password: ""
    });
    

    function handleClick() {
        axios.post('http://localhost:3001/login',user).then((res) => {
            console.log(res.data);
        })
    }

    function handleChange(fieldName, value){
        let dataset={};
        dataset[fieldName]=value;
        const userData = {...user, ...dataset}
        setUser(userData)
    }



    return (
        <div className='flex justify-center p-2'>
            <div className="flex flex-col max-w-md">
                <div className="outline outline-1 px-2">
                    <h1 className='font-semibold text-lg py-4'>Login Tab</h1>
                </div>
                <div className="outline outline-1 p-2">
                    <form onClick={(ev) => (ev.preventDefault())} className='flex flex-col gap-4 '>
                        <input type="phone" placeholder='Phone no.' value={user.phone} onChange={(ev) => handleChange('phone', ev.target.value)} />
                        <input type="Password" placeholder='Password' color='secondary' value={user.password} onChange={(ev) => handleChange('password', ev.target.value)} />
                        <button onClick={handleClick}>submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;