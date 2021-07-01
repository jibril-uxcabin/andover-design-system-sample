<template>
  <div class="hello">
    <!-- extract date from props -->
    <h1>{{ msg }}</h1>
    <h2>{{ age }}</h2>

    <!-- use data from state -->
    <h1>{{ name }}</h1>

    <!-- nice for loop -->
    <div v-for="char in items" :key="char">
      <div>
        {{char}}
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    age: Number
  },
  data: () => ({
    name: 'test',
    items: ['a', 'b', 'c']
  })
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
