import React, {useCallback, useState} from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import NewPlace from "./Component/Places/Pages/NewPlaces"
import Users from "./Component/user/Users"
import UserPlace from "./Component/Places/Pages/UserPlace"
import UpdatePlace from "./Component/Places/Pages/UpdatePlace"
import AuthForm from "./Component/user/AuthForm"
import MainNav from "../src/Component/shared/Nav/MainNav"
import { AuthContext } from "../src/Component/shared/context/Auth-context"
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const login = useCallback(()=>{
    setIsLoggedIn(true)
  }, [])

  const logout = useCallback(()=>{
    setIsLoggedIn(false)
  }, [])
  
  let routes;

  if(isLoggedIn) {
    routes = (
     <Switch>
     <Route path="/" exact>
       <Users />
     </Route>
     <Route path="/:userId/places" exact>
       <UserPlace />
     </Route>
     <Route path="/place/new" exact>
       <NewPlace />
     </Route>
     <Route path="/places/:placeId"> 
       <UpdatePlace />
     </Route>
     <Redirect to="/"/>
   </Switch>
    )
  }
  else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/:placeId"> 
          <UpdatePlace />
        </Route>
        <Route path="/auth">
          <AuthForm />
        </Route>
        <Redirect to="/auth"/>
      </Switch>
   
    )
  }

  return (
        <AuthContext.Provider value={{isLoggedIn: isLoggedIn, logout: logout, login:login}}>
          <Router>
            <MainNav />
            <main>
              {routes}
              <Redirect to="/" />
            
            </main>
          </Router>
        </AuthContext.Provider>
  );
}

export default App;
