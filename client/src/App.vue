<template>
  <div id="app">
    <h1>测试API请求</h1>

  </div>
</template>

<script>
import Api from './utils/api';
export default {
  name: 'app',
  created(){
    // 测试API
    Api.getInfoNoToken().then(resp=>{
      console.log("getInfoNoToken->data",resp.data);
    });
    Api.getUserInfo().then(resp=>{
      console.log("getUserInfo->data",resp.data);
    });

    Api.postLogin("张三","123456").then(resp=>{
      console.log("postLogin->data",resp.data);
    });

    
    Api.postLoginByForm("张三","123456").then(resp=>{
      console.log("postLogin->data",resp.data);
    });

    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
