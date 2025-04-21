import {fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItemInfo} from "@/api";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(response => {
        commit('SET_NEWS', response.data)
      })
      .catch(error => {
        console.log(error)
      })
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => {
        commit('SET_JOBS', data)
      })
      .catch()
  },
  FETCH_ASKS({ commit }) {
    fetchAskList()
      .then(({ data }) => {
        commit('SET_ASKS', data)
      })
  },
  FETCH_USER({ commit }, userName) {
    fetchUserInfo(userName)
      .then(({ data }) => {
        commit('SET_USER', data)
      })
  },
  FETCH_ITEMS({ commit }, askId) {
    fetchItemInfo(askId)
      .then(( { data }) => {
        commit('SET_ITEMS', data)
      })
  }

}
