<template>
  <div id="app">
    <todo-header/>
    <todo-input @addTodoItem="addOneItem"/>
    <todo-list :todoItemsProps="todoItems" @removeItem="removeOneItem" @toggleItem="toggleOneItem"/>
    <todo-footer @clearAll="clearOneItem"/>

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
    return {
      todoItems : []
    }
  },
  methods : {
    addOneItem : function(todoItem) {
      const objectValue = {completed: false, item : todoItem}
      localStorage.setItem(todoItem, JSON.stringify(objectValue))
      this.todoItems.push(objectValue)
    },
    removeOneItem : function(todoItem, index) {
      localStorage.removeItem(todoItem.item)
      //특정인덱스에서 1개를 지움
      this.todoItems.splice(index, 1)
    },
    toggleOneItem : function(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearOneItem : function() {
      localStorage.clear()
      this.todoItems = []
    }
  },
  created : function() {
    if (localStorage.length > 0) {
      Object.values(localStorage).forEach((item) => {
        if (item !== 'SILENT') {
          this.todoItems.push(JSON.parse(item))
        }
      });
    }
  },
  components: {
    'TodoHeader' : TodoHeader,
    'TodoInput' : TodoInput,
    'TodoList' : TodoList,
    'TodoFooter' : TodoFooter
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
