import './App.css';
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
        <h1>Let's build Amazon clone</h1>
        <h2>Home page </h2> 
        </Route>
      </Switch>
     </div>
     </Router>
  );
}

export default App;
