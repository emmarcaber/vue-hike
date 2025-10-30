<script setup>
import TodoCard from './TodoCard.vue'

const emit = defineEmits(['delete-task', 'update-task'])

const props = defineProps({
  tasks: {
    type: Array,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div :class="['p-4 rounded-lg shadow-md mb-4 w-full', props.classes]">
    <h2 class="text-2xl font-bold mb-4">{{ props.status }}</h2>
    <div>
      <TodoCard
        v-for="task in props.tasks"
        :key="task.id"
        :id="task.id"
        :title="task.title"
        :description="task.description"
        :status="task.status"
        @delete-task="emit('delete-task', $event)"
        @update-task="emit('update-task', $event)"
      />
    </div>
  </div>
</template>
