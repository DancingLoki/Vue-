<template>
  <div class="school">
      <h1>{{msg}}</h1>
      <h2>学校学生名称:{{name}}</h2>
      <h2>学校学生性别:{{sex}}</h2>
      <h2>年龄:{{myAge+1}}</h2>
      <button @click="updateAge">尝试修改年龄</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            msg:'我是沙河的学生',
            myAge:this.age
        }
    },
    methods:{
        updateAge(){
            this.myAge++
        }
    },
    props:['name','sex','age'] // (简单声明接收)

    // 接收的同时对数据类型进行限制
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String
    // }

    // 接收同时对数据：进行类型限制+默认值的指定+必要性的限制
    // props:{
    //     name:{
    //         type:String,
    //         required:true // 名字是必传的
    //     },
    //     age:{
    //         type:Number,
    //         default:99 // 默认值
    //     },
    //     sex:{
    //         type:String,
    //         required:true
    //     }
    // }
}
</script>