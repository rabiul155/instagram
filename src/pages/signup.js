import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import img from '../Images/insta.jpg'
import { useForm } from 'react-hook-form';
import { AuthContext } from '@/context/ContextProvider'
import { toast } from 'react-hot-toast';
import Loading from '@/components/Loading/Loading';


const signup = () => {

    const { createUser, updateUser, createUserGoogle } = useContext(AuthContext)
    const { register, handleSubmit } = useForm();
    const [isLoadig, setIsLoading] = useState(false)
    const imageHostingKey = '60a0534fb81af8024326073b2526de82';





    const onSubmit = (data) => {
        setIsLoading(true)
        const name = data.name;
        const email = data.email;
        const password = data.password;


        const image = data.photo[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                console.log(imgData);
                if (imgData.success) {
                    createUser(email, password)
                        .then(result => {
                            setIsLoading(false)
                            toast.success('signUp successfully')
                            const userInfo = {
                                displayName: name,
                                photoURL: imgData.data.url
                            }
                            updateUser(userInfo)
                                .then(result => {
                                    console.log('update user');

                                })
                                .catch(err => {
                                    setIsLoading(false)
                                    toast.error('something went wrong please try again')
                                    console.error('update user error', err);
                                })
                        })
                        .catch(err => {
                            setIsLoading(false)
                            toast.error('something went wrong please try again')
                            console.error('signup error', err)
                        })

                }
            })

    }


    const handleGoogleBtn = () => {
        setIsLoading(true)
        createUserGoogle()
            .then(result => {
                console.log(result.user);
                setIsLoading(false)
                toast.success('singUp with google successfully')

            })
            .catch(err => {
                setIsLoading(false)
                toast.error('something went wrong please try again')
                console.log('google singnup errro', err);
            })
    }



    return (


        <div>
            {
                isLoadig ?
                    <Loading></Loading>
                    :
                    <div className='max-w-lg mx-auto'>
                        <div className=" bg-base-100">
                            <div className="hero-content flex-col gap-0">
                                <div className=' text-center'>
                                    <div className='flex justify-center items-center'>
                                        <Image className=' h-6 mt-1 w-6'
                                            src={img}
                                            alt=''
                                        ></Image>
                                        <h3 className=' text-3xl mx-3 font-bold'>
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

                                <form onSubmit={handleSubmit(onSubmit)} className="card  max-w-md w-full px-2 shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <div className="form-control my-2">
                                            {/* <label className="label">
                                    <span className="label-text">Name</span>
                                </label> */}
                                            <input
                                                {...register('name')}
                                                required type="text" placeholder="Name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control my-2">
                                            {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                            <input
                                                {...register('email')}
                                                required type="email" placeholder="email" className="input input-bordered" />
                                        </div>
                                        <div className="form-control my-2">
                                            {/* <label className="label">
                                    <span className="label-text">Phone</span>
                                </label> */}
                                            <input
                                                {...register('photo')}
                                                type="file" className="file-input file-input-bordered w-full " />
                                        </div>
                                        <div className="form-control my-2">
                                            {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                            <input
                                                {...register('password')}
                                                required type="password" placeholder="password" className="input input-bordered" />

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
                                            <button onClick={handleGoogleBtn} className="btn  btn-outline ">SignUp With Google</button>
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

export default signup;