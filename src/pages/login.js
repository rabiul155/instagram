import Link from 'next/link';


const login = () => {
    return (
        <div>
            <div className='max-w-lg mx-auto'>
                <div className=" bg-base-100">
                    <div className="hero-content flex-col ">
                        <div className=' text-center'>
                            <div className=' flex justify-center items-center'>
                                <img className=' h-6 mt-1 w-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' alt="" />
                                <h3 className=' text-3xl m-3 font-bold'>
                                    Instagram
                                </h3>
                            </div>

                            <div className=' text-center'>
                                <h3 className=' text-xl font-bold'> Hey, Welcome!</h3>
                                <p className="py-1">
                                    Please provide your email and password to signIn
                                </p>
                            </div>
                        </div>
                        <form className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name='password' type="password" placeholder="password" className="input input-bordered" />

                                </div>

                                <label className="flex justify-end ">
                                    <Link href='' className="text-orange-600  float-right no-underline">Forgot password?</Link>
                                </label>

                                <div className="form-control mt-2">
                                    <button type='submit' className="btn border-0 bg-orange-500 hover:bg-orange-400">Login</button>
                                </div>
                                <div className=' text-center'>
                                    <span>  Don't have an account? </span>
                                    <Link href='/register' className=' text-orange-600 '> Register Now</Link>
                                </div>
                                <div className="divider my-2">OR</div>

                                <div className="form-control">
                                    <button className="btn  btn-outline ">SignIn With Google</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;