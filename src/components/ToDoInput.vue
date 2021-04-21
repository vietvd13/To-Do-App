<template>
  <div>
    <div class="zone-input">
      <h2>Enter new task</h2>
      <input 
        type="text" 
        name="Input New Task" 
        class="todo--input" 
        spellcheck="false"
        v-model="newTask"
        @keyup.enter="addNewTask()"
      >
      <p style="margin-bottom: 10px; font-size: 13px; color: #fff;">Total number of tasks available: {{ count }}</p>
    </div>
  </div>
</template>

<script>
// Import validate
import { IsEmptyOrWhiteSpace } from '../helper/validate';

export default {
    name: 'ToDoInput',
    computed: {
      isListTaskChange() {
        return this.$store.getters.originListTask;
      }
    },
    watch: {
      isListTaskChange() {
        this.count = this.$store.getters.originListTask.length;
      }
    },
    data() {
      let lengthListTask = this.$store.getters.originListTask.length;
      return {
        newTask: '',
        count: lengthListTask,
      }
    },
    methods: {
      addNewTask() {
        let title = this.handle2String(this.newTask);

        if (!IsEmptyOrWhiteSpace(title)) {
          let newTask = {
            status: false,
            title: title
          }

          this.$store.dispatch('app/setNewTask', newTask);
          this.newTask = '';
        } else {
          alert('Please enter something!');
        }
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
    background-color: #161d6f;
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

 .zone-input > h2 {
   margin-top: 5px;
   margin-bottom: 10px;
   color: #fff;
   font-size: 20px;
 }
</style>