import { useState, useEffect } from 'react'
import bike from '../assets/bike1.jpg';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '..';

function SignUp() {
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')

    //Sign up user to the firestore backend
    function handleSubmit(event) {
        event.preventDefault()

        if (userEmail !== '' && userPassword !== '') {
            createUserWithEmailAndPassword(auth, userEmail, userPassword)
                .then((credential) => {
                    console.log(`Signing with, Email: ${userEmail} Password: ${userPassword}`)
                })
                .catch((error) => alert('Password Should be atleast six charaters'))
        }
    }

    //Get Form Fields
    function handleEmailChange(event) {
        event.preventDefault()
        const { value } = event.target;
        setUserEmail(value)
    }
    function handlePasswordChange(event) {
        event.preventDefault
        const { value } = event.target
        setUserPassword(value)
    }

    //sideEffects upon successful signup
    useEffect(() => {

    }, [])

    return (
        <div className='md:w-screen md:h-screen bg-white md:flex md:flex-col md:items-center md:justify-center'>
            <div
                className='w-full h-screen flex flex-col align-middle justify-center md:mt-5 md:flex-row md:h-5/6 md:w-2/3 md:rounded-3xl md:shadow-xl hover:md:shadow-forest_green-500 hover:md:shadow-2xl'
                style={{ backgroundImage: `url(${bike})`, backgroundSize: 'cover' }}
            >
                <div className='mx-5 mb-3 p-2 h-4/6 rounded-2xl bg-forest_green-200 opacity-80 flex flex-col flex-initial md:bg-white md:m-0 md:h-full md:w-7/12 md:opacity-100 md:items-center'>
                    <div className="flex flex-col mb-auto mt-5 md:w-4/6 md:grow">
                        <h1 className="text-lg font-bold text-center md:text-2xl md:text-wrap md:self-stretch  md:text-forest_green-100">REGISTER FOR AN ACCOUNT</h1>
                        <h3 className="font bold text-md text-center text-forest_green-700 my-2 md:text-[2.5rem]">Welcome!</h3>
                        <p className='text-lg text-white text-justify m-2 p-2 md:m-0 md:text-2xl md:h-full md:text-forest_green-200'>We just need to get a few details from you to get you signed in for the service.</p>
                    </div>
                    <form onSubmit={(event) => handleSubmit(event)} className="flex flex-col grow justify-start h-auto self-center md:justify-center md:w-4/6 md:h-2/6 md:self-center py-2" htmlFor='submit'>
                        <input type='email' placeholder="email" className="my-2 h-6 w-full rounded-lg pl-2 md:my-3 md:h-8 md:border-2 md:border-forest_green-400" onChange={(event) => handleEmailChange(event)}></input>
                        <input type='password' placeholder="password" className="my-2 h-6 w-full rounded-lg pl-2 md:my-3 md:h-8 md:border-2 md:border-forest_green-400" onChange={(event) => handlePasswordChange(event)}></input>
                        <div className='h-8 flex flex-row justify-center items-center md:w-full md:items-center' >
                            <button className="p-2 rounded-md bg-forest_green-400 w-32 self-center md:w-30 md:p-3 md:mb-2 text-white text-sm md:rounded-2xl md:self-center md:ml-[20%]" type='submit' id='submit'>Sign Up</button>
                            <Link to={"/Login/1"} className='text-xs  text-white mx-3 md:text-rich_black-600 md:text-sm'><p>Already have an account?</p></Link>
                        </div>
                    </form>

                </div>
                <p className="mx-5 mt-5 p-5 text-sm text-white bg-yellow-900 text-md opacity-90 rounded-lg md:w-5/12 md:m-0 md:self-center md:bg-forest_green-100 md:text-justify md:text-xl md:opacity-70">We will be shortly sending you a confirmation email. Please open the mail and click on the link to activate your account</p>
            </div>
        </div>
    );
}

export default SignUp;
