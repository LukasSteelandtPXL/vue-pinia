import {defineStore} from 'pinia';

export const useExampleStore = defineStore('example', {
    state: () => ({
        counter: 0,
    }),
    getters: {
        isEven() {
            return this.counter % 2 === 0;
        },
    },
    actions: {
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        }
    },
});
