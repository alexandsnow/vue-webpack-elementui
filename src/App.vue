<template>
  <div id="app">
    <topBar></topBar>
    <el-row class='content'>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>

import topBar from './components/topBar.vue'
import appState from './components/appState.vue'

export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components:{topBar,appState}
}
</script>

<style>
*{
    margin: 0;
    padding: 0
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.content{
  margin:20px 5px 20px 5px;
  padding: 20px 5px 10px 5px;
}
</style>
