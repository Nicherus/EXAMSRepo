import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { ContextProvider } from './contexts/Context';

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
              <h1>tela2</h1>
            </Route>

          </ContextProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;