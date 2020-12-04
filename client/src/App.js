import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home.js';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import { useStoreContext } from './utils/GlobalStore';
import API from './utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from './utils/actions';
function App() {
  // Our provider is setup in index.js so we can use the GlobalStore here easily.
  // Something we want to do at the beginning of the application is check if the user is logged in or not, if the user is, we'll
  // dispatch an action
  const [state, dispatch] = useStoreContext();
  useEffect(() => {
    // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
    API.checkUserInfo()
      .then((response) => {
        const { email } = response.data;
        dispatch({
          type: AUTH_SET_LOGGED_IN,
          payload:{
            email
          }
        });
      })
      .catch((err) => {
        // Not able to be logged in, leave us logged out
        console.log('error', err);
        dispatch({
          type: AUTH_SET_LOGGED_OUT
        });
      });
  }, []);
  console.log(state.userLoggedIn)
  return (
    <Router>
      <div>
      <Switch>
        {!state.userLoggedIn ? (
          // These routes are only avaialable to LOGGED OUT users
          <>
            <Route exact path={["/","/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
          </>
        ) : (
            <>
              <Route exact path={["/","/home"]} component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route>
                {/*If none of the other pages match, redirect them to the main page */}
                <Redirect to="/home" />
              </Route> 
            </>
        )}
        </Switch>
      </div>
    </Router>
  );
}
export default App;