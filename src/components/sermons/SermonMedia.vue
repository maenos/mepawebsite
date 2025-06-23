<template>
  <div class="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
    <div v-if="sermon.hasVideo" class="absolute inset-0 flex items-center justify-center">
      <img
        :src="`https://api.eglisesiloecentre.org/storage/${sermon.image}`"
        :alt="sermon.title"
        class="w-full h-full object-cover transition-all duration-700"
        :class="
          isDarkMode
            ? 'brightness-75 filter saturate-50 hover:brightness-100 hover:saturate-100'
            : 'brightness-95 hover:brightness-105'
        "
      />
      <div
        class="absolute inset-0"
        :class="
          isDarkMode
            ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
            : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent'
        "
      ></div>
      <button
        class="absolute inset-0 flex items-center justify-center group"
        @click="$emit('playVideo')"
      >
        <div
          class="bg-amber-100/20 backdrop-blur-sm p-8 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-100/30"
        >
          <Play class="h-12 w-12 text-white" />
        </div>
      </button>
    </div>
    <img
      v-else
      :src="`https://api.eglisesiloecentre.org/storage/${sermon.image}`"
      :alt="sermon.title"
      class="w-full h-full object-cover transition-all duration-700"
      :class="isDarkMode ? 'brightness-75 filter saturate-50' : 'brightness-95'"
    />
  </div>
</template>

<script setup>
import { Play } from 'lucide-vue-next'

defineProps({
  sermon: {
    type: Object,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

defineEmits(['playVideo'])
</script>
