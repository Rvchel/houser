import React from 'react';
import {HashRouter as Router} from 'react-router-dom';
import routes from './routes';
import Header from './components/Header/Header';
import './App.css';

function App() {
return (
    <Router>
    <div>

      <Header />
      {routes}
      
    </div>
    </Router>
);
}

export default App;
