<template>
  <div>
    <div class="mb-10 flex justify-between items-center">
      <h2
        class="text-2xl font-serif font-bold"
        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
      >
        {{ showAllSermons ? "Tous les enseignements" : "Enseignements récents" }}
      </h2>
      <button
        @click="$emit('toggleShowAll')"
        class="text-sm font-medium flex items-center gap-1 transition-all duration-300 relative group"
        :class="
          isDarkMode
            ? 'text-amber-100 hover:text-white'
            : 'text-amber-700 hover:text-amber-800'
        "
      >
        <span>{{
          showAllSermons ? "Voir les plus récents" : "Voir tous les enseignements"
        }}</span>
        <ChevronRight
          v-if="!showAllSermons"
          class="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
        />
        <ChevronUp
          v-else
          class="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300"
        />
        <span
          class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
          :class="isDarkMode ? 'bg-white' : 'bg-amber-700'"
        ></span>
      </button>
    </div>

    <!-- Sermons Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <SermonCard
        v-for="sermon in sermons"
        :key="sermon.id"
        :sermon="sermon"
        :isDarkMode="isDarkMode"
        @select="$emit('selectSermon', sermon)"
      />
    </div>
  </div>
</template>

<script setup>
import { ChevronRight, ChevronUp } from 'lucide-vue-next'
import SermonCard from './SermonCard.vue'

defineProps({
  sermons: {
    type: Array,
    required: true
  },
  showAllSermons: {
    type: Boolean,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

defineEmits(['selectSermon', 'toggleShowAll'])
</script>
