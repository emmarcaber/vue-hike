<script setup>
import { ref } from 'vue'

const newTodo = ref('')
const todos = ref(['Learn Vue.js', 'Build a Todo App', 'Master Composition API'])

const addTodo = () => {
  if (newTodo.value) {
    todos.value.push(newTodo.value)
    newTodo.value = ''
  }
}

const removeTodo = (index) => {
  todos.value.splice(index, 1)
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-4xl font-bold mb-6 text-center">Todo List</h1>
    <div class="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <div class="flex mb-4">
        <input
          v-model="newTodo"
          @keyup.enter="addTodo"
          type="text"
          placeholder="Add a new todo"
          class="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          @click="addTodo"
          class="px-4 py-2 bg-blue-500 text-white rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add
        </button>
      </div>
      <ul>
        <li
          v-for="(todo, index) in todos"
          :key="index"
          class="flex justify-between items-center bg-gray-50 p-3 mb-2 rounded-lg"
        >
          <span>{{ todo }}</span>
          <button
            @click="removeTodo(index)"
            class="text-red-500 hover:text-red-700 focus:outline-none"
          >
            Remove
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>
