import {useState } from 'react'
import './Todo.css'
const List = ({elem,index, deleteItem}) => {
    const[line, setLine]= useState(false)
    const completedTask=()=>{
        setLine(true)
    }
 
  return (
    <div className='list'>
        <p onClick={completedTask}style={{textDecoration:line?'line-through':'none'}}>{elem}</p>
        <i  onClick={()=>deleteItem(index)}className="fa fa-trash" aria-hidden="true"></i>
    </div>
  )
  
}

export default List