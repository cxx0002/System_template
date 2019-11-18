<template>
  <div id="app">
    <body-header class="head" v-if="flag"></body-header>
    <router-view class="content" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      flag:true
    }
  },
  updated() {
    if(this.$route.path=='/login'){
      this.flag=false
    }else{
       this.flag=true
    }
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}
.head{
  height: 6.5%;
}
.content{
  height: 93.5%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

</style>
