import React, { useEffect, createContext, useReducer, useContext } from "react";
import Navbar from './components/Navbar'
import "./App.css"
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Signup from './components/pages/Signup'
import CreatePost from './components/pages/CreatePost'
import { reducer, initialState } from './reducers/userReducer'

export const UserContext = createContext()

const Routing = () => {
  const history = useHistory()
  const {state, dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem('user'))

    if(user){
      dispatch({type:"USER", payload:user})
      history.push('/')
    }
    else{
      history.push('/login')
    }
  },[])

  return (
    <Switch>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route path="/login" >
        <Login />
      </Route>
      <Route path="/signup" >
        <Signup />
      </Route>
      <Route path="/profile" >
        <Profile />
      </Route>
      <Route path="/create" >
        <CreatePost />
      </Route>
    </Switch>
  )
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{state,dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
