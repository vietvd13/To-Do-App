<template>
  <div>
    <input 
      type="text" 
      name="Input New Task" 
      class="todo--input" 
      spellcheck="false"
      v-model="newTask"
      @keyup.enter="addNewTask()"
    >
  </div>
</template>

<script>
export default {
    name: 'ToDoInput',
    data() {
      return {
        newTask: ''
      }
    },
    methods: {
      addNewTask() {
        console.log('Start Do Add New Task!');

        let newTask = this.handle2String(this.newTask);
        this.$store.dispatch('app/setNewTask', newTask);
        this.newTask = '';

        console.log('End Do Add New Task!');

        console.log('List Task After Add');
        console.log(this.$store.getters.listTask);
      },

      handle2String(val) {
        return val + '';
      }
    }
}
</script>

<style scoped>
 .todo--input {
    width: 100%;
    height: 40px;
    padding: 5px 10px 5px 10px;
    font-size: 25px;
 }

 .todo--input:focus {
   outline: none;
 }
</style>