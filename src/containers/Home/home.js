import React from 'react'
import { useSelector } from 'react-redux'

const Home = ()=>{
console.log(useSelector(state=>state))
  return (
    <div>
       Home
  </div>
  )
}


export default Home