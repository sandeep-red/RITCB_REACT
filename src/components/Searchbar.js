import React from 'react'
import { useStateValue } from '../StateProvider'
import '../css/searchbar.css'
function Searchbar({filter,data}) {
    // const [{orders}] = useStateValue()
    // console.log(orders)
    return (
        <div className="search">
            <input className="search__input" type="search" placeholder="OrderId/username" onChange={(e)=>{
                    console.log(e.target.value)
                   let arr= data.filter((ele)=>{
                        if(ele.orderId.toLowerCase().includes(e.target.value.toLowerCase())||ele.username.toLowerCase().includes(e.target.value.toLowerCase()))
                        return true
                    })
                    console.log(arr)
                    filter(arr)
            }}></input>
        </div>
    )
}

export default Searchbar
