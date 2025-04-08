<template>
  <div id="app">
    <todo-header/>
    <todo-input/>
    <todo-list/>
    <todo-footer/>
  </div>
</template>


<script>
import TodoHeader from "@/components/TodoHeader.vue";
import TodoInput from "@/components/TodoInput.vue";
import TodoList from "@/components/TodoList.vue";
import TodoFooter from "@/components/TodoFooter.vue";

export default {
  name: 'App',
  data() {
  },
  methods : {

  },
  components: {
    //향상된 객체 리터럴 앞뒤가 똑같기 때문에 하나만 적용
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter
  },
  routes: {

  }

}
</script>

<style>
 body {
   text-align: center;
   background-color: #F6F6F6;
 }

 input {
   border-style: groove;
   width: 200px;
 }

 button {
   border-style: groove;
 }

 .shadow {
   box-shadow: 5px 10px 10px rgba(0,0,0, 0.03);
 }
</style>
