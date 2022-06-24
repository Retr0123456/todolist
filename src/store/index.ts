import {defineStore} from 'pinia'

import {Todo} from '../types/Todo'

export const MainStore = defineStore('main',{
  state:() => {
    return {
      TodoList:[
        {
          //实例数据
          content:'去埃及搬运压路机',
          checked:false,
          id:1
        }
      ]
    }
  },
  getters:{
    // 获取已选择的todo数量
    selectedNum(state):number{
      return state.TodoList.filter(todo => todo.checked).length;
    },
    // 获取全部todo数量
    totalNum(state):number{
      return state.TodoList.length;
    },
    // 是否全选状态
    allChecked(state):boolean{
      let flag:boolean = true;
      state.TodoList.forEach(todo => {
        if(!todo.checked){
          flag = false;
        }
      })
      return flag; 
    }
  },
  actions:{
    // 添加todo
    putTodoItem(todo:Todo){
      this.TodoList.unshift(todo);
    },
    // 删除todo
    deleteTodo(id:number){
      this.TodoList.splice(id,1);
    },
    // // 全选/全不选
    // changeChecked(flag:boolean){
    //   this.TodoList.forEach(todo => todo.checked = flag);
    // },
    // 删除所有未选中的todo
    deleteAllCheckTodo(){
      this.TodoList = this.TodoList.filter(todo => !todo.checked)
    },
    // 从localStorge中获取todolist
    getTodoList(){
      this.TodoList = JSON.parse(localStorage.getItem("todolist") || '[]');   
    },
    // 更新localStorge中的todolist
    setTodoList(){
      localStorage.setItem("todolist",JSON.stringify(this.TodoList));
    }
  }
})