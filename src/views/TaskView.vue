<template>
  <div>
    <h2>Todo List ({{ taskStore.remainingTasksCount }} remaining)</h2>
    <div class="input-group mb-3">
      <input type="text" class="form-control" v-model="newTodo" @keyup.enter="addTodo()">
      <button class="btn btn-primary" @click="addTodo()">Add</button>
    </div>
    <ul class="list-group">
      <li class="list-group-item" v-for="(todo, index) in taskStore.tasks" :key="index">
        <input type="checkbox" /> {{ todo.title }}
        <button class="btn btn-danger btn-sm float-end" @click="removeTodo(todo.id)">Remove</button>
      </li>
    </ul>
  </div>
</template>
<script>
import { useTaskStore } from "@/stores/TastStore.js";

export default {
  setup() {
    const taskStore = useTaskStore();

    return {
      taskStore,
    };
  },
  data() {
    return {
      newTodo: '',
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim()!== '') {
        this.taskStore.addTask({ id: Date.now(), title: this.newTodo.trim(), isDone: false });
        this.newTodo = '';
      }
    },
    removeTodo(taskId) {
      this.taskStore.removeTask(taskId);
    }
  },
};
</script>
  