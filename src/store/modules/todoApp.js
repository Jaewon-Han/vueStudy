const storage = {
    fetch() {
        const arr = []
        if (localStorage.length > 0) {
            Object.values(localStorage).forEach((item) => {
                if (item !== 'SILENT') {
                    arr.push(JSON.parse(item))
                }
            });
        }
        return arr
    }
}

const state = {
    todoItems : storage.fetch()
}

const getters = {
    storedTodoItems(state){
        return state.todoItems
    }

}

const mutations = {
    addOneItem(state, payload){
    const objectValue = {completed: false, item : payload}
    localStorage.setItem(payload, JSON.stringify(objectValue))
    state.todoItems.push(objectValue)
    },
    removeOneItem(state, payload) {
        localStorage.removeItem(payload.todoItem.item)
        //특정인덱스에서 1개를 지움
        state.todoItems.splice(payload.index, 1)
    },
    toggleOneItem(state, payload) {
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        localStorage.removeItem(payload.todoItem.item)
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    },
    clearOneItem(state) {
        localStorage.clear()
        state.todoItems = []
    },
}

export default  { state, getters, mutations}