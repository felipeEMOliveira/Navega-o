import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Content from '../components/layout/Content';
import Menu from '../components/layout/Menu';

import './styles.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
