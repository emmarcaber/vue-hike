<template>
  <nav class="bg-gray-800 text-white p-4 flex gap-6 justify-center">
    <RouterLink to="/" class="hover:text-yellow-400">Home</RouterLink>
    <RouterLink to="/about" class="hover:text-yellow-400">About</RouterLink>
  </nav>

  <main class="p-6">
    <RouterView></RouterView>
  </main>
</template>
