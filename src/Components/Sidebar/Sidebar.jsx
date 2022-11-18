import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
      <div style={{height:"95vh",width:"15%",border:"1px solid red",marginTop:"3vh",textAlign:"center"}}>
     
      <h1>Admin</h1>
      <div className='menu-bar'>
      <ul>
      <li><a href='#'><h3>Applications</h3></a>
      <div className='display-menu'>
      <ul>
      <li><a href='#'>Flights</a></li>
      <li><a href='#'>Hotel</a></li>
      <li><a href='#'>Visa</a></li>
      <li><a href='#'>Holidays</a></li>
      <li><a href='#'>Staycations</a></li>
      <li><a href='#'>Rentals</a></li>
      <li><a href='#'>Cruise</a></li>
      <li><a href='#'>Activities</a></li>
      <li><a href='#'>Contact</a></li>
      <li><a href='#'>Safe Stay</a></li>
      <li><a href='#'>Offers</a></li>
      <li><a href='#'>Top Deals</a></li>

      </ul>
      </div>
     
      
      
      
      </li>
      
      
      
      </ul>
      
      
      
      
      
      </div>
      </div>
    </div>
  )
}

export default Sidebar
