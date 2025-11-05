<script setup>
import { ref, computed } from 'vue'
import TaskCreatorForm from './TaskCreatorForm.vue'
import TaskList from './TaskList.vue'

const todos = ref([
  {
    id: 1,
    title: 'Learn Vue.js',
    description: 'Understand the basics of Vue.js framework.',
    status: 'New',
  },
  {
    id: 2,
    title: 'Build a Task Tracker',
    description: 'Create a task tracking application using Vue components.',
    status: 'In Progress',
  },
  {
    id: 3,
    title: 'Master Component Thinking',
    description: 'Learn how to think in components for better UI design.',
    status: 'Completed',
  },
])

const statuses = {
  New: 'New',
  InProgress: 'In Progress',
  Completed: 'Completed',
}

const newTasks = computed(() => todos.value.filter((task) => task.status === statuses.New))
const inProgressTasks = computed(() =>
  todos.value.filter((task) => task.status === statuses.InProgress),
)
const completedTasks = computed(() =>
  todos.value.filter((task) => task.status === statuses.Completed),
)

const addTask = (task) => {
  if (!task.title || !task.description || !task.status) return
  todos.value.push({ ...task, id: getNextId })
}

const getNextId = () => {
  return todos.value.length ? Math.max(...todos.value.map((t) => t.id)) + 1 : 1
}

const updateTask = (updatedTask) => {
  const index = todos.value.findIndex((task) => task.id === updatedTask.id)
  if (index !== -1) {
    todos.value[index] = updatedTask
  }
}

const deleteTask = (id) => {
  todos.value = todos.value.filter((task) => task.id !== id)
}
</script>

<template>
  <!--

- Editable Tasks on click of edit, then there will be save button
- Create a form component to add new tasks with title, description, status
- Filter tasks based on status (All, New, In Progress, Completed)

-->
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-4xl font-bold mb-6 text-center">Task Tracker</h1>
    <div class="mb-6 text-center">
      <TaskCreatorForm @add-task="addTask" :statuses="Object.values(statuses)" />
    </div>
    <div
      class="flex flex-col md:flex-row items-start justify-around max-w-full gap-4 md:gap-8 mx-auto"
    >
      <TaskList
        :tasks="newTasks"
        :status="'New'"
        :classes="'bg-blue-100 border-blue-200'"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
      <TaskList
        :tasks="inProgressTasks"
        :status="'In Progress'"
        :classes="'bg-yellow-100 border-yellow-200'"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
      <TaskList
        :tasks="completedTasks"
        :status="'Completed'"
        :classes="'bg-green-100 border-green-200'"
        @delete-task="deleteTask"
        @update-task="updateTask"
      />
    </div>
  </div>
</template>
