import Link from 'next/link';
import React from 'react';
import { FaUserCircle, FaRegBell } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";


const Navbar = () => {
    return (
        <div>
            <div className="navbar  bg-base-200">
                <div className="flex-1">
                    <Link href='' className=" normal-case font-bold text-2xl">
                        <img className=' h-9 w-9 rounded-full mx-2 inline-block' src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png' alt="" />
                        <span className=''>Instagram</span>
                    </Link>
                    <Link href='' className='mx-4 text-lg font-bold hidden lg:block' > Home</Link>
                </div>

                <div className="flex-none gap-2 relative">
                    <div className="form-control">
                        <input type="text" placeholder="Search people" className="input input-bordered bg-base-300 rounded-full pl-11 h-10 pb-[2px] lg:w-96 " />
                    </div>
                    <div className='absolute top-[14px] left-4'>
                        <HiMagnifyingGlass size={20}></HiMagnifyingGlass>
                    </div>
                    <div className=' absolute top-[14px] right-4'>

                    </div>
                    <div className='relative mx-4'>
                        <FaRegBell className=' font-bold' size={20}></FaRegBell>
                        <div className='absolute -top-3 -right-[14px]'>
                            <p className=' px-[4px]  rounded-sm text-white text-[14px] bg-orange-600'>0</p>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle ">
                            <div className=" rounded-full">

                                <FaUserCircle className='text-orange-600' size={30}></FaUserCircle>

                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">

                            <li className='  lg:hidden'> <Link href=''  > Home</Link></li>

                            <li>
                                <Link href='' >
                                    Profile
                                </Link>
                            </li>
                            <li><button >Logout</button></li>
                            <li><Link href=''>LogIn</Link></li>


                        </ul>
                    </div>


                    <div className=' relative top-[3px]'>
                        <label htmlFor="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span className="relative">
                                <input id="Toggle1" type="checkbox" className="hidden peer" />
                                <div className="w-[44px] h-5 rounded-full shadow-inner dark:bg-gray-400 peer-checked:bg-orange-600"></div>
                                <div className="absolute -top-[2px] left-0 w-6 h-6  border-[3px] border-orange-600 rounded-full shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-100"></div>
                            </span>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;