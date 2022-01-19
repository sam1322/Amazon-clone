import './App.css';
import Header from './Header';
import Home from './Home'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>
        <Route path="/checkout">
          <h1>Checkout</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
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
