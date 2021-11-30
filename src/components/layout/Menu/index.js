import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Menu() {
  return (
    <aside className="menu">
      <nav>
        <ul>
          <li><Link to="/">Nome</Link></li>
          <li><Link to="/content1/123">Conteúdo 1</Link></li>
          <li><Link to="/content2">Conteúdo 2</Link></li>
          <li><Link to="/content3">Conteúdo 3</Link></li>
          <li><Link to="/content4">Conteúdo 4</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Menu;
