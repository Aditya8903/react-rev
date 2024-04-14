import React from 'react'
import Feed from './Feed'

const Home = ({posts , setPosts}) => {
  return (
    <main className='Home'>
      {posts.length?(
        <Feed posts={posts}/>
      ):(
        <p>No Posts Yet</p>
      )}
    </main>
  )
}

export default Home
