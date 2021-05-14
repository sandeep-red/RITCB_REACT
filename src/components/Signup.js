import React from 'react'
import Axios from 'axios'
import {useHistory} from "react-router-dom";

function Signup() {
  const history = useHistory();
    function validation(e){
      e.preventDefault()
        let email = document.getElementById('email').value
        let password1 = document.getElementById('password1').value
        let password2 = document.getElementById('password2').value
        if(email===''||password1===''||password2===''){
            alert("please fill out all the fields")
        }
        else if(password1!==password2){
            alert('passwords dont match')
        }
        else if(password1===password2){
            Axios.post('http://localhost:4000/users/verify',{
              email:email,
              password:password2
            }).then((res)=>{
              console.log(res)
                if(res.data.msg==='added to queue')
                   history.push("signup/verify")
                else{
                  alert(res.data.msg)
                  history.push("signup/verify")
                }
                   
                  
            })
        }
    }
    return (
        <div>
            <h1>Signup</h1>
            <div id="auth">
        <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="password1" placeholder="Password" required/>
        </div>
        <div className="form-group">
            <label htmlFor="exampleInputPassword2">Retype Password</label>
            <input type="password" className="form-control" id="password2" placeholder="Retype Password" required/>
          </div>
        <button type="submit" onClick={validation} className="btn btn-primary">Register</button>
      </form>
      </div>
        </div>
    )
}

export default Signup
