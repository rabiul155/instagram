import Link from 'next/link';
import img from '../Images/insta.jpg'
import Image from 'next/image';
import { useContext, useState } from 'react';
import { AuthContext } from '@/context/ContextProvider';
import { toast } from 'react-hot-toast';
import Loading from '@/components/Loading/Loading';


const login = () => {

    const { logIn, createUserGoogle } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (event) => {
        setLoading(true)
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        logIn(email, password)
            .then(result => {
                const user = result?.user;
                console.log(user);
                setLoading(false)
                toast.success('logIn successfully')

            })
            .catch(err => {
                setIsLoading(false)
                toast.error('something went wrong please try again')
                console.log('login error', err);
            })
    }

    const handleGoogleBtn = () => {
        setLoading(true)
        createUserGoogle()
            .then(result => {
                console.log(result.user);
                setLoading(false)
                toast.success('singIn with google successfully')

            })
            .catch(err => {
                setLoading(false)
                toast.error('something went wrong please try again')
                console.log('google singnIN errro', err);
            })
    }


    return (
        <div>
            {
                loading ?
                    <Loading></Loading>
                    :
                    <div className='max-w-md mx-auto'>
                        <div className=" bg-base-100">
                            <div className="hero-content flex-col gap-0">
                                <div className=' text-center'>
                                    <div className=' flex justify-center items-center'>

                                        <Image className=' h-6 mt-1 w-6'
                                            src={img}
                                            alt=''
                                        ></Image>
                                        <h3 className=' text-3xl mx-3 font-bold'>
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
                                <form onSubmit={handleSubmit} className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
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

                                        <label className="flex justify-between ">
                                            <div className="flex items-center">
                                                <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                                            </div>
                                            <Link href='' className="text-orange-600  float-right no-underline">Forgot password?</Link>
                                        </label>

                                        <div className="form-control mt-2">
                                            <button type='submit' className="btn border-0 bg-orange-500 hover:bg-orange-400">Login</button>
                                        </div>
                                        <div className=' text-center'>
                                            <span>  Don't have an account? </span>
                                            <Link href='/signup' className=' text-orange-600 '> SignUp Now</Link>
                                        </div>
                                        <div className="divider my-2">OR</div>

                                        <div className="form-control">
                                            <button onClick={handleGoogleBtn} className="btn  btn-outline ">SignIn With Google</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
};

export default login;