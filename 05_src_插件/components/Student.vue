<template>
  <div>
      <h2>学校学生名称:{{name}}</h2>
      <h2>学校学生性别:{{sex}}</h2>
      <input type="text" v-fbind:value="name">
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