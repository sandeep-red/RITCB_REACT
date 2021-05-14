import React from 'react'
import { useStateValue } from '../StateProvider'
import '../css/q.css'
function Q({q}) {
    const [{currentQ}] = useStateValue()
    console.log(currentQ)
    return (
        <div className='q'>
        <div className="q__details1">
           <h4>Name:{q.username}</h4>
           <h5>OrderId:{q.orderId}</h5>
           <h6>Items:{q.items.join(',')}</h6>
        </div>
        <div className='q__details2'>
        <p>price:{q.total}</p>
        <button>Delete</button>
        </div>
        </div>
    )
}

export default Q
