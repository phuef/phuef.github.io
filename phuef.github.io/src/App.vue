<template>
<div>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <StartingPage />
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import StartingPage from './components/StartingPage.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    StartingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
