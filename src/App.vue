<template>
  <div id="app">
    <ToDo />
  </div>
</template>

<script>
// Import component
import ToDo from './components/IndexToDo';

export default {
  name: 'App',
  components: {
    ToDo
  }
}
</script>]

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

  body {
    background: #f6f6f6;
    font-family: 'Roboto', sans-serif;
  }
</style>
