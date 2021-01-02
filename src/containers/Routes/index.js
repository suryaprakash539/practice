import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from '../Login/login'
import Home from '../Home/home'

const Routes =()=>{
    return (
     <BrowserRouter>
       <Switch>
          <Route exact path='/' component={Login}/>  
          <Route exact path='/home' component={Home}/>
       </Switch>     
     </BrowserRouter>
    )
}

export default Routes