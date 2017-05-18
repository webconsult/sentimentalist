import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Article from './containers/article';
import NotFound from './components/not-found';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './index.css';

ReactDOM.render(
  (
    <Router>
      <Switch>
        <Route path="/article/:slug" component={Article}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  ), document.getElementById('root')
);
