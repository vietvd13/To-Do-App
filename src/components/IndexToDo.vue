<template>
    <div>
        <div class="todo">
            <h1>To Do</h1>
            <ToDoInput />
            <ToDoList />
            <ToDoFooter />
        </div>
    </div>
</template>

<script>
// Import component
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';
import ToDoFooter from './ToDoFooter';

export default {
    name: 'ToDo',
    components: {
        ToDoInput,
        ToDoList,
        ToDoFooter
    }
}
</script>

<style scoped>
    .todo {
        width: 30%;
        margin: 0 auto;
        margin-top: 80px;
    }

    .todo > h1 {
        text-align: center;
        font-weight: 800;
        font-size: 40px;
    }
</style>