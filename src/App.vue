<template>
  <AppHeader
      :str="str"
      @renew="renewValue"
  />
  <form @submit.prevent="submitForm">
    <div>
      <label for="userName"> id : </label>
      <input id="userName" type="text" v-model="userName"/>
    </div>
    <div>
      <label for="password"> pw : </label>
      <input id="password" type="password" v-model="userPassword"/>
    </div>
    <button type="submit">Login</button>
  </form>
</template>


<script>
import AppHeader from "@/components/AppHeader.vue";
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return {
      str: "Header!!!!",
      //데이터 보관함
      userName : "",
      userPassword : "",
    }
  },
  methods : {
    renewValue : function() {
      return this.str = "reNewValue"
    },
    submitForm : function() {
      console.log(this.userName, this.userPassword)

      //http 통신 라이브러리 브라우저 -> 서버 데이터 주고받기 위한 라이브러리
      //post 생성, 변경
      const url = 'https://jsonplaceholder.typicode.com/users'
      const data = {
        userName : this.userName,
        userPassword : this.userPassword
      }
      axios.post(url, data)
          .then((response) => {
            console.log(response)
          })
          .catch((error) => {
            console.log(error)
          })
    }
  },
  components: {
    AppHeader : AppHeader,
  },
  routes: {

  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
