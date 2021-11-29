<template>
  <div class="demo">
      <h2>学校学生名称:{{name}}</h2>
      <h2 class="qwe">学校学生性别:{{sex}}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name:'我是沙河的学生',
            sex:'男'
        }
    }
}
</script>
<style lang="less">
    .demo{
        background-color: pink;
        .qwe{
            font-size: 40px;
        }
    }
</style>