import axios from "axios";
import { useState } from "react";
import { useUserStore } from "../Global/User-state";
import { useNavigate } from "react-router-dom";


function Signup() {

    const [setUserDetails] = useUserStore((state) => [state.setUserDetails]);
    const navigate = useNavigate();


    const [user, setUser] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
    });


    function handleClick() {
        axios.post('http://192.168.1.35:3001/signup', user).then((res) => {
            if (res.status === 200) {
                navigate('/')
                setUserDetails(
                    res.data.fullName,
                    res.data.phone,
                    res.data.email,
                    res.data.password,
                )
            }
        })
    }

    function handleChange(fieldName, value) {
        let dataset = {};
        dataset[fieldName] = value;
        const userData = { ...user, ...dataset }
        setUser(userData)
    }

    return (
        //     <div className='flex justify-center p-2'>
        //         <div className="flex flex-col max-w-md">
        //             <div className="outline outline-1 px-2">
        //                 <h1 className='font-semibold text-lg py-4'>Signup Tab</h1>
        //             </div>
        //             <div className="outline outline-1 p-2">
        //                 <form onClick={(ev) => (ev.preventDefault())} className='flex flex-col gap-4 '>
        //                     <input placeholder='Fullname' color='secondary' required value={user.fullName} onChange={(ev) => handleChange('fullName', ev.target.value)} />
        //                     <input type="phone" placeholder='Phone no.' value={user.phone} onChange={(ev) => handleChange('phone', ev.target.value)} />
        //                     <input type="email" placeholder='Email' color='secondary' required value={user.email} onChange={(ev) => handleChange('email', ev.target.value)} />
        //                     <input type="Password" placeholder='Password' color='secondary' required value={user.password} onChange={(ev) => handleChange('password', ev.target.value)} />
        //                     <Link onClick={handleClick} to='/' >submit</Link>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>

        <div className='w-full'>
            <form className="form m-auto" onClick={(ev) => (ev.preventDefault())} >
                <div className="title">Register here...</div>
                <input type="fullName" placeholder="FullName" name="fullName" className="input" value={user.fullName} onChange={(ev) => handleChange('fullName', ev.target.value)} />
                <input name="email" className="input" type="email" placeholder='Email' value={user.email} onChange={(ev) => handleChange('email', ev.target.value)} />
                <input type="phone" placeholder="Phone" name="phone" className="input" value={user.phone} onChange={(ev) => handleChange('phone', ev.target.value)} />
                <input type="password" placeholder="Password" name="password" className="input" value={user.password} onChange={(ev) => handleChange('password', ev.target.value)} />
                <button className="button-confirm" onClick={handleClick}>Let`s go →</button>
            </form>
        </div>
    )


}

export default Signup;