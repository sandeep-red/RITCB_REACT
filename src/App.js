import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar'
import About from './components/About'
import Menu from './components/Menu'
import Contact from './components/ContactUs'
import Home from './components/Home'
import Login from './components/Login'
import Cart from './components/Cart'
import Signup from './components/Signup'
import Verify from './components/Verify'
import Fileupload from './components/Fileuploadex'
import Admin from './components/Admin'
import CurrentQ from './components/CurrentQ'
import Changemenu from './components/Changemenu'
import Allorders from './components/Allorders'
import Checkout from './components/Checkout'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Forgotpassword from './components/Forgotpassword';
import { useStateValue } from './StateProvider'
function App() {
  const [{ menu, user, orders }, dispatch] = useStateValue()
  useEffect(() => {
    axios.get('https://ritcb-master.herokuapp.com/items/').then((res)=>{
      dispatch({
        type: 'MENU',
        menu: res.data
      })
    })
    if(user===null){
    axios.post('https://ritcb-master.herokuapp.com/users/getusername', null, {
      headers:{
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then(res=>{
      console.log(res.data)
        dispatch({
          type:'SET_USER',
          user:res.data.username
        })
    })
  }
    axios.get('https://ritcb-master.herokuapp.com/orders/').then((res)=>{
      dispatch({
          type:'ADMIN_ORDERS',
          orders:res.data
      })
  })
  axios.get('https://ritcb-master.herokuapp.com/customerq/').then((res)=>{
    dispatch({
      type:'CURRENTQ',
      currentq: res.data[0].currentQ
    })
  })
  },[])
  
    
  
  return (
    <>
    <Router>
    
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/admin/changemenu">
            <Changemenu />
          </Route>
        <Route exact path="/admin/currentq">
            <CurrentQ />
          </Route>
        <Route exact path="/admin/allorders">
            <Allorders/>
          </Route>
        <Route exact path="/admin">
            <Admin />
          </Route>
        <Route exact path="/upload">
            <Fileupload />
          </Route>
          <Route exact path="/about">
          <Nav/>
            <About />
          </Route>
          <Route exact path="/menu">
          <Nav/>
            <Menu />
          </Route>
          <Route exact path="/contact">
          <Nav/>
            <Contact />
          </Route>
          <Route exact path="/cart">
          <Nav/>
            <Cart/>
          </Route>
          <Route exact path="/login">
          <Nav/>
            <Login />
          </Route>
          <Route exact path="/signup">
          <Nav/>
            <Signup />
          </Route>
          <Route exact path="/signup/verify">
          <Nav/>
            <Verify />
          </Route>
          <Route exact path="/login/forgot">
          <Nav/>
            <Forgotpassword />
          </Route>
          <Route exact path="/checkout">
          <Nav/>
            <Checkout />
          </Route>
          <Route path="/">
          <Nav/>
            <Home />
          </Route>
        </Switch>
     
    </Router>
   </>
  );
}

export default App;
