import {useState} from 'react'
import List from './List'

const Todo = () => {
    const[data, setData]=useState('')
    const[item, setItem]= useState([])
    const addItem=()=>{
        if(!data){
            console.log('Enter data')
        }else{
        setItem([...item, data])
        setData('')
        }
    }
const deleteItem=(id)=>{
    const deletedItem= item.filter((elem, index)=>{
        return index!==id
    })
    setItem(deletedItem)
}
   
  return (
    <div className='main'>
        <h2><u>Todo List </u></h2>
        <div className='inputdatas'>
            
        <input 
        type='text'
        placeholder='Add Items....'
        value={data}
        onChange={(e)=>setData(e.target.value)}/>
        <button className='btn'onClick={addItem}>ADD</button>
        </div>
        <div>
            {item.map((elem, index)=>{
                 return <List elem={elem} key={index} index={index} deleteItem={deleteItem} />  
            })}
        </div>
    </div>
  )
}

export default Todo