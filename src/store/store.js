import Vuex from 'vuex'
import todoApp from './modules/todoApp'

const store = new Vuex.Store({
    modules : {
        todoApp : todoApp
    },
    actions : {
        addOneItemActions(context, payload) {
           context.commit("addOneItem", payload)
        },
    }
})

export default store