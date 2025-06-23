<template>
  <div
    :class="[
      'p-8 rounded-2xl h-full flex flex-col shadow-xl border',
      isDarkMode
        ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10'
        : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30',
    ]"
  >
    <div class="flex items-center mb-4">
      <Calendar
        class="h-4 w-4 mr-2"
        :class="isDarkMode ? 'text-amber-100/70' : 'text-amber-700/70'"
      />
      <div
        class="text-sm font-medium"
        :class="isDarkMode ? 'text-amber-100/70' : 'text-amber-700/70'"
      >
        {{ formatDate(sermon.date) }}
      </div>
    </div>
    <h2
      class="text-2xl font-serif font-bold mb-4"
      :class="isDarkMode ? 'text-white' : 'text-gray-900'"
    >
      {{ sermon.title }}
    </h2>
    <div class="flex items-center mb-4">
      <User
        class="h-5 w-5 mr-2"
        :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
      />
      <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
        {{ sermon.preacher }}
      </span>
    </div>
    <div class="flex items-center mb-4">
      <Clock
        class="h-5 w-5 mr-2"
        :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
      />
      <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
        {{ sermon.duration }}
      </span>
    </div>
    <div class="flex items-center mb-6">
      <Tag
        class="h-5 w-5 mr-2"
        :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
      />
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in sermon.tags"
          :key="index"
          class="px-3 py-1 text-xs rounded-full"
          :class="
            isDarkMode
              ? 'bg-amber-100/10 text-amber-100'
              : 'bg-amber-100 text-amber-700'
          "
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <p
      class="mb-8 flex-grow leading-relaxed"
      :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
    >
      {{ sermon.description }}
    </p>
    <div class="flex flex-col sm:flex-row gap-4 mt-auto flex-wrap">
      <button
        v-if="sermon.content && sermon.content.length > 0"
        @click="$emit('toggleReading')"
        class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
        :class="
          isDarkMode
            ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
            : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg'
        "
      >
        <BookOpen class="h-4 w-4" />
        <span>Lire l'enseignement</span>
      </button>

      <button
        v-if="sermon.hasVideo"
        @click="$emit('playVideo')"
        class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
        :class="
          isDarkMode
            ? 'bg-white/10 hover:bg-white/15 text-white'
            : 'bg-amber-50 hover:bg-amber-100 text-amber-700'
        "
      >
        <Play class="h-4 w-4" />
        <span>Regarder</span>
      </button>

      <button
        class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
        :class="
          isDarkMode
            ? 'bg-transparent border border-amber-100/30 text-amber-100 hover:bg-amber-100/10'
            : 'bg-transparent border border-amber-700/30 text-amber-700 hover:bg-amber-50'
        "
      >
        <Download class="h-4 w-4" />
        <span>Télécharger</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Calendar, User, Clock, Tag, BookOpen, Play, Download } from 'lucide-vue-next'

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

defineEmits(['toggleReading', 'playVideo'])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
</script>
