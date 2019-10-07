import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Hero from './pages/Hero';
import EditHero from './pages/EditHero';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/hero/:heroName" component={Hero} />
        <Route path="/edithero/:heroName" component={EditHero} />
      </Switch>
    </BrowserRouter>
  );
}
