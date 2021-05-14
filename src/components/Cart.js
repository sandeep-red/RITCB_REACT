import React,{ useState, useEffect } from 'react'
import axios from 'axios'
import '../css/cart.css'
import { useStateValue } from '../StateProvider'
import {useHistory} from "react-router-dom";
function Cart() {
    const [{cart, total}, dispatch] = useStateValue()
    const [len, setLen] = useState(true)
    const [load, setLoad] = useState(true)
    useEffect(() => {
        if(localStorage.getItem('token')){
            axios.post('https://ritcb-master.herokuapp.com/carts',null,{
              headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token') 
              }
             }).then((res)=>{
                 if(!res.data.items.length){
                     setLen(false)
                 }
                dispatch({
                    type:'CART_TOTAL',
                    carts:{
                        cart: res.data.items,
                        total: res.data.total
                    }
                })
            })
          }
        },[cart.length]);
    
  const history = useHistory();
    function add(name,price){
        setLoad(false)
        axios.post('https://ritcb-master.herokuapp.com/carts/add',{name:name,price:price},{
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token') 
            }
           }).then(res=>{
               if(res.data.msg==='item added')
               window.location.reload()
           })
    }
    function remove(name,price){
        setLoad(false)
        axios.post('https://ritcb-master.herokuapp.com/carts/reduce',{name:name,price:price},{
            headers: {
              Authorization: 'Bearer ' + localStorage.getItem('token') 
            }
           }).then(res=>{
               if(res.data.msg==='item reduced')
               window.location.reload()
           })
    }
    function navigate(){
        if(cart.length)
        history.push('/checkout')
    }
    if(localStorage.getItem('token'))
  if(load)
  return (
        <div>
           <div className="container">
    <table id="cart" className="table table-hover table-condensed">
        <thead>
            <tr>
                <th style={{width:"50%"}}>Product</th>
                <th style={{width:"25%"}}>Price</th>
                <th style={{width:"65%"}}>Quantity</th>
                <th style={{width:"10%"}} className="text-center" id="right">Subtotal</th>
            </tr>
        </thead>
        <tbody>
            {cart.map((item)=>{
                return(
                    <tr key={item.name}>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-10">
                            <h4 className="nomargin">{item.name}</h4>
                        </div>
                    </div>
                </td>

                <td data-th="Price">₹ {item.price}</td>
                <td className="inline">

                    <button onClick={()=>{ add(item.name,item.price)}} className="btn btn-success btn-sm"><i
                            className="fa fa-plus"></i></button>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                    <p data-th="Quantity" style={{fontSize:"smaller"}}>{item.qty}</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={()=>{ remove(item.name,item.price)}} className="btn btn-danger btn-sm"><i
                            className="fa fa-minus"></i></button>

                </td>



                <td data-th="Subtotal" className="text-center">₹ {item.qty*item.price}</td>
            </tr>
                )
            })}
        </tbody>
        <tfoot>
            <tr className="visible-xs">
                <td></td>
                <td></td>
                <td></td>
                <td className="text-center"  style={{"fontWeight":500}}><strong>Total &nbsp;<span style={{"fontSize":"larger"}}>₹{total}</span></strong></td>
            </tr>
            <tr>
                <td><a href="/menu" className="btn btn-warning"> Continue Shopping</a></td>
                <td colSpan="2" className="hidden-xs"></td>
                <td><a onClick={navigate} className="btn btn-primary btn-block" style={{"color":"white"}}>Checkout</a></td>
            </tr>
        </tfoot>
    </table>
    {!len ? (<h1 style={{textAlign:"center"}}>cart empty</h1>):null}
</div>
        </div>
    )
    else 
    return(
        <h1>loading .........</h1>
    )
    else
    return(
        <h1>please login</h1>
    )
}

export default Cart
