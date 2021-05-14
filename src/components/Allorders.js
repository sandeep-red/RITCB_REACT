import React, { useState, useEffect } from 'react'
import { useStateValue } from '../StateProvider'
import Table from './Table'
import Search from './Searchbar'
function Allorders() {
    const [{orders}] = useStateValue()
    const [order,setOrder] = useState([])
    useEffect(()=>{
        if(!order.length&&orders.length)
        setOrder(orders)
    },[order.length, orders])
    function filter(o){
        setOrder(o)
    }
    return (
        <div style={{background:"rgb(207, 226, 245)",overflow:"auto"}}>
           
           {
               order.length?
               <>
            <h1 style={{padding:"20px"}}>All orders</h1>
            <Search filter={filter} data={orders}/>
           <Table columns={Object.keys(order[0])} data={order} type="all"/></> :
           <h3 style={{background:"white"}}>loading ...........</h3>
           }
        </div>
    )
}

export default Allorders
