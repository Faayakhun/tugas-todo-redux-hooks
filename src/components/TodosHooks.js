import {useDispatch, useSelector} from 'react-redux'
import React, {useState} from 'react'
import {addTodos} from '../action/todos.action'

function TodosHooks() {
    
    const dispatch = useDispatch()
    const todoList = useSelector((state)=>state.todoList)
    const [newTodos,setNewTodos] = useState()
    function handleOnChange (val) {
    setNewTodos(val.target.value)
}

    return (
        <div>
                <input onChange={handleOnChange} />
                <button onClick={()=> dispatch((addTodos(newTodos)))}>OK</button>
            
            {todoList.map((item, index) => {
                return <h2 key={index}>{item.name}</h2>
            })}
        </div>
    )
}

export default TodosHooks