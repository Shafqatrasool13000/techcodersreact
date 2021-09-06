import React from 'react'
import Home from './Home'
import Contact from './pages/contact'
import About from './pages/about'
import Login from './pages/login'
import Sign from './pages/signup'

import {
  Switch,
  Route,
} from "react-router-dom"
const App = () => {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/contact' component={Contact}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/login' component={Login}></Route>
        <Route path='/signup' component={Sign}></Route>
      </Switch>
    </>
  )
}

export default App


