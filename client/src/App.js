// import logo from './logo.svg';
import React, { useState, useEffect } from 'react'
import Post from './components/Post.js';
import ImageUpload from './components/ImageUpload.js'
import './App.css';
import { db, auth } from './firebase';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Input } from '@material-ui/core';

// MODAL IN
// MATERIAL-UI STYLING
function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

function App() {
  // MATERIAL-UI HOOK
  // getModalStyle is not a pure function, we roll the style only on the first render
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  // MODAL SIGNUP FORM
  const [username, setUsername] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  // STATE HOOK -new in React 16.8 {allows for use of state without class}
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  const [openSignin, setOpenSignin] = useState(false)

  // useEffect(), runs code based on specific condition
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // code runs once when app component loads
    db.collection('posts').onSnapshot(snapshot => {
      //onSnapShot() powerful listener
      setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, []);
  // code reruns whenever [object] changes

  // signUp useEffect()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        // console.log(user);
        setUser(user);
      } else {
        // user logged out
        setUser(null);
      }
    })
  
    return () => {
      // perform function before useEffect is run again
      unsubscribe();
    }
  }, [user, username]);


  const signUp = (event) => {
    // prevent page from refreshing
    event.preventDefault();

    // create user on firebase
    auth.createUserWithEmailAndPassword(email, password)
    .then((authUser) => {
      return authUser.user.updateProfile({
        displayName: user
      })
    })
    .catch((err) => alert(err.message))
  };

  const signIn = (event) => {
    // prevent page from refreshing
    event.preventDefault();

    // create user on firebase
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((err) => alert(err.message))
    
    setOpenSignin(false);
  };

  return (
    <div className="App">

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
      <div style={modalStyle} className={classes.paper}>
        <form className="app_signUp">
      <Input
      type="text" 
      placeholder="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      />

      <Input
      type="email" 
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      />

      <Input
      type="password" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" onClick={signUp}>Create</Button>

        </form>
      </div>
      </Modal>

      <Modal
      open={openSignin}
      onClose={() => setOpenSignin(false)}
      >

      <div style={modalStyle} className={classes.paper}>
      <form className="app_signIn">

      <Input
      type="text" 
      placeholder="Email"
      value={email}
      onChange={(e) => setUsername(e.target.value)}
      />

      <Input
      type="password" 
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      />

      <Button type="submit" onClick={signIn}>Login</Button>
      </form>
      </div>
      </Modal>

      <div className="app_header">
        <center>
        <img className="app_header_image"
          src={"/../image/header.png"}
          alt="logo" 
        />
        </center>
      </div>

      {user ? (
      <Button onClick={() => auth.signOut()}>Logout</Button>
      ): (
        <div className="app_login">
          <Button onClick={() => setOpenSignin(true)}>Sign-In</Button>
          <Button onClick={() => setOpen(true)}>Sign-Up</Button>
        </div>
      )}

      <h5>Upload images</h5>
      <ImageUpload />


      {
        posts.map(post => (
          <Post avatarUrl={post.avatarUrl} username={post.username} location={post.location} imageUrl={post.imageUrl} caption={post.caption} />
        ))
      }

    </div>
  );
}

export default App;
