import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import '../css/admin.css'
import Axios from 'axios'
import { useStateValue } from '../StateProvider'
function Admin() {
    const [{orders},dispatch] = useStateValue()
    return (
        <div className="admin">
        <Link to='/admin/allorders'> 
        <button className='admin__button'>All orders</button>
        </Link>
        <Link to='/admin/changemenu'> 
        <button className='admin__button'>menu change</button>
        </Link>
        <Link to='/admin/currentq'> 
        <button className='admin__button'>Current queue</button>
        </Link>
        </div>
    )
}

export default Admin
