import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/home';
import Results from './pages/results';

function App({ store }) {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
