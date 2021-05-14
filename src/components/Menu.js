import React, { useState, useEffect } from 'react'
import '../css/Menu.css'
import axios from 'axios'
import {useStateValue} from '../StateProvider'
function Menu() {
    const [{menu}] = useStateValue()
    console.log(menu)
  let addToCart = (name,price)=>{
    axios.post('https://ritcb-master.herokuapp.com/carts/add',{name:name,price:price},{
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token') 
        }
       }).then(res=>{
           if(res.data.msg==='item added')
           alert(res.data.msg)
       })
  }
    return (
        <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="">
    <section _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="menu_list mt-60 mb-60">
        <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="container">
            <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="row">
                <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="col-xl-12">
                    <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="section-title text-center mb-60">
                        <p _ngcontent-mov-c21="" _ngcontent-vbw-c21="">RITCB</p>
                        <h4 _ngcontent-mov-c21="" _ngcontent-vbw-c21="">Menu</h4>
                    </div>
                </div>
            </div>
            <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="row">
                <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" id="myTabContent" className="tab-content col-xl-12">
                    <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" id="dinner" role="tabpanel"
                        aria-labelledby="dinner-tab" className="tab-pane fade active show">
            <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="row center">
{
    menu.map((item,i)=>{
        if(i%2===0)
       return(
        <div key={item.name} _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="col-md-6">
                                <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="single_menu_list">
                                    <img _ngcontent-mov-c21="" _ngcontent-vbw-c21=""
                                        src={item.link}
                                        alt=""/>
                                    <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="menu_content">
                                        <h4 _ngcontent-mov-c21="" _ngcontent-vbw-c21="">{item.name}<span
                                                _ngcontent-mov-c21="" _ngcontent-vbw-c21="">₹{item.price}</span></h4>
                                        <button onClick={()=>{addToCart(item.name,item.price)}} _ngcontent-mov-c21=""  className="btn btn-dark">Add to
                                            Cart</button>
                                    </div>
                                </div>
                            </div>
       )
       else
       return(
        <div key={item.name} _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="col-md-6">
                                <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="single_menu_list">
                                    <img _ngcontent-mov-c21="" _ngcontent-vbw-c21=""
                                        src={item.link}
                                        alt=""/>
                                    <div _ngcontent-mov-c21="" _ngcontent-vbw-c21="" className="menu_content">
                                        <h4 _ngcontent-mov-c21="" _ngcontent-vbw-c21="">{item.name}<span
                                                _ngcontent-mov-c21="" _ngcontent-vbw-c21="">₹{item.price}</span></h4>
                                        <button onClick={()=>{addToCart(item.name,item.price)}} _ngcontent-mov-c21="" type="button" className="btn btn-dark">Add to
                                            Cart</button>
                                    </div>
                                </div>
                            </div>
                            
       )
    })
}
</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
    )
}

export default Menu