import bike from '../assets/bike1.jpg';
import { Link } from 'react-router-dom';

function SignUp() {
    return (
        <div className='md:w-screen md:h-screen bg-white md:flex md:flex-col md:items-center md:justify-center'>
            <div
                className='w-full h-screen flex flex-col align-middle justify-center md:mt-5 md:flex-row md:h-5/6 md:w-9/12 md:rounded-3xl md:shadow-xl hover:md:shadow-forest_green-500 hover:md:shadow-2xl'
                style={{ backgroundImage: `url(${bike})`, backgroundSize: 'cover' }}
            >
                <div className='mx-5 mb-3 p-2 h-4/6 rounded-2xl bg-forest_green-200 opacity-80 flex flex-col flex-initial md:bg-white md:m-0 md:h-full md:opacity-100 md:items-center'>
                    <div className="flex flex-col mb-auto mt-5 md:w-4/6 md:grow">
                        <h1 className="text-lg font-bold text-center md:text-2xl md:text-wrap md:self-stretch  md:text-forest_green-100">REGISTER FOR AN ACCOUNT</h1>
                        <h3 className="font bold text-md text-center text-forest_green-700 my-2 md:text-[2.5rem]">Welcome!</h3>
                        <p className='text-lg text-white text-justify m-2 p-2 md:m-0 md:text-2xl md:h-full md:text-forest_green-200'>We just need to get a few details from you to get you signed in for the service.</p>
                    </div>
                    <form className="flex flex-col justify-center  self-center w-4/6 h-2/6 md:self-center">
                        <input type='text' placeholder="First Name" className="my-3 h-8 rounded-lg pl-2 md:border-2 md:border-forest_green-400" id='first'></input>
                        <input type='text' placeholder="Last Name" className="my-3 h-8 rounded-lg pl-2 md:border-2 md:border-forest_green-400" id='last'></input>
                        <input type='email' placeholder="email" className="my-3 h-8 rounded-lg pl-2 md:border-2 md:border-forest_green-400"></input>
                        <input type='password' placeholder="password" className="my-3 h-8 rounded-lg pl-2 md:border-2 md:border-forest_green-400"></input>
                    </form>
                    <div className='flex flex-col md:flex-row md:w-full md:items-center' >
                        <button className="p-2 my-3 mt-5 rounded-md bg-forest_green-400 w-32 self-center md:w-30 md:p-3 md:my-2 text-white text-sm md:rounded-2xl md:self-center md:ml-[40%]">Sign Up</button>
                        <Link to={"/Login/1"} className='text-sm text-white md:mx-3 md:text-rich_black-600'><p>Aready have an account?</p></Link>
                    </div>
                </div>
                <p className="mx-5 mt-5 p-5 text-sm text-white bg-yellow-900 text-md opacity-90 rounded-lg md:w-2/3 md:m-0 md:self-center md:bg-forest_green-100 md:text-justify md:text-xl md:opacity-70">We will be shortly sending you a confirmation email. Please open the mail and click on the link to activate your account</p>
            </div>
        </div>
    );
}

export default SignUp;
