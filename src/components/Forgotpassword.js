import React from 'react'
import '../css/login.css'
import {useHistory} from "react-router-dom";
import Axios from 'axios'

  
function Forgotpassword() {
    const history = useHistory();
    function forgot(e){
        e.preventDefault()
        const email = document.getElementById('email').value
        Axios.post('http://localhost:4000/users/forgotPassword',{
            email:email
        }).then((res)=>{
            console.log(res.data.msg)
            if(res.data.msg==='user doesnt exist'){
            alert('user doesnt exist')
            history.push('/login')
            }
            else{
                alert('password has been sent your mail')
                history.push('/login')
            }
        })
      }
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
    <button type="submit" onClick={forgot} className="btn btn-primary">submit</button>
  </form>
  
</div>
    </div>
    )
}

export default Forgotpassword
