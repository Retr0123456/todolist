<script lang='ts' setup>
import {MainStore} from '../store/index';
import {storeToRefs} from 'pinia'

// pinia
const store = MainStore();
const {selectedNum,totalNum,allChecked} = storeToRefs(store);
</script>

<template>
<div class="footer">
  <!-- @click="changeCheck" -->
  <el-checkbox v-model="allChecked" disabled  :label="'已选择'+ selectedNum +'/共计'+ totalNum" />
  <el-button type="danger" @click="store.deleteAllCheckTodo()">删除所选事项</el-button>
</div>
</template>

<style scoped>
.footer{
  border-top: 1px solid #e4e7ed;
  padding-top: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>