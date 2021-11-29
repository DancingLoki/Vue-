<template>
  <div class="app">
    <h1>{{msg}},{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
      <School :getSchoolName="getSchoolName"></School>
      <hr>
      <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据 -->
      <Student v-on:atguigu="getStudentName" @demo="m1" @click.native="show"></Student>
  </div>
</template>

<script>
// 引入School组件
import Student from './components/Student.vue'
import School from './components/School.vue'
export default {
    name:'App',
    components:{Student,School},
    data(){
      return{
        msg:'你好啊',
        studentName:''
      }
    },
    methods:{
      getSchoolName(name){
        console.log(name)
      },
      getStudentName(name){
        console.log('getStudentName被调用了',name)
        this.studentName=name
      },
      m1(){
        console.log('demo事件被触发了')
      },
      show(){
        alert('123')
      }
    }


}
</script>
<style>
  .app{
    background-color: #ddd;
    padding: 5px;
  }
</style>