import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ContextProvider } from './contexts/Context';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/Home/PostOrSearch';
import Post from './pages/Home/Post';

const App = () => {
  return (  
  <>        
      <Router>
      <Switch>
          <ContextProvider>

            <Route path='/' exact >
              <Redirect to="/home" />
            </Route>
            
            <Route path='/home'>
              <Home />
            </Route>
            
            <Route path='/post'>
              <Post />
            </Route>

            <Route path={['/sign-in', "/login"]}>
              <Login />
            </Route>

            <Route path='/sign-up'>
              <SignUp />
            </Route>

          </ContextProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;