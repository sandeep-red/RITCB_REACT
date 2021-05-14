import React, { useState, useEffect } from 'react'
import login from '../css/login.css'
import Axios from 'axios'
import User from './User'
import {useHistory} from 'react-router-dom'
import {useStateValue} from '../StateProvider'
function Login() {
  const [{user}] = useStateValue()
  let history = useHistory()
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [res,setRes] = useState({})
    function validation(e){
        e.preventDefault()
        let email = document.getElementById('email').value
        let password = document.getElementById('password').value
        if(email==='' || password===''){
            alert('please fill both email id and password fields')
        }
        else{
            // setEmail(email);
            // setPassword(password)
            Axios.post('https://ritcb-master.herokuapp.com/users/login',{"email":email,"password":password})
                    .then(res=>{
                        if(res.data.msg==='invalid password')
                        alert('invalid password')
                        else if(res.data.msg==='user doesnt exist')
                        alert('user doesnt exist')
                        else if(res.data.msg==='valid password')
                        localStorage.setItem('token',res.data.token)
                        window.location.reload()
                        // setRes(res)
                    })
        }
    }
    
    if(localStorage.getItem('token')===null)
    return (
        <div>
            <div id="auth">
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input  type="email" className="form-control" id="email" aria-describedby="emailHelp"
            placeholder="Enter email" required />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password"
            placeholder="Password" required/>
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
        </div>
        <button type="submit" onClick={validation} className="btn btn-primary">Login</button>
        <button type="submit" onClick={()=>{history.push('login/forgot')}} className="btn btn-primary">forgot password</button>
      </form>
      <button type="submit" className="btn btn-primary"><a href='signup'>Sign Up</a></button>
    </div>
        </div>
    )
    else
    return(
        <User />
    )
}

export default Login

