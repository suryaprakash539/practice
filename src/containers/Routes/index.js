import React from 'react'
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Login from '../Login/login'

const Routes =()=>{
    return (
     <BrowserRouter>
       <Switch>
          <Route path='/' component={Login}/>  
       </Switch>     
     </BrowserRouter>
    )
}

export default Routes