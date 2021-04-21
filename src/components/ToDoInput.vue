<template>
  <div>
    <div class="zone-input">
      <input 
        type="text" 
        name="Input New Task" 
        class="todo--input" 
        spellcheck="false"
        v-model="newTask"
        @keyup.enter="addNewTask()"
      >
    </div>
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
        let newTask = {
          status: false,
          title: this.handle2String(this.newTask)
        }

        this.$store.dispatch('app/setNewTask', newTask);
        this.newTask = '';
      },

      handle2String(val) {
        return val + '';
      }
    }
}
</script>

<style scoped>
  .zone-input {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-align: center;
    padding: 7px 15px 7px 15px;
    background-color: #007580;
    border-radius: 5px;
  }

 .todo--input {
    width: 90%;
    height: 25px;
    padding: 5px 5px 5px 5px;
    font-size: 18px;
    overflow: hidden;
    margin: 0 auto;
    border-radius: 5px;
    border: none;
 }

 .todo--input:focus {
   outline: none;
 }
</style>