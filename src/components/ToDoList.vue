<template>
    <div :key="Rerender">
        <div 
            class="zone-list" 
            v-for="(task, index) in ListTask" 
            :key="index"
        >
            <div class="todo-status">
                <input 
                    type="checkbox" 
                    v-model="task.status"
                    @change="isChangeStatusTask(index, task.status)"
                >
            </div>

            <div :class="handleTaskCompleted(task.status)">
                <span>
                    {{ task.title }}
                </span>
            </div>

            <div class="todo-remove">
                <button 
                    @click="isDeleteTask(index)"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToDoList',
    computed: {
        isListTaskChange() {
            return this.$store.getters.listTask;
        }
    },
    watch: {
        isListTaskChange() {
            this.ListTask = this.$store.getters.listTask;
            this.Rerender += 1;
        }
    },
    data() {
        return {
            ListTask: [],
            Rerender: 0,
        }
    },
    mounted() {
        this.ListTask = this.$store.getters.listTask;
    },
    methods: {
        isDeleteTask(index) {
            if (confirm(`Do you really want to delete this task?`)) {
                this.$store.dispatch('app/deleteTask', index);
            }
        },

        isChangeStatusTask(index, status) {
            let task = {
                index: index,
                status: status
            };

            this.$store.dispatch('app/updateStatusTask', task);
        },

        handleTaskCompleted(status) {
            let currentClass = ['todo-title'];

            if (status) {
                currentClass.push('todo-task-done');
            }

            return currentClass.join(' ');
        }
    }
}
</script>

<style scoped>
    .zone-list {
        width: 100%;
        min-height: 30px;
        background-color: #f5c0c0;
        padding: 7px 15px 7px 15px;
        padding-top: 7px;
        padding-bottom: 7px;
        display: flex;
        border-radius: 5px;
        margin-bottom: 5px;
        margin-top: 5px;
    }

    .todo-status {
        width: 10%;
        min-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .todo-title {
        width: 70%;
        min-height: 30px;
        background-color: #ffffff;
        border-radius: 5px;
        padding: 5px;
    }

    .todo-title > span {
        display: flex;
        align-items: center;
        min-height: 30px;
        word-break: break-all;
        font-weight: 600;
    }

    .todo-remove {
        width: 20%;
        min-height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .todo-remove > button {
        border: none;
        border-radius: 5px;
        padding: 5px 10px 5px 10px;
        background-color: #f25287;
        color: #ffffff;
        font-weight: 600;
        cursor: pointer;
    }

    .todo-remove > button:focus {
        outline: none;
    }

    .todo-task-done {
        font-style: italic;
        text-decoration: line-through;
        color: #909399;
    }

</style>