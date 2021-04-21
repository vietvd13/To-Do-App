<template>
    <div>
        <div class="zone-footer" :key="Rerender">
            <div class="show-all">
                <button 
                    :style="isFilterClass(typeShow, 0)" 
                    @click="handleFilter(0)"
                >
                    All
                </button>
            </div>

            <div class="show-complete">
                <button 
                    :style="isFilterClass(typeShow, 1)" 
                    @click="handleFilter(1)"
                >
                    Complete
                </button>
            </div>

            <div class="show-process">
                <button 
                    :style="isFilterClass(typeShow, 2)" 
                    @click="handleFilter(2)"
                >
                    Process
                </button>
            </div>

            <div class="clear-all">
                <button 
                    :style="isFilterClass(typeShow, 3)" 
                    @click="handleFilter(3)"
                >
                    Clear all
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ToDoFooter',
    computed: {
        isTypeShowChange() {
            return this.typeShow;
        }
    },
    watch: {
        isTypeShowChange() {
            this.Rerender += 1;
        }
    },
    data() {
        let type = this.$store.getters.typeFilter;
        return {
            typeShow: type,
            Rerender: 0,
        }
    },
    methods: {
        isFilterClass(status, origin) {
            if (status === origin) {
                return `
                    min-width: 90%;
                    height: 90%;
                    justify-content: center;
                    border: none;
                    border-radius: 5px;
                    background-color: #f05945;
                    color: #fff;
                    cursor: pointer;
                `;
            }

            return `
                min-width: 90%;
                height: 90%;
                justify-content: center;
                border: none;
                border-radius: 5px;
                background-color: #fff;
                color: #000;
                cursor: pointer;
            `;
        },

        handleFilter(typeFilter) {
            if (typeFilter === 3) {
                let lengthListTask = this.$store.getters.listTask.length;

                if (lengthListTask > 0) {
                    if (confirm('Want to clear your task list?')) {
                        this.typeShow = typeFilter;

                        this.$store.dispatch('app/filterListTask', this.typeShow);

                        this.typeShow = 0;

                        this.$store.dispatch('app/setTypeFilter', this.typeShow);
                    }
                } else{
                    alert('No tasks exist to delete!');
                }
            } else {
                this.typeShow = typeFilter;

                this.$store.dispatch('app/filterListTask', this.typeShow);

                this.$store.dispatch('app/setTypeFilter', this.typeShow);
            }
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