<template>
  <div class="hello">

  </div>
</template>

<script>
  import getAllItem from '../api/package'
export default {
  name: 'HelloWorld',
  mounted(){

  },
  data () {
    return {
      data: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
