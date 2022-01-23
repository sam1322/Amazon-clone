import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useStateValue } from './StateProvider';
import {useEffect} from 'react'

function App() {

  const [{user}, dispatch] = useStateValue()

  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    dispatch({
      type:"SET_USER",
      user:user
    })
    // ...
  } else {
    // User is signed out
    // ...
    dispatch({
      type:"SET_USER",
      user:null
    })

    }
  });

    return ()=>{
      unsubscribe()
    }
  },[])

  console.log(`User is this =>>`,user )

  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <Header/>
          <Checkout/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/">
        <Header/>
        <Home/>
     
        </Route>
      </Switch>
     </div>
     </Router>
  );
}

export default App;
