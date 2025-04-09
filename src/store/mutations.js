const addOneItem = (state, payload) => {
    const objectValue = {completed: false, item : payload}
    localStorage.setItem(payload, JSON.stringify(objectValue))
    state.todoItems.push(objectValue)
}
const removeOneItem = (state, payload) => {
    localStorage.removeItem(payload.todoItem.item)
    //특정인덱스에서 1개를 지움
    state.todoItems.splice(payload.index, 1)
}
const toggleOneItem = (state, payload) => {
    state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
    localStorage.removeItem(payload.todoItem.item)
    localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
}
const clearOneItem = (state) => {
    localStorage.clear()
    state.todoItems = []
}

export { addOneItem, removeOneItem, toggleOneItem, clearOneItem }