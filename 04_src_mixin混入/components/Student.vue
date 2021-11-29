<template>
  <div class="school">
      <h2 @click="showName">学校学生名称:{{name}}</h2>
      <h2>学校学生性别:{{sex}}</h2>
  </div>
</template>

<script>
import{mixin} from'../mixin'
export default {
    name:'Student',
    data() {
        return {
            name:'我是沙河的学生',
            sex:'男'
        }
    },
    mixins:[mixin]
    
}
</script>