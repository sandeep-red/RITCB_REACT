import React from 'react'
import '../css/menuitem.css'
export default function Menuitem({item}) {
    return (
        <div className="menuitem" >
            <img className="menuitem_img" src={item.link}></img>
            <p className="menuitem_p"><span>{item.name}</span><span>₹{item.price}</span></p>

            {/* <p className="menuitem_p">rs.50</p> */}
            {
                !item.flag? <button className="menuitem_button">Add To Menu</button>: <button className="menuitem_button">Remove From Menu</button>
            }
           
        </div>
    )
}
