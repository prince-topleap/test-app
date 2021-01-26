import React from 'react';
import './App.scss';

import ReactGA from 'react-ga';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import About from './pages/AboutPage/AboutPage';

ReactGA.initialize('G-BCGBZ7R5G7');

function App() {



  return (
    <Router>
      <div>
        <Navbar />
        <header>
          <h1>Hello Ji</h1>
        </header>
      </div>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/">
          <h1>I Think this is Home page.</h1>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
