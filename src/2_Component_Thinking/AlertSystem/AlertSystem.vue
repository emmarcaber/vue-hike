<script setup>
import AlertCard from './AlertCard.vue'

const close = () => {
  console.log('Alert closed')
}

const dismiss = () => {
  console.log('Alert auto dismissed')
}
</script>

<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="text-4xl font-bold mt-6 mb-12 text-center">Alert System</h1>

    <div class="space-y-4">
      <AlertCard type="info" :auto-dismiss="5" @close="close" @dismiss="dismiss">
        <template #icon> 🔔 </template>

        <template #header>Heads up!</template>

        This is an informational alert.

        <template #actions>
          <button class="text-blue-700 font-medium text-xs hover:underline">Learn more</button>
        </template>
      </AlertCard>

      <AlertCard type="success" :auto-dismiss="5" @close="close" @dismiss="dismiss">
        <template #icon> ✅ </template>

        <template #header>Success!</template>

        This is a success alert.

        <template #actions>
          <button class="text-green-700 font-medium text-xs hover:underline">View details</button>
        </template>
      </AlertCard>

      <AlertCard type="warning" @close="close" @dismiss="dismiss">
        <template #icon> ⚠️ </template>

        <template #header>Warning!</template>

        This is a warning alert.

        <template #actions>
          <button class="text-yellow-700 font-medium text-xs hover:underline">Take action</button>
        </template>
      </AlertCard>

      <AlertCard
        type="error"
        @close="() => console.log('closed')"
        @dismiss="() => console.log('auto dismissed')"
      >
        <template #icon> ❌ </template>

        <template #header>Error!</template>

        This is an error alert.

        <template #actions>
          <button class="text-red-700 font-medium text-xs hover:underline">Fix issue</button>
        </template>
      </AlertCard>
    </div>
  </div>
</template>
