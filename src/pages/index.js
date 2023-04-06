import Head from 'next/head'
import { Inter } from 'next/font/google'
import Post from '@/components/Post/Post';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  console.log(posts);


  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>

      <main className=' grid grid-cols-5 bg-gray-900 text-white'>

        <div className='m-5 font-bold text-lg '>
          <h2 className='px-4 py-2 hover:bg-gray-700 hover:shadow-md rounded-lg'>Home</h2>
          <h2 className='px-4 py-2 hover:bg-gray-700 hover:shadow-md rounded-lg'>Search</h2>
          <h2 className='px-4 py-2 hover:bg-gray-700 hover:shadow-md rounded-lg'>Explore</h2>
          <h2 className='px-4 py-2 hover:bg-gray-700 hover:shadow-md rounded-lg'>Rells</h2>
          <h2 className='px-4 py-2 hover:bg-gray-700 hover:shadow-md rounded-lg'>Message</h2>
          <h2 className='px-4 py-2 hover:bg-gray-700 hover:shadow-md rounded-lg'>Notification</h2>
          <Link href='/createPost'> <h2 className='px-4 py-2 hover:bg-gray-700 hover:shadow-md rounded-lg'>Create +</h2></Link>
        </div>
        <div className=' col-span-3'>
          {
            posts?.map(post => <Post
              key={post._id}
              post={post}
            ></Post>)
          }

        </div>
        <div>
          <h3> right side section</h3>

        </div>

      </main>

    </>
  )
}


export const getServerSideProps = async (context) => {

  const res = await fetch("https://instagram-server-bay.vercel.app/posts");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }

}