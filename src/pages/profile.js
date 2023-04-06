import { AuthContext } from '@/context/ContextProvider';
import React, { useContext, useState } from 'react';
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {

    const { user } = useContext(AuthContext)
    return (

        <div>
            <div >
                <div className=' flex justify-between items-center gap-4 py-[6px] mx-10'>
                    <div className=' flex justify-start items-center gap-4'>
                        <div className=''>
                            {
                                user?.photoURL ?
                                    <img className=' h-[100px] w-[100px] rounded-full' src={user?.photoURL} alt="" />
                                    :
                                    <FaUserCircle className='text-orange-600' size={100}></FaUserCircle>

                            }

                        </div>
                        <div className=' block py-[7px]'>
                            <p className=' text-lg'> Hello,</p>
                            <h3 className=' font-bold text-2xl '>{user?.displayName}</h3>
                            <p>{user?.email}</p>
                        </div>
                    </div>
                    <div>
                        <div className=' text-lg'>
                            <p>
                                <span> 0 </span>
                                Followers
                            </p>
                        </div>
                    </div>
                </div>
            </div>





        </div>
    );
};

export default Profile;


// export const getServerSideProps = async (context) => {

//     const { user } = useContext(AuthContext)

//     const res = await fetch(`https://instagram-server-bay.vercel.app/`);
//     const data = await res.json();

//     return {
//         props: {
//             post: data
//         }
//     }

// }