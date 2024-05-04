import { useState } from 'react';
import bike from '../assets/bike1.jpg';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '..';
function Login() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    
    function handleEmailChange(event){
        event.preventDefault()
        const { value } = event.target
        setUserEmail(value)
    }
    function handlePasswordChange(event){
        event.preventDefault()

        const { value } = event.target
        setUserPassword(value)
    }

    function handleSubmit(event){
        event.preventDefault()
        signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then((cred) => {
            console.log(`signed in`)
            setUserEmail(' ')
            setUserPassword(' ')
        })
        .catch((err) => console.log(err.message))
    }

    return (
        <div className='md:w-screen md:h-screen bg-white md:flex md:flex-col md:items-center md:justify-center'>
            <div
                className='w-full h-screen flex flex-col align-middle justify-center md:flex-row md:h-5/6 md:w-9/12 md:rounded-3xl md:shadow-xl hover:md:shadow-forest_green-500 hover:md:shadow-2xl'
                style={{ backgroundImage: `url(${bike})`, backgroundSize: 'cover' }}
            >
                <div className='mx-5 mb-3 p-2 h-4/6 rounded-2xl bg-forest_green-200 opacity-80 flex flex-col flex-initial md:bg-white md:m-0 md:h-full md:opacity-100 md:items-center'>
                    <div className="flex flex-col mb-auto mt-5 md:w-4/6 md:grow">
                        <h1 className="text-lg font-bold text-center md:text-2xl md:text-wrap md:self-stretch  md:text-forest_green-100">REGISTER FOR AN ACCOUNT</h1>
                        <h3 className="font bold text-md text-center text-forest_green-700 my-2 md:text-[2.5rem]">Welcome!</h3>
                        <p className='text-lg text-white text-justify m-2 p-2 md:m-0 md:text-4xl md:text-center md:mt-10 md:h-full md:text-forest_green-200'>Glad to have you back, just a few steps...</p>
                    </div>
                    <form onSubmit={handleSubmit} className="flex flex-col justify-center  self-center w-4/6 h-2/6 md:self-center">
                        <input type='email' placeholder="email" value={userEmail} className="my-3 h-8 w-full rounded-lg pl-2 md:border-2 md:border-forest_green-400" onChange={handleEmailChange}></input>
                        <input type='password' placeholder="password" value={userPassword} className="my-3 h-8 w-full rounded-lg pl-2 md:border-2 md:border-forest_green-400" onChange={handlePasswordChange}></input>
                        <button className="p-2 my-3 mt-5 rounded-md bg-forest_green-400 w-32 self-center md:p-3 md:my-2 text-white text-sm md:rounded-2xl md:justify-center" type='submit'>Login</button>
                    </form>
                </div>
                <p className="mx-5 mt-5 p-5 text-sm text-white bg-yellow-900 text-md opacity-90 rounded-lg md:w-2/3 md:m-0 md:self-center md:bg-forest_green-100 md:text-justify md:text-xl md:opacity-70">We will be shortly sending you a confirmation email. Please open the mail and click on the link to activate your account</p>
            </div>
        </div>
    );
}

export default Login;
