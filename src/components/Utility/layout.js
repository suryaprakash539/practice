import React from 'react'
import { Redirect } from 'react-router-dom'
import Navbar from '../../containers/Navbar/index'


export const LayoutOne = ({children}) =>{
  return(
    <div>{children}</div>
  )
}


export const LayoutTwo = ({children}) =>{
    const loginDetails = localStorage.getItem('token')
    return(
        <div>
            {loginDetails!==null ? (
                 <div>
                     <Navbar/>
                     {children}
                 </div>):
                 <Redirect to='/'/>
                 }
        </div>
      )
}