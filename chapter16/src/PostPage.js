import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts , handleDelete}) => {
  const {hululu} = useParams();
  // eslint-disable-next-line eqeqeq
  const post = posts.find(post=>post.id == hululu);
  return (
    <div className='PostPage'>
      <div className='post'>
        {post && 
            <>
              <h1>{post.title}</h1>
              <p className='postDate'>{post.dateTime}</p>
              <p className='postBody'>{post.body}</p>
              <button onClick={()=>handleDelete(post.id)}>Delete</button>
              <Link to={`/edit/${post.id}`}><button className='editButton'>Edit Post</button></Link>
            </>
        }
        {!post &&
            <>
              <p>No such post found.</p>
              <p>
                <Link  to="/">Go back home</Link>
              </p>
            </>
        }
      </div>
    </div>
  )
}

export default PostPage
