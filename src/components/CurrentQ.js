import React, { useState, useEffect }  from 'react'
import Q from './Q'
import '../css/q.css'
import Table from './Table'
import Search from './Searchbar'
import { useStateValue } from '../StateProvider'
function CurrentQ() {
    const [{currentQ}] = useStateValue()
    const [q,setq] = useState([])
    useEffect(()=>{
        if(!q.length&&currentQ.length)
        setq(currentQ)
    },[q.length, currentQ])
    function filter(o){
        setq(o)
    }
    return (
        <div style={{background:"rgb(207, 226, 245)",overflow:"auto"}}>
       
       { q.length?<>
        <h1 style={{padding:"20px"}}>All currentQ</h1>
        <Search filter={filter} data={currentQ}/>
       <Table columns={Object.keys(q[0])} data={q} type="q"/> </>:
       <h3 style={{background:"white"}}>loading....</h3>
       }
    </div>
    )
}

export default CurrentQ