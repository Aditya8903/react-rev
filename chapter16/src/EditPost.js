import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts,handleEdit,editTitle,setEditTitle,editbody,setEditbody}) => {
//<Route path="/edit/:hululu" element={<EditPost
//  posts={posts} 
//  handleEdit={handleEdit} 
//  editTitle={editTitle} 
//  setEditTitle={setEditTitle}
//   editbody={editBody} 
//   setEditbody={setEditBody}/>} />

    const {hululu} = useParams();
    // eslint-disable-next-line eqeqeq
    const post = posts.find(post=>(post.id)==hululu);

    useEffect(()=>{
        if(post){
            setEditTitle(post.title);
            setEditbody(post.body);
        }
    },[post,setEditTitle,setEditbody])
  return (
    <div className='NewPost'>
      {editTitle &&
      <>
      <h2>Edit Post</h2>
            <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={editbody}
                    onChange={(e) => setEditbody(e.target.value)}
                />
                <button type="submit" onClick={()=>handleEdit(post.id)}>Submit</button>
            </form>
      </>
      }
      {
        !editTitle && <h3><a href="/">Go Back , no post named this title</a></h3>
      }
    </div>
  )
}

export default EditPost
