import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import NewPlaces from "./Component/Places/Pages/NewPlaces"
import Users from "./Component/user/Users"
import UserPlace from "./Component/Places/Pages/UserPlace"
import MainNav from "../src/Component/shared/Nav/MainNav"
import './App.css';

function App() {
  return (
        
        <Router>
          <MainNav />
          <main>
            <Switch>
              <Route path="/" exact>
                <Users />
              </Route>
              <Route path="/:userId/places" exact>
                <UserPlace />
              </Route>
              <Route path="/new">
                <NewPlaces />
              </Route>
              <Redirect path="/" />
            </Switch>
          </main>
        </Router>
  );
}

export default App;
