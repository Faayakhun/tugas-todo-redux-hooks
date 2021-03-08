import React, {useState} from 'react'
import {connect} from 'react-redux'
import {addTodos} from '../action/todos.action'

function Todos(props) {

const [newTodos,setNewTodos] = useState('')
function handleOnChange (val) {
    setNewTodos(val.target.value)
}

return (
    <div>
            <input onChange={handleOnChange} />
            <button onClick={()=> props.addTodos(newTodos)}>OK</button>
        
        {props.todoList.map((item, index) => {
            return <h2 key={index}>{item.name}</h2>
        })}
    </div>
)
}
const mapStatetoProps =(props) => {
    console.log(props)
    return {
        todoList: props
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTodos: (newTodos) => dispatch(addTodos(newTodos))
    }
}

export default connect (mapStatetoProps,mapDispatchToProps)(Todos)