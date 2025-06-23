<template>
  <div class="mt-12 flex justify-center">
    <div class="flex space-x-2">
      <button
        @click="$emit('changePage', currentPage - 1)"
        :disabled="currentPage === 1"
        class="p-2 rounded-full transition-all duration-300"
        :class="[
          isDarkMode
            ? 'bg-white/10 text-white hover:bg-white/15'
            : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
          currentPage === 1 &&
            (isDarkMode
              ? 'opacity-50 cursor-not-allowed'
              : 'opacity-50 cursor-not-allowed'),
        ]"
      >
        <ChevronLeft class="h-5 w-5" />
      </button>

      <button
        v-for="page in paginationRange"
        :key="page"
        @click="$emit('changePage', page)"
        class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
        :class="[
          page === currentPage
            ? isDarkMode
              ? 'bg-amber-100 text-gray-900'
              : 'bg-amber-700 text-white'
            : isDarkMode
            ? 'bg-white/10 text-white hover:bg-white/15'
            : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
        ]"
      >
        {{ page }}
      </button>

      <button
        @click="$emit('changePage', currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="p-2 rounded-full transition-all duration-300"
        :class="[
          isDarkMode
            ? 'bg-white/10 text-white hover:bg-white/15'
            : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
          currentPage === totalPages &&
            (isDarkMode
              ? 'opacity-50 cursor-not-allowed'
              : 'opacity-50 cursor-not-allowed'),
        ]"
      >
        <ChevronRight class="h-5 w-5" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

defineProps({
  currentPage: {
    type: Number,
    required: true
  },
  totalPages: {
    type: Number,
    required: true
  },
  paginationRange: {
    type: Array,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

defineEmits(['changePage'])
</script>
