import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Home from './pages/Home'
import AllRecords from './pages/AllRecords';

function App() {



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allrecords" component={AllRecords} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
