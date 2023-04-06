import Head from 'next/head'
import { Inter } from 'next/font/google'
import Post from '@/components/Post/Post';


const inter = Inter({ subsets: ['latin'] })

export default function Home({ posts }) {
  console.log(posts);


  return (
    <>
      <Head>
        <title>Instagram</title>
      </Head>

      <main className=' grid grid-cols-5 '>
        <div>
          <h2>left side section</h2>

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


export const getServerSideProps = async () => {

  const res = await fetch("http://localhost:5000/posts");
  const data = await res.json();

  return {
    props: {
      posts: data
    }
  }

}