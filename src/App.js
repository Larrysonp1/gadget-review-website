import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PhoneDetails from './components/PhoneDetails';
import Compare from './components/Compare';
import News from './components/News';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/phone/:id" component={PhoneDetails} />
          <Route path="/compare" component={Compare} />
          <Route path="/news" component={News} />
          <Route path="/login" component={Login} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
