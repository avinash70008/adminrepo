import React from 'react'
import Sidebar from '../../Sidebar/Sidebar'

const Home = () => {
  return (
  <div style={{display:"flex",flexDirection:"row"}}>
  <div style={{border:"10px solid red",marginLeft:"10px"}}><Sidebar /></div>
  <div style={{border:"10px solid green",marginLeft:"230px"}}>
  <h1>Welcome To Travel Flap Admin</h1>
  
  </div>
  
  
  </div>
  )
}

export default Home
