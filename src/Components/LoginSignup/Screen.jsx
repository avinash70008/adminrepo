import React, { useState } from 'react'
import Login from './Login'
import "./LoginSignup.css"
import Register from './Register'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Login_Request } from '../../Redux/signin/action';

const Screen = () => {



  const dispatch=useDispatch()
  const data = useSelector((store)=>store.SignIn.data)
  console.log("login",data)
  
      const  navigate =useNavigate()
 const [user,setUser] = useState({
    
     email:"",
     password:""
 })

 const handleChange =e=>{
     const{name,value} =e.target
     

   
    
     setUser({
         ...user,
         [name]:value,
        
        
        
        
     })
 }



 const login  =() =>{
     dispatch(Login_Request(user,navigate))
     console.log(user, "user")
 }






  return (
    <div>
    <div className='homescreen'> 
<div style={{display:"flex",flexDirection:"row",height:"90vh",width:"120vh",marginLeft:"500px"}}>

<div style={{marginTop:"150px",width:"60%"}}><img style={{width:"100%", height:"100%"}} src='https://img.freepik.com/premium-photo/group-teens-spending-time-lake-beach_186382-76.jpg?size=626&ext=jpg&uid=R84358958&ga=GA1.2.1898142672.1667996362&semt=sph' alt='smalldivimg'/></div>
<div style={{marginTop:"150px",width:"40%",backgroundColor:"white"}}>
<div> 
<div className="l1">
<div style={{display:"flex",flexDirection:"row"}}>
<Link to="/"><div><h3 style={{marginLeft:"25px"}}>Login Account</h3></div></Link>
<Link to="/register"><div><h3 style={{marginLeft:"25px"}}>Register</h3></div></Link>


</div>
</div>


<p className="r1"><h3>Log inito Your Account</h3></p>
<br></br>
<input className="mail" type="text" name="email"  value={user.email} placeholder="Enter Your E-mail id" onChange={handleChange} />
<br />
<br />
<input className="mail" type="password" name="password"   value={user.password} placeholder="Enter Your Password" onChange={handleChange} />
<br />
<br />
<br />
<br />
<br />
<br />

    <button   onClick=
    {login} className="l2" 

style={{padding:"10px",backgroundColor:"#3380f2",borderRadius:"10px",width:"240px"}}
>Log in</button>
<br />
<br />
<br></br>
<label className="label" htmlFor=""><Link to="/register">Don't have an account?</Link></label>



</div>
</div>
</div>
</div>
</div>

  )
}

export default Screen


