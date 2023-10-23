<template>
  <div>
    <div class="display">
      <input type="number" v-model:="operand1">
      <input type="number" v-model:="operand2">
      = {{ result }}
    </div>
    <div class="keyboard">
      <button>+</button>
      <button>-</button>
      <button>/</button>
      <button>*</button>
    </div>
  </div>
</template>

<script>
export default{
  name: 'Calculator',
  props: {
    operand1: 0,
    operand1: 0,
    result: 0,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
