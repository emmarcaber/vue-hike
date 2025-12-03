<template>
  <nav class="bg-gray-800 text-white p-4 flex gap-6 justify-center">
    <router-link to="/" class="hover:text-yellow-400">Home</router-link>
    <router-link to="/about" class="hover:text-yellow-400">About</router-link>
  </nav>

  <main class="p-6">
    <router-view></router-view>
  </main>
</template>
