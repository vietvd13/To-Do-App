<template>
    <div :key="Rerender">
        <div v-if="ListTask.length > 0">
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

                <div class="zone-list-input" ref="listTask">
                    <input 
                        type="text" 
                        v-model="task.title" 
                        :class="handleTaskCompleted(task.status)"
                        :disabled="task.status"
                        @change="isEditTitleTask(index, task.title)"
                        spellcheck="false"
                    >
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

        <div v-else>
            <div class="zone-list">
                <span class="no-data">No Data</span>
            </div>
        </div>
    </div>
</template>

<script>
// Import validate
import { IsEmptyOrWhiteSpace } from '../helper/validate';

export default {
    name: 'ToDoList',
    computed: {
        isListTaskChange() {
            return this.$store.getters.listTask;
        },
        isFilterChange() {
            return this.$store.getters.typeFilter;
        }
    },
    watch: {
        isListTaskChange() {
            const type = this.$store.getters.typeFilter;

            if (type === 0) {
                this.ListTask = this.$store.getters.listTask;
            } else if (type === 1) {
                this.ListTask = this.$store.getters.listTask.filter(option => option.status === true);
            } else if (type === 2) {
                this.ListTask = this.$store.getters.listTask.filter(option => option.status === false);
            } else {
                this.ListTask = this.$store.getters.listTask;
            }
            
            this.Rerender += 1;
        },
        isFilterChange() {
            this.handleFilter();
        }
    },
    data() {
        return {
            ListTask: [],
            Rerender: 0,
        }
    },
    created() {
        const type = this.$store.getters.typeFilter;

        if (type === 0) {
            this.ListTask = this.$store.getters.listTask;
        } else if (type === 1) {
            this.ListTask = this.$store.getters.listTask.filter(option => option.status === true);
        } else if (type === 2) {
            this.ListTask = this.$store.getters.listTask.filter(option => option.status === false);
        } else {
            this.ListTask = this.$store.getters.listTask;
        }

        this.handleFilter();
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

            this.$store.dispatch('app/updateStatusTask', task)
                .then(() => {
                    let type = this.$store.getters.typeFilter;

                    this.$store.dispatch('app/setTypeFilter', type)
                        .then(() => {
                            this.handleFilter();
                        })
                        .catch(() => {
                            alert('You have error!');
                        })
                })
                .catch(() => {
                    alert('You have error!');
                });
        },

        handleTaskCompleted(status) {
            let currentClass = ['todo-title'];

            if (status) {
                currentClass.push('todo-task-done');
            }

            return currentClass.join(' ');
        },

        isEditTitleTask(index, title) {
            if (!IsEmptyOrWhiteSpace(title)) {
                let task = {
                    index: index,
                    title: title
                };

                this.$store.dispatch('app/updateTitleTask', task);

                alert('Update successful!');
            } else {
                alert('Please enter something!');
                this.$refs.listTask[index].childNodes[0].focus();
            }
        },

        handleFilter() {
            const type = this.$store.getters.typeFilter;

            if (type === 0) {
                this.ListTask = this.$store.getters.listTask;
            } else if (type === 1) {
                this.ListTask = this.$store.getters.listTask.filter(option => option.status === true);
            } else if (type === 2) {
                this.ListTask = this.$store.getters.listTask.filter(option => option.status === false);
            } else if (type === 3) {
                this.$store.dispatch('app/deleteAllTask')
                    .then(() => {
                        alert('Delete successfully!');
                    })
                    .catch(() => {
                        alert('You have error!');
                    })
            }
        }
    }
}
</script>

<style scoped>
    .zone-list {
        width: 100%;
        min-height: 30px;
        background-color: #98ded9;
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

    .zone-list-input {
        width: 70%;
        min-height: 30px;
        border-radius: 5px;
        padding: 5px;
    }

    .todo-title {
        width: 98%;
        height: 25px;
        padding: 5px 5px 5px 5px;
        font-size: 18px;
        overflow: hidden;
        margin: 0 auto;
        border-radius: 5px;
        border: none;
    }

    .todo-title:focus {
        outline: none;
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
        background-color: #fff;
        color: #000;
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

    .todo-task-done:disabled {
        background-color: #e1e5ea;
    }

    .no-data {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 100%;
        font-style: italic;
        font-weight: 500;
    }

</style>