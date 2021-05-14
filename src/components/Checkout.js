import React from 'react'
import { useStateValue } from '../StateProvider'
function Checkout() {
    const [{cart, total}] = useStateValue()
    return (
        <div className="jumbotron text-center">
        <h1 className="display-3">Your Order Details</h1>
        <hr/>
        <p className="lead"><strong>Items for Checkout</strong></p>


        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Sub Total</th>
                </tr>
            </thead>
            <tbody>
           
                {
                    cart.map(item=>
                        <tr>
                        <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                    </tr>
                    )
                  }
                
            </tbody>
        </table>

        <p><strong>TOTAL AMOUNT TO BE PAID IS<span style={{fontSize:"xxx-large"}}> ₹{total}</span></strong></p>
        <hr/>
        <a className="btn btn-primary btn-lg" href="/cart">GO BACK TO CART</a>
        <hr/>
        <p className="lead"><strong>PAYMENT OPTIONS</strong> Complete Payment to Proceed</p>
        <hr/>
        <a target="_blank" href="https://paytm.com/"><img style={{width:"130px",height:"130px",margin:"30px",borderRadius:"90px"}}
                src="data:image/png;base64,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" alt="PayTm logo"
                className="center"/></a>
        <a target="_blank" href="https://pay.google.com/"><img style={{width:"130px",height:"130px",margin:"30px",borderRadius:"90px"}}
                src="https://pbs.twimg.com/profile_images/1227147138443902976/47dtI8g3_400x400.jpg" alt="GPay logo"
                className="center"/></a>
        <a target="_blank" href="https://phonepe.com/"><img style={{width:"130px",height:"130px",margin:"30px",borderRadius:"90px"}}
                src="https://pbs.twimg.com/profile_images/1228394203421372416/4X3QZazb_400x400.jpg" alt="PayPal logo"
                className="center"/></a>
        <hr/>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href={"https://ritcb-master.herokuapp.com/paytm/testtxn?token="+localStorage.getItem('token')}  role="button" style={{color:"white"}}>PROCEED PAYTM</a>
        </p>
    </div>
    )
}   

export default Checkout
