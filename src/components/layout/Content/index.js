import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Content1 from '../../../views/contents/Content1';
import Content2 from '../../../views/contents/Content2';
import Content3 from '../../../views/contents/Content3';
import Home from '../../../views/contents/Home';
import NotFound from '../../../views/contents/NotFound';

import './styles.css';

function Content() {
  return (
    <main className="content">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/content1/:user">
          <Content1 />
        </Route>
        <Route path="/content2">
          <Content2 />
        </Route>
        <Route path="/content3">
          <Content3 />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </main>
  );
}

export default Content;
