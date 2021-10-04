import './App.css';
import Form from './Form';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from './Users';

function App() {
  return (
    <div className="App">
        <h1>Simple Signup</h1>
        <Router>
          <Switch>
            <Route exact path="/" component={ Form }/>
            <Route exact path="/users" component={ Users }/>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
