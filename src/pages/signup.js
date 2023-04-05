import Link from 'next/link';
import React from 'react';

const signup = () => {
    return (
        <div>
            <div className='max-w-lg mx-auto'>
                <div className=" bg-base-100">
                    <div className="hero-content flex-col ">
                        <div className=' text-center'>
                            <div className='flex justify-center items-center'>
                                <img className=' h-6 mt-1 w-6' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' alt="" />
                                <h3 className=' text-3xl m-3 font-bold'>
                                    Instagram
                                </h3>
                            </div>

                            <div className=' text-center'>
                                <h3 className=' text-xl font-bold'>Create an account</h3>
                                <p className="py-1">
                                    Please provide your email and password to signUp
                                </p>
                            </div>
                        </div>

                        <form className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control my-2">
                                    {/* <label className="label">
                                    <span className="label-text">Name</span>
                                </label> */}
                                    <input required name='name' type="text" placeholder="Name" className="input input-bordered" />
                                </div>
                                <div className="form-control my-2">
                                    {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                    <input required name='email' type="email" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control my-2">
                                    {/* <label className="label">
                                    <span className="label-text">Phone</span>
                                </label> */}
                                    <input required name='phone' type="text" placeholder="Phone number" className="input input-bordered" />
                                </div>
                                <div className="form-control my-2">
                                    {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                    <input required name='pass' type="password" placeholder="password" className="input input-bordered" />

                                </div>

                                <div className="form-control mt-4">
                                    <button type='submit' className="btn border-0 bg-orange-500 hover:bg-orange-400">Register</button>
                                </div>
                                <div className=' text-center'>
                                    <span>  Have an account? </span>
                                    <Link href='/login' className=' text-orange-600 '> SignIn Now</Link>
                                </div>
                                <div className="divider my-2">OR</div>

                                <div className="form-control">
                                    <button className="btn  btn-outline ">SignUp With Google</button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default signup;