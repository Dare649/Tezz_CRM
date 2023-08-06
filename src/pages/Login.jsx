import { Link } from "react-router-dom";


const Login = () => {
  

  return (
    <div>
      <div className='login md:w-[35%] md:ml-[35%] md:mt-[5%] px-3 '>
        <form className='form md:w-full md:h-[60%] px-4 py-6 shadow-md bg-white'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className="font-bold text-xl mb-2">Login</h1>
                    <h3 className="font-bold text-sm">Login to your account</h3>
                </div>
                <img src='images/tour.jpg' alt="Travel logo" className='w-20 h-20 border-2 border-amber-500 rounded-full'/>
            </div>

            <div className="mt-5">
              <div className='email'>
                <label className="font-bold text-md">Email</label>
                <input type="email" name="email" id="email" 
                className='w-full h-12 mt-3 mb-3 border-2 border-black'
                />
              </div>

              <div className='password'>
                <label className="font-bold text-md">Password</label>
                <input type="password" name="password" id="password" 
                className='w-full h-12 mt-3 mb-3 border-2 border-black'
                />
              </div>

              <div className="button md:w-[75%] md:mt-10 md:p-5">
                <button 
                
                className='md:ml-10 w-full md:h-14 text-white bg-amber-500'
                type='submit'><Link to={'/workspace'}>LOGIN</Link>
                </button>
              </div>

            </div>

        </form>
      </div>
      <div className="curve"></div>
    </div>
  )
}

export default Login
