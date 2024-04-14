import React, { useEffect, useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import About from './About';
import Missing from './Missing';
import { Route, Routes} from 'react-router-dom';
import { format } from 'date-fns';
import postApi from './api/posts';
import EditPost from './EditPost';
import { useNavigate  } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';


/*
import axios from "axios";

const apiClient = axios.create({
  baseURL: 'http://localhost:3005'
});

 */


const App = () => {
  const navigate = useNavigate();
  const [search,setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const[searchResults,setSearchResults] = useState([])
  // const history = useHistory();
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const {width} = useWindowSize();


//useEffect to  get all the posts when the component mounts.
useEffect(()=>{
  const fetchPosts = async()=>{
    try {
      const response  = await postApi.get('/posts');
      setPosts(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
      } else {
        console.log(error.message);
      }
    }
  }
  fetchPosts()
},[])



//useEffect for searching  posts by keyword in search bar
  useEffect(()=>{
    const searchResult = posts.filter(post => post.title.toLowerCase().includes(search.toLowerCase())
    || post.body.toLowerCase( ).includes(search.toLowerCase()))
    setSearchResults(searchResult.reverse())
  },[posts,search])

//submitting new post
  const  handleSubmit =async (e) => {
    e.preventDefault()
    const newPostId = posts.length ? posts[posts.length - 1].id +  1 : 1;
    const timestamp = format(new Date(),'MMMM dd , yyyy pp');
    const newPost = {
      id: newPostId,
      title: postTitle,
      dateTime: timestamp,
      body: postBody
    };
    console.log("New Post", newPost);
    try {
      const response = await postApi.post("/posts" , newPost );
      const allPosts = [...posts,response.data];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('')
    } catch (error) {
      console.log(error);
    }
  }

  const handleEdit = async (id) => {
    const timestamp = format(new Date(), 'MMMM dd , yyyy pp');
    const updatedPost = {
      id,
      title: editTitle,
      dateTime: timestamp,
      body: editBody
    };
    console.log("updated Post ", updatedPost);
    try {
      const response = await postApi.put(`/posts/${id}`, updatedPost)
      setPosts(
        posts.map(post => post.id === id ? { ...response.data } : post)
      );
      setEditBody('');
      setEditTitle('');
      navigate('/'); // Navigate to homepage after edit
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (postId) => {
    try {
      await postApi.delete(`/posts/${postId}`);
      const postList = posts.filter(post => post.id !== postId);
      setPosts(postList);
      navigate('/')
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  

  return (
    <div>
      <Header title={'Blogify'} width={width}/>
      <Nav search={search} setSearch={setSearch}/>
      <Routes>
        <Route exact path="/" element={<Home posts={search ? searchResults : posts} setPosts={setPosts}/>} />
        <Route exact path="/post" element={<NewPost handleSubmit={handleSubmit} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>} />
        <Route path="/post/:hululu" element={<PostPage posts={posts} handleDelete={handleDelete}/>} />
        <Route path="/edit/:hululu" element={<EditPost posts={posts} handleEdit={handleEdit} editTitle={editTitle} setEditTitle={setEditTitle} editbody={editBody} setEditbody={setEditBody}/>} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
