<!-- template -->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld
      age="5"
      comment1=" provide a non-stateful prop: attrName='value' "

      :msg="favoriteColor"
      comment2=" provide a stateful prop: :attrName='stateAttr' "
    />
  </div>
</template>

<!-- export and functionality -->
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data: () => ({
    favoriteColor: 'grey',
  }),
  components: {
    HelloWorld
  }
}
</script>

<!-- style -->
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
