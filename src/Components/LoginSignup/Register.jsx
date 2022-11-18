import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import "./LoginSignup.css"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Register_Request } from '../../Redux/singup/action'




const Register = () => {



  const dispatch=useDispatch();
  const navigate =useNavigate()
  const [user,setUser] = useState({
      name:"",
      email:"",
      password:""
  })

  const handleChange =(e)=>{
      const{name,value} =e.target;
      

    
     
      setUser({...user,[name]:value,})
  }

  console.log("user",user);
  const register   =()=>{
      const {name,email,password} = user
      
      if(name && email  && password ){
         
        dispatch(Register_Request(user,navigate))
          
      }
         

      else{
          alert ("Please fill all the spaces")
      }
     
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
<div><Link to="/login" ><h3 style={{marginLeft:"25px"}}>Login Account</h3></Link></div>
<div><Link to="/register"><h3 style={{marginLeft:"25px"}}>Register</h3></Link>


</div>
</div>




<div>
    
     <div className="r2">
     {/* {console.log(user)} */}
 <p className="r1"><h3>Create Your Account</h3></p>
 <input className="r3" type="text" name="name" value={user.name} onChange={handleChange}  placeholder="Enter Your Name" />
 <br />
 <br />
 <input className="r3" type="text" name="email" value={user.email} onChange={handleChange}  placeholder="Enter Your E-mail"  />
 <br /><br />
 <input className="r3" type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter Your Password" />
 <br />
 <br />
 
 <button onClick={register} style={{padding:"10px",backgroundColor:"#3380f2",borderRadius:"10px",width:"240px"}}>Register</button>
 <br />
 <br />
 
 <label className="label" htmlFor=""><Link to="/login">Already have account ?</Link></label>

 {/* <button className="r4">Log in</button> */}

 </div>



     </div>







</div>
</div>
</div>
</div>
</div>
</div>
  )
}

export default Register



