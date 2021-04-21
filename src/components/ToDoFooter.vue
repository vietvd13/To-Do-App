<template>
    <div>
        <div class="zone-footer" v-if="cout > 0">
            <div class="show-all">
                <button>All</button>
            </div>

            <div class="show-complete">
                <button>Complete</button>
            </div>

            <div class="show-process">
                <button>Process</button>
            </div>

            <div class="clear-all">
                <button>Clear all</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToDoFooter',
    computed: {
        isListTaskChange() {
            return this.$store.getters.listTask;
        }
    },
    watch: {
        isListTaskChange() {
            this.cout = this.$store.getters.listTask.length;
        }
    },
    data() {
        let lenghtTask = this.$store.getters.listTask.length;
    
        return {
            cout: lenghtTask,
        }
    }
}
</script>

<style scoped>
    .zone-footer {
        width: 100%;
        height: 30px;
        background-color: #9fd8df;
        padding: 7px 15px 7px 15px;
        margin-top: 5px;
        border-radius: 5px;
        display: flex;
    }

    .show-all {
        width: 25%;
        min-height: 30px;
    }

    .show-process {
        width: 25%;
        min-height: 30px;
    }

    .show-complete {
        width: 25%;
        min-height: 30px;
    }

    .clear-all {
        width: 25%;
        min-height: 30px;
    }

    .zone-footer > div > button {
        min-width: 90%;
        height: 90%;
        justify-content: center;
        border: none;
        border-radius: 5px;
        background-color: #fff;
        color: #000;
    }

    .zone-footer > div > button:focus {
        outline: none;
    }
</style>