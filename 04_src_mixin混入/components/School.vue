<template>
  <div class="school">
      <h2 @click="showName">学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
// 引入一个混合
import{mixin} from'../mixin'
export default {
    name:'School',
    data() {
        return {
            name:'电子科技大学',
            address:'沙河'
        }
    },
    mixins:[mixin]
    
}
</script>