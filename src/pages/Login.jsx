import React, { useContext, useRef, useState } from 'react'
import {  Link, useNavigate } from 'react-router-dom';
import Authcontext from '../context/Authcontext';

const Login = () => {
  let ctx1 =useContext(Authcontext)
  const [error, seterror] = useState("");
  let navigate=useNavigate()
  let arr =JSON.parse(localStorage.getItem('auth'))|| []
  console.log(arr)
  let emailref= useRef();
  let passwordref=useRef();
  const handleclicked=(e)=>{
    e.preventDefault()
    let obj={
      email:emailref.current.value,
      password:passwordref.current.value
    }
    console.log(obj)

    function checkuser(){
      for(let i=0; i<arr.length;i++){
        
   if(arr[i].email===obj.email){
    if(arr[i].password===obj.password){
      localStorage.setItem("login",true)
      ctx1.setAuthvalue("login",true)
      navigate('/')
      return "login successfull"
    }
    else{
      return "wrong password"
    }
   }
      }
      return "user not found"
    }
    let ans =checkuser()
    seterror(ans)
    }
  return (
    <div>
 <form className='m-auto w-50'>
  <div className="mb-3">
  <p className='text-center ' style={{color:"red"}}>{error}</p>
  <h3  className='text-center '>login form</h3>
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input ref={emailref} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input ref={passwordref} type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button onClick={handleclicked} type="submit" className="btn btn-primary">Submit</button>
  <p className='text-center'>Dot have an account? <Link to="/singup">Singup</Link></p>
</form>

    </div>
  )
}

export default Login
