<template>
	<div>
		<ul>
      <li v-for="(todoItem, index) in todoItems" :key="index" class="shadow">
        <i class="checkBtn fas fa-check" :class="{checkBtnCompleted : todoItem.completed}" @click="toggleComplete(todoItem)">체크</i>
        <span :class="{textCompleted : todoItem.completed}">{{ todoItem.item }} </span>
        <span class="removeBtn" @click="removeTodo(todoItem, index)">
          <i class="fas fa-trash-alt">삭제</i>
        </span>
      </li>
		</ul>
	</div>
</template>

<script>

export default {
  created : function() {
    if (localStorage.length > 0) {
      Object.values(localStorage).forEach((item) => {
        if (item !== 'SILENT') {
          this.todoItems.push(JSON.parse(item))
        }
     });
    }
  },
  data () {
		return {
			todoItems: []
		}
	},
	methods: {
    removeTodo : function(todoItem, index) {
      localStorage.removeItem(todoItem)
      //특정인덱스에서 1개를 지움
      this.todoItems.splice(index, 1)
    },
    toggleComplete : function(todoItem) {
      todoItem.completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    }
	},
};
</script>

<style scoped>
ul {
	list-style-type: none;
	padding-left: 0px;
	margin-top: 0;
	text-align: left;
}
li {
	display: flex;
	min-height: 50px;
	height: 50px;
	line-height: 50px;
	margin: 0.5rem 0;
	padding: 0 0.9rem;
	background: white;
	border-radius: 5px;
}
.checkBtn {
	line-height: 45px;
	color: #62acde;
	margin-right: 5px;
}
.checkBtnCompleted {
	color: #b3adad;
}
.textCompleted {
	text-decoration: line-through;
	color: #b3adad;
}
.removeBtn {
	margin-left: auto;
	color: #de4343;
}

</style>