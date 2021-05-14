import React from 'react'
import { useStateValue } from '../StateProvider'
import Menuitem from './Menuitem'
function Changemenu() {
    const [{menu}] = useStateValue()
    console.log(menu)
    return (
        <div style={{backgroundColor:"rgb(207, 226, 245)",overflow:"auto"}}>
            <h1>change menu</h1>
            {
                menu.map(item=>{
                    return <Menuitem item={item}/>
                })
            }
    
        </div>
    )
}

export default Changemenu
