import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import {LayoutOne,LayoutTwo} from '../../components/Utility/layout'
import Login from '../Login/login'
import Home from '../Home/home'

const Routes =()=>{
    return (
     <BrowserRouter>
       <Switch>
          <RouteWrapper exact path='/' component={Login} layout={LayoutOne}/>  
          <RouteWrapper exact path='/home' component={Home} layout={LayoutTwo}/>
       </Switch>     
     </BrowserRouter>
    )
}


function RouteWrapper({component:Component,layout:Layout,...rest}){
   return(
     <Route 
        {...rest}
         render={props=>(
           <Layout {...props}>
              <Component {...props}/>
            </Layout>
         )}
        />
   )
}

export default Routes