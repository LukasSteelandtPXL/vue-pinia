import { defineStore } from 'pinia';

export const useTaskStore = defineStore({
    id: 'task',
    state: () => ({
        tasks: [],
    }),
    getters: {
        remainingTasksCount() {
            return this.tasks.filter(task => !task.isDone).length;
        },
    },
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
        removeTask(taskId) {
            const index = this.tasks.findIndex(task => task.id === taskId);
            if (index !== -1) {
                this.tasks.splice(index, 1);
            }
        },
    },
});