import { AuthContext } from '@/context/ContextProvider';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const createPost = () => {

    const { register, handleSubmit } = useForm()
    const imageHostingKey = '60a0534fb81af8024326073b2526de82';
    const { user } = useContext(AuthContext);
    const router = useRouter()

    const onSubmit = data => {
        console.log(data);


        const image = data.postImg[0];
        const formData = new FormData()
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const post = {
                        title: data.title,
                        content: data.content,
                        postImg: imgData.data.url,
                        name: user?.displayName,
                        picture: user?.photoURL,
                        email: user.email,
                        date: new Date().toLocaleDateString()

                    }
                    fetch('https://instagram-server-bay.vercel.app/post', {
                        method: "POST",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(post)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            toast.success('post added')
                            router.replace('/')
                        })

                }
            })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='max-w-lg mx-auto my-6'>
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input
                        {...register('title')}
                        required type="text" placeholder="Title" className="input input-bordered" />
                </div>
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Photo</span>
                    </label>
                    <input
                        {...register('postImg')}
                        required
                        type="file" className="file-input file-input-bordered w-full " />
                </div>
                <div className="form-control my-2">
                    <label className="label">
                        <span className="label-text">Content</span>
                    </label>
                    <textarea
                        {...register('content')}
                        required
                        className="textarea  w-full textarea-bordered" placeholder="content"></textarea>
                </div>
                <div className="form-control mt-10">
                    <button type='submit' className="btn border-0 w-full bg-orange-500 hover:bg-orange-400">Post</button>
                </div>

            </form>
        </div>
    );
};

export default createPost;