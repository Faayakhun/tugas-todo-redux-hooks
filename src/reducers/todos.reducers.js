import { ADD_TODOS, } from '../action/todos.action'

const initialState = {
    todoList: [
        {
            "name": "coding"
        },
        {
            "name": "eat"
        },
        {
            "name": "sleep"
        },
    
    ]
}
       

const addTodos = (state=initialState, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                todoList: [...state.todoList,action.result]
            }
        default:
            return state
    }
}


export default addTodos