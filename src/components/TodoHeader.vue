<script lang='ts' setup>
import { ref } from 'vue';
import { Todo } from '../types/Todo';
import { MainStore } from '../store';

//pinia
const store = MainStore();

// 输入框
const inputStr = ref('');
const putTodo = () => { 
  const todo : Todo = {
    content:inputStr.value.trim(),
    checked:false,
    id:Date.now()
  }
  // 往todolist中添加数据
  store.putTodoItem(todo);
  // 清空文本框
  inputStr.value = '';
}
</script>


<template>
  <div class="card-header">
    <el-input v-model="inputStr" placeholder="请输入待办事项" @keydown.enter="putTodo"/>
    <el-button class="btn" type="success" @click="putTodo">添加</el-button>
  </div>
</template>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #e4e7ed;
}

.card-header > .btn{
  margin-left: 15px;
}
</style>