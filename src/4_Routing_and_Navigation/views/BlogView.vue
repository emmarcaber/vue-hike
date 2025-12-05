<script setup>
const posts = [
  { id: 1, title: 'Understanding Vue Router' },
  { id: 2, title: 'Lifecycle Hooks Deep Dive' },
  { id: 3, title: 'Reusable Composables in Vue 3' },
]
</script>

<template>
  <div class="p-6 text-center">
    <h1 class="text-2xl font-bold mb-4">📝 Blog Posts</h1>
    <ul class="space-y-2">
      <li v-for="post in posts" :key="post.id" class="p-2 border-b">
        <RouterLink :to="`/user/${post.id}`" class="text-blue-500 hover:underline">
          {{ post.title }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
