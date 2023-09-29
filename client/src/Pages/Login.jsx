import axios from 'axios';
import { useState } from 'react';
import { useUserStore } from '../Global/User-state';
import './Login.css'
import {  useNavigate } from 'react-router-dom';



function Login() {

    const [setUserDetails] = useUserStore((state) => [state.setUserDetails]);
    const navigate = useNavigate();


    const [user, setUser] = useState({
        phone: "",
        password: ""
    });


    async function handleClick() {
        await axios.post('http://192.168.1.35:3001/login', user).then((res) => {
            if (res.status === 200) {
                navigate('/')
                setUserDetails(
                    res.data.fullName,
                    res.data.phone,
                    res.data.email,
                    res.data.password,
                )
            }else{
                document.getElementById('warning').innerHTML = '*wrong phone no. and password'
            }
        })

    }

    function handleChange(fieldName, value) {
        let dataset = {};
        dataset[fieldName] = value;
        const userData = { ...user, ...dataset }
        setUser(userData)
    }



    // return (
    //     <div className='flex justify-center p-2'>
    //         <div className="flex flex-col max-w-md">
    //             <div className="outline outline-1 px-2">
    //                 <h1 className='font-semibold text-lg py-4'>Login Tab</h1>
    //             </div>
    //             <div className="outline outline-1 p-2">
    //                 <form onClick={(ev) => (ev.preventDefault())} className='flex flex-col gap-4 '>
    //                     <input type="phone" placeholder='Phone no.' value={user.phone} onChange={(ev) => handleChange('phone', ev.target.value)} />
    //                     <input type="Password" placeholder='Password' color='secondary' value={user.password} onChange={(ev) => handleChange('password', ev.target.value)} />
    //                     <Link onClick={handleClick} to='/' >submit</Link>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // )


    return (
        <div className='w-full'>
            <form className="form m-auto" onClick={(ev) => (ev.preventDefault())} >
                <div className="title">Login here...</div>
                <input name="email" className="input" type="phone" placeholder='Phone no.' value={user.phone} onChange={(ev) => handleChange('phone', ev.target.value)} />
                <input type="password" placeholder="Password" name="password" className="input" value={user.password} onChange={(ev) => handleChange('password', ev.target.value)} />
                <span id='warning' className='text-red-500'></span>
                <button className="button-confirm" onClick={handleClick} to='/'>Let`s go →</button>
            </form>
        </div>
    )
}

export default Login;
