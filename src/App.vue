<script setup lang="ts">
// 导入组件
import TodoHeader from './components/TodoHeader.vue'
import TodoBody from './components/TodoBody.vue'
import TodoFooter from './components/TodoFooter.vue'
</script>

<template>
 <el-card class="box-card">
    <!-- header -->
    <TodoHeader></TodoHeader>

    <!-- body -->
    <TodoBody></TodoBody>
    
    <!-- footer -->
    <TodoFooter></TodoFooter>
  </el-card>
</template>

<style scoped>
.box-card {
  width: 480px;
  margin: 0 auto;
}
</style>
