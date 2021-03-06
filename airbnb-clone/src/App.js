import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Home from './Home';
import Header from './Header';
import Footer from './Footer';
import SearchPage from './SearchPage';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          {/* /search */}
          <Route exact path="/search">
            <SearchPage />
          </Route>
          {/* / */}
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
