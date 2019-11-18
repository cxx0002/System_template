<template>
  <div>
  <div class="content">
    <Button type="primary" @click="login">Primary</Button>
  </div>
  </div>
</template>

<script>
import { getMoviesRy } from '../request/api'
export default{
  data(){
    return {
      msg:'',
    }
  },
  methods:{
    login(){
      console.log(process.env.API_ROOT);
      localStorage.clear();
     this.$router.push({path:'/login'})
    }
  },
  created(){

  },
  mounted(){
  }
}
</script>

<style scoped>
  div{
    width: 100%;
    flex: 1;
  }
</style>
