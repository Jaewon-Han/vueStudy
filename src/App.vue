<template>
  <div class="black-bg" v-if="isOpen">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="isOpen = false">닫기</button>
    </div>
  </div>

  <div class="menu">
   <a v-for="(menu, i) in menuArray" :key="i">
     {{ menu }}
   </a>
  </div>

  <div>
    <img src="./assets/logo.png" alt="img1" class="room-img">
    <h4 @click="isOpen = true">{{ productArray[0] }}</h4>
    <p>{{ price1 }} 만원</p>
    <button @click="increase(0)">허위매물신고</button> <span>신고수 : {{ count[0] }}</span>
  </div>
  <div>
    <img src="./assets/logo.png" alt="img2" class="room-img">
    <h4>{{ productArray[1] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button @click="increase(1)">허위매물신고</button> <span>신고수 : {{ count[1] }}</span>
  </div>
  <div>
    <img src="./assets/logo.png" alt="img3" class="room-img">
    <h4> {{ productArray[2] }}</h4>
    <p>{{ price2 }} 만원</p>
    <button @click="increase(2)">허위매물신고</button> <span>신고수 : {{ count[2] }}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      //데이터 보관함
      isOpen : false,
      count : [0, 0, 0],
      productArray : ["역삼동 원룸", "천호동 원룸", "마포구원룸"],
      menuArray : ["Home", "Shop", "About"],
      price1 : 60,
      price2 : 70,
    }
  },
  methods : {
    increase(data) {
      this.count[data]++;
    },
  },
  components: {
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

  .menu {
    background: darkslateblue;
    padding: 15px;
    border-radius: 5px;
  }
  .menu a {
    color: wheat;
    padding: 10px;
  }
  .room-img {
    width: 100%;
    height: 50px;
    margin-top: 40px;
  }
  body {
    margin: 0;
  }
  div {
    box-sizing: border-box;
  }
  .black-bg {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    padding: 20px;
  }
  .white-bg {
    width: 100%;
    background: white;
    border-radius: 8px;
    padding: 20px;
  }
</style>
