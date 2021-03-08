export const ADD_TODOS = "ADD_TODOS"

export const addTodos = (result) => {
    return {
        type: ADD_TODOS,
        result: {name: result},
    }
}