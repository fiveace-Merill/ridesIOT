import bike from '../assets/bike1.jpg';

function Login() {
    return (
        <div
            className='w-full h-screen flex flex-col align-middle justify-center md:flex-row md:h-full md:w-9/12 md:ml-40 md:my-11 md:rounded-xl'
            style={{ backgroundImage: `url(${bike})`, backgroundSize: 'cover' }}
        >
            <div className='mx-5 mb-3 p-2 h-[400px] rounded-2xl bg-forest_green-200 opacity-80 flex flex-col flex-initial relative md:bg-white md:h-full md:m-0 md:w-[60%] md:opacity-100 md:text-forest_green-200 md:items-center'>
                <div className="flex flex-col mb-auto mt-5 md:w-4/6 md:grow">
                    <h1 className="text-lg font-bold text-center md:text-2xl md:text-wrap">REGISTER FOR AN ACCOUNT</h1>
                    <h3 className="font bold text-md text-center text-forest_green-700 my-5 md:text-[2.5rem]">Welcome!</h3>
                    <p className='text-xl text-justify m-2 p-2 md:text-2xl md:h-full'>We just need to get a few details from you to get you signed in for the service.</p>
                </div>
                <form className="flex flex-col justify-center  self-center md:w-4/6 md:h-2/6 md:self-center">
                    <input type='email' placeholder="email" className="my-3 h-8 rounded-xl pl-2 md:border-2 md:border-forest_green-400"></input>
                    <input type='password' placeholder="password" className="my-3 h-8 rounded-xl pl-2 md:border-2 md:border-forest_green-400"></input>
                </form>
                <button className="p-4 my-5 rounded-md bg-forest_green-400 w-32 self-center md:w-40 md:text-white">SIGN UP</button>
            </div>
            <p className="mx-5 mt-5 p-5 text-sm text-white bg-yellow-900 text-md opacity-90 rounded-lg md:m-0 md:self-center md:h-auto md:bg-forest_green-400 md:text-jusify md:text-2xl md:opacity-90">We will be shortly sending you a confirmation email. Please open the mail and click on the link to activate your account</p>
        </div>
    );
}

export default Login;
