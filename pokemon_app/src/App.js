import './App.css';
import React from 'react'
import Nav from './components/nav'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Type from './pages/type'
import Stats from './pages/stats'
import Pokemon from './pages/pokemon'

class App extends React.Component{
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Pokemon} />
            <Route path="/type" component={Type} />
            <Route path="/stats" component={Stats} />
          </Switch>
        </div>
      </Router>

    );
  }

}

export default App;
