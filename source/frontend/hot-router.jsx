import * as React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import Home from './home';

const HotRouter = () => (
  <HashRouter>
    <div>
      <Route path="/" component={Home} />
    </div>
  </HashRouter>
);

export default hot(module)(HotRouter);
