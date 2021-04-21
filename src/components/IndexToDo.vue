<template>
    <div>
        <div>
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

</style>