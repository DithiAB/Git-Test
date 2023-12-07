import {useState } from 'react'
import './Todo.css'
const List = ({elem}) => {
    const[line, setLine]= useState(false)
    const completedTask=()=>{
        setLine(true)
    }
 
  return (
    <div className='list'>
        <p onClick={completedTask}style={{textDecoration:line?'line-through':'none'}}>{elem}</p>
       
    </div>
  )
  
}

export default List