<template>
  <div class="school">
      <h2>学校名称:{{name}}</h2>
      <h2>学校地址:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
            name:'电子科技大学',
            address:'沙河'
        }
    },
    mounted(){
        // this.$bus.$on('hello',(data)=>{
        //     console.log('我是School组件，收到了数据',data)
        // })
        this.pubid=pubsub.subscribe('hello',function(msgName,data){
            console.log('hello',msgName,data)
        })
    },
    beforeDestroy(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubid)
    }
}
</script>
<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>