<script lang='ts' setup>
import { ref,Ref,watch} from 'vue';
import {MainStore} from '../store/index';
import {storeToRefs} from 'pinia';

//删除提示对话框---begin
const dialogVisible:Ref<Boolean> = ref(false);
const deletId:Ref<number> = ref(0);

const deleteTodo = () => {
  store.deleteTodo(deletId.value);
  dialogVisible.value = false; 
}


// todolist---begin
const store = MainStore();
const {TodoList} = storeToRefs(store);

//点击删除按钮
const deleteDialog = (index:number) => {
  dialogVisible.value = true;
  deletId.value = index;  
};

watch(TodoList,()=>{
  // 监听todolist，一有变化，马上存入localstorage中
  store.setTodoList();
},{deep:true});

// 页面加载时装载todolist数据
store.getTodoList();
</script>

<template>
<!-- 页面主体 -->
  <div class="body">

    <div class="item" v-for="(todo,index) in TodoList" :key="todo.id">
      <el-checkbox v-model="todo.checked" :label="todo.content" />
      <el-button type="danger" round @click="deleteDialog(index)">删除</el-button>
    </div>

  </div>

<!-- 删除确认框 -->
  <el-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
  >
    <span>确定删除？</span>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="danger" @click="deleteTodo()">
          是的
        </el-button>
      </span>
    </template>
  </el-dialog>

</template>

<style scoped>
.body{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-bottom: 15px;
}

.item{
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
  padding-top: 15px;
}
</style>