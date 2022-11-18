import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div>
      <div style={{height:"95vh",width:"15%",marginTop:"3vh",textAlign:"center"}}>
     
      <h1>Admin</h1>
      <div className='menu-bar'>
      <ul>
      <li><a href='#'><h3 style={{}}>Applications</h3></a>
      <div className='display-menu'>
      <ul>
      <li><a href='#'><h4>Flights</h4></a></li>
      <li><a href='#'><h4>Hotel</h4></a></li>
      <li><a href='#'><h4>Visa</h4></a></li>
      <li><a href='#'><h4>Holidays</h4></a></li>
      <li><a href='#'><h4>Staycations</h4></a></li>
      <li><a href='#'><h4>Rentals</h4></a></li>
      <li><a href='#'><h4>Cruise</h4></a></li>
      <li><a href='#'><h4>Activities</h4></a></li>
      <li><a href='#'><h4>Contact</h4></a></li>
      <li><a href='#'><h4>Safe Stay</h4></a></li>
      <li><a href='#'><h4>Offers</h4></a></li>
      <li><a href='#'><h4>Top Deals</h4></a></li>

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
