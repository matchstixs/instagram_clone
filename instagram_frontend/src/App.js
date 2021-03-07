// import logo from './logo.svg';
import React, {useState} from 'react'
import Post from './components/Post.js';
import './App.css';


function App() {
// STATE HOOK -new in React 16.8 {allows for use of state without class}
const [posts, setPosts] = useState([
  {
  avatarUrl:"/../image/waldo.jpeg",
  username:"whereami",
  location:"Boston, NY",
  imageUrl:"https://images.freeimages.com/images/large-previews/4a3/coming-home-1371162.jpg",
  caption:"Awesome sunset on the lake!"
  },
  {
  avatarUrl:"/../image/panda.jpg",
  username:"colaModel",
  location:"North Pole, AK", 
  imageUrl:"https://images.freeimages.com/images/large-previews/09f/coke-for-a-dime-1496694.jpg", 
  caption:"Throwback to the refreshing days"
  },
  {
  avatarUrl:"/../image/penguin.jpg", 
  username:"skaterboi", 
  location:"Jacksonville, FL", 
  imageUrl:"https://images.freeimages.com/images/large-previews/b69/seal-in-black-white-1381694.jpg", 
  caption:"Eyyy my guy finished 1st place!"
  }
]);

  return (
    <div className="App">
      <div className="app_header">
        <img className="app_header_image"
          src={"/../image/header.png"}
          alt="logo"/>
      </div>
      
      <h5>Image based social media on ReactJS</h5>

      {
        posts.map(post => (
          <Post avatarUrl={post.avatarUrl} username={post.username} location={post.location} imageUrl={post.imageUrl} caption={post.caption}/>
        ))
      }

    </div>
  );
}

export default App;
