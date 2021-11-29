<template>
  <div class="student">
      <h2>学校学生名称:{{name}}</h2>
      <h2>学校学生性别:{{sex}}</h2>
      <button @click="sendStudentName">把学生名给School组件</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'我是沙河的学生',
            sex:'男',

        }
    },
    mounted(){

    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    }
}
</script>
<style lang="less">
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>