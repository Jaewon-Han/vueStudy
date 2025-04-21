import { createStore } from 'vuex'
import mutations from "@/store/mutations";
import actions from "@/store/actions";

const store = createStore({
  state : {
    news : [],
    jobs : [],
    asks : [],
    user : {},
    items : [],
  },
  getters : {
    fetchedAsk(state) {
      return state.asks
    },
    fetchedItems(state) {
      return state.items
    }

  },
  mutations,
  actions,
})

export default store
