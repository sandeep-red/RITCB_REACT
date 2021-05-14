import React from 'react'
import '../css/table.css'
function Table({columns,data,type}) {
    let index = columns.indexOf("_id");
if (index > -1) {
    columns.splice(index, 1);
}
 index = columns.indexOf("__v");
if (index > -1) {
    columns.splice(index, 1);
}

    let a = columns.indexOf("items")
    if (a > -1)
     columns.splice(a,1)
    a = columns.indexOf("total")
    if (a > -1)
     columns.splice(a,0,"items")
    console.log(columns)
    return (
        <div>
            <table>
            <tr>
                {
                    columns.map((name,i)=>{
                        if(i===columns.length-1 && type==="q")
                        return(
                            <>
                            <th>
                                {name}
                            </th>
                            <th>
                                
                            </th>
                            </>
                        )
                        else
                        return(
                            <th>
                                {name}
                            </th>
                        )
                    })
                }
                </tr>
                {
                    data.map((ele,i)=>{
                        delete ele._id
                        delete ele.__v
                        return(
                            <tr>
                                {
                                    columns.map((item,i)=>{
                                        if(item==="items")
                                       {
                                        return(
                                        <th>
                                            {ele[item].map(e=>{
                                                return(
                                                    <p>{e.name}-{e.qty}</p>
                                                )
                                            })}
                                        </th>
                                       )
                                       }
                                        if(item==="time")
                                        return(
                                        <td>
                                            {ele[item].slice(0,25)}
                                        </td>
                                       )
                                       if(i===columns.length-1 && type==="q"){
                                       return(
                                        <>
                                        <td>
                                            {ele[item]}
                                        </td>
                                               <td>
                                               <button>delete</button>
                                               </td>
                                        </>
                                       )
                                    }
                                        if(item!=="items")
                                       return(
                                        <td>
                                            {ele[item]}
                                        </td>
                                       )
                                       
                                    })
                                }
                            </tr>
                            
                        )
                    })    
                }
            </table>
        </div>
    )
}

export default Table
