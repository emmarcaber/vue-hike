<script setup>
import { ref, watch } from 'vue'

const books = [
  'The Great Gatsby',
  'To Kill a Mockingbird',
  '1984',
  'Pride and Prejudice',
  'The Catcher in the Rye',
  'The Hobbit',
  'Fahrenheit 451',
]

const searchTerm = ref('')
const filteredBooks = ref([...books])

watch(searchTerm, (newTerm) => {
  if (newTerm === '') {
    filteredBooks.value = [...books]
  } else {
    filteredBooks.value = books.filter((book) => book.toLowerCase().includes(newTerm.toLowerCase()))
  }
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-gray-100 space-y-6">
    <h1 class="text-5xl font-bold">Search Filter Component</h1>
    <div class="w-1/2">
      <input v-model.trim="searchTerm" placeholder="Search..." class="p-2 rounded w-full" />
    </div>

    <div class="w-1/2 bg-white p-4 rounded shadow">
      <ul>
        <li v-for="book in filteredBooks" :key="book" class="p-2 border-b">
          {{ book }}
        </li>
      </ul>
    </div>
  </div>
</template>
