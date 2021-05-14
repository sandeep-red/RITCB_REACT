import React from 'react'
import {useStateValue} from '../StateProvider'
function User() {
    const [{user}] = useStateValue()
    console.log(user)
    return (
        <div>
            <h1>welcome {user}</h1>
            <button onClick={()=>{
                localStorage.removeItem('token')
                window.location.reload()
            }}>log out</button>
        </div>
    )
}

export default User
