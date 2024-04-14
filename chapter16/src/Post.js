import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({postdata}) => {
  return (
    <div className='post'>
      <Link to={`/post/${postdata.id}`}>
      <h2>{postdata.title}</h2>
      <p>{postdata.dateTime}</p>
      </Link>
      <p className='postBody'>
        {postdata.body}
      </p>
    </div>
  )
}

export default Post
