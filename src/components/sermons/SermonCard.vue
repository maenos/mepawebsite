<template>
  <div
    @click="$emit('select')"
    class="cursor-pointer group transform transition-all duration-500 hover:scale-102"
  >
    <div
      :class="[
        'rounded-2xl overflow-hidden shadow-xl border h-full flex flex-col hover:shadow-lg',
        isDarkMode
          ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20 hover:shadow-amber-100/5'
          : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200 hover:shadow-amber-700/10',
      ]"
    >
      <!-- Sermon Image -->
      <div class="relative">
        <div class="aspect-video overflow-hidden">
          <img
            :src="`https://api.eglisesiloecentre.org/storage/${sermon.image}`"
            :alt="sermon.title"
            class="w-full h-full object-cover transition-all duration-700 transform"
            :class="
              isDarkMode
                ? 'brightness-75 saturate-50 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105'
                : 'brightness-95 group-hover:brightness-105 group-hover:scale-105'
            "
          />
        </div>
        <div
          class="absolute inset-0"
          :class="
            isDarkMode
              ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
              : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent'
          "
        ></div>

        <!-- Play Icon -->
        <div
          v-if="sermon.hasVideo"
          class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
        >
          <div
            class="bg-amber-100/20 backdrop-blur-sm p-4 rounded-full transform transition-all duration-300 hover:scale-110"
          >
            <Play class="h-8 w-8 text-white" />
          </div>
        </div>

        <!-- Text Icon -->
        <div
          v-if="sermon.content"
          class="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-amber-500/80 text-white flex items-center"
        >
          <BookOpen class="h-3 w-3 mr-1.5" />
          Texte
        </div>

        <!-- Date Badge -->
        <div
          class="absolute bottom-4 left-4 px-3 py-1 text-xs rounded-full bg-black/60 text-white flex items-center"
        >
          <Calendar class="h-3 w-3 mr-1.5" />
          {{ formatDate(sermon.date) }}
        </div>

        <!-- Duration Badge -->
        <div
          class="absolute bottom-4 right-4 px-3 py-1 text-xs rounded-full bg-black/60 text-white flex items-center"
        >
          <Clock class="h-3 w-3 mr-1.5" />
          {{ sermon.duration }}
        </div>
      </div>

      <!-- Sermon Content -->
      <div class="p-6 flex-grow flex flex-col">
        <h3
          class="text-xl font-serif font-semibold mb-3"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          {{ sermon.title }}
        </h3>
        <div
          class="flex items-center mb-3 text-sm"
          :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
        >
          <User class="h-4 w-4 mr-2" />
          <span>{{ sermon.preacher }}</span>
        </div>
        <p
          class="text-sm mb-6 line-clamp-3 flex-grow leading-relaxed"
          :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
        >
          {{ sermon.description }}
        </p>
        <div class="flex justify-between items-center mt-auto">
          <div class="flex gap-1.5">
            <span
              v-for="(tag, tagIndex) in sermon.tags.slice(0, 2)"
              :key="tagIndex"
              class="px-2 py-1 text-xs rounded-full"
              :class="
                isDarkMode
                  ? 'bg-amber-100/10 text-amber-100'
                  : 'bg-amber-100 text-amber-700'
              "
            >
              {{ tag }}
            </span>
            <span
              v-if="sermon.tags.length > 2"
              class="px-2 py-1 text-xs rounded-full"
              :class="
                isDarkMode
                  ? 'bg-amber-100/10 text-amber-100'
                  : 'bg-amber-100 text-amber-700'
              "
            >
              +{{ sermon.tags.length - 2 }}
            </span>
          </div>
          <button
            class="text-sm font-medium flex items-center relative group"
            :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
          >
            <span>Voir</span>
            <ChevronRight
              class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
            />
            <span
              class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              :class="isDarkMode ? 'bg-amber-100' : 'bg-amber-700'"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Play, BookOpen, Calendar, Clock, User, ChevronRight } from 'lucide-vue-next'

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

defineEmits(['select'])

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
