<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
  },
  message: {
    tyoe: String,
    default: '',
  },
  dismissible: {
    type: Boolean,
    default: true,
  },
  autoDismiss: {
    type: Number,
    default: 0,
  },
  closeLabel: {
    type: String,
    default: 'Close',
  },
})

const emit = defineEmits(['close', 'dismiss'])

const close = () => {
  emit('close')
}

const variantClasses = {
  success: 'bg-green-100 border-green-500 text-green-700',
  info: 'bg-blue-100 border-blue-500 text-blue-700',
  warning: 'bg-yellow-100 border-yellow-500 text-yellow-700',
  error: 'bg-red-100 border-red-500 text-red-700',
}

if (props.autoDismiss > 0) {
  setTimeout(() => {
    emit('dismiss')
  }, props.autoDismiss * 1000)
}
</script>

<template>
  <div
    :class="[
      'rounded-xl border p-4 shadow-sm flex gap-4 relative transition-all',
      variantClasses[type],
    ]"
    role="status"
    :aria-live="type === error ? 'assertive' : 'polite'"
  >
    <div v-if="$slots.icon" class="flex-shrink-0 text-xl">
      <slot name="icon"></slot>
    </div>

    <div class="flex-1 space-y-1">
      <div v-if="$slots.header" class="font-semibold text-sm">
        <slot name="header"></slot>
      </div>

      <div class="text-sm">
        <slot>{{ message }}</slot>
      </div>

      <div v-if="$slots.actions" class="pt-1">
        <slot name="actions"></slot>
      </div>
    </div>

    <button
      v-if="dismissible"
      @click="close"
      :aria-label="closeLabel"
      class="absolute top-1 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
    >
      <slot name="close">✕</slot>
    </button>
  </div>
</template>
