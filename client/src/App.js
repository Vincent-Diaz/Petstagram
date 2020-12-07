import './App.css';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/home.js';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Test from "./pages/Test"
import { useStoreContext } from './utils/GlobalStore';
import API from './utils/api';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from './utils/actions';
import Upload from './pages/upload';
function App() {

  const [state, dispatch] = useStoreContext();
  useEffect(() => {
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
        console.log('error', err);
        dispatch({
          type: AUTH_SET_LOGGED_OUT
        });
      });
  }, []);
  
  return (
    <Router>
      <div>
        {/* <Navigation /> */}
      <Switch>
        {!state.userLoggedIn ? (
          // These routes are only avaialable to LOGGED OUT users
          <>
            <Route exact path={["/","/login"]} component={Login} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Route exact path="/signup" component={Signup} />
            
          </>
        ) : ( 
            <>
              <Route exact path={["/","/home"]} component={Home} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/upload" component={Upload} />
              <Route exact path="/logout" component={Login} />
              <Route exact path="/test" component={Test} />
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