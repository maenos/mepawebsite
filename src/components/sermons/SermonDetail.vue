<template>
  <div class="mb-20">
    <!-- Reading Mode -->
    <div v-if="readingMode" class="mb-8">
      <div class="flex justify-between items-center mb-8">
        <button
          @click="$emit('toggleReading')"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
          :class="
            isDarkMode
              ? 'bg-white/10 text-white hover:bg-white/15'
              : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
          "
        >
          <ArrowLeft class="h-4 w-4" />
          <span>Retour aux détails</span>
        </button>

        <div class="flex items-center gap-3">
          <button
            @click="$emit('adjustFontSize', -1)"
            class="p-2 rounded-full transition-all duration-300"
            :class="
              isDarkMode
                ? 'bg-white/10 text-white hover:bg-white/15'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            "
            :disabled="fontSize <= 14"
          >
            <Minus class="h-4 w-4" />
          </button>
          <span
            class="text-sm font-medium"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Taille du texte
          </span>
          <button
            @click="$emit('adjustFontSize', 1)"
            class="p-2 rounded-full transition-all duration-300"
            :class="
              isDarkMode
                ? 'bg-white/10 text-white hover:bg-white/15'
                : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
            "
            :disabled="fontSize >= 22"
          >
            <Plus class="h-4 w-4" />
          </button>
        </div>
      </div>

      <!-- Article Content -->
      <SermonArticle :sermon="sermon" :isDarkMode="isDarkMode" :fontSize="fontSize" />
    </div>

    <!-- Preview Mode -->
    <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Video/Image -->
      <div class="lg:col-span-2">
        <SermonMedia :sermon="sermon" :isDarkMode="isDarkMode" @playVideo="$emit('playVideo', sermon)" />
      </div>

      <!-- Sermon Details -->
      <div>
        <SermonInfo 
          :sermon="sermon" 
          :isDarkMode="isDarkMode" 
          @toggleReading="$emit('toggleReading')"
          @playVideo="$emit('playVideo', sermon)"
        />
      </div>
    </div>

    <!-- Back to list button -->
    <div v-if="!readingMode" class="mt-10 text-center">
      <button
        @click="$emit('close')"
        class="inline-flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
        :class="
          isDarkMode
            ? 'bg-white/10 text-white hover:bg-white/15'
            : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
        "
      >
        <ArrowLeft class="h-4 w-4" />
        <span>Retour à tous les enseignements</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ArrowLeft, Minus, Plus } from 'lucide-vue-next'
import SermonArticle from './SermonArticle.vue'
import SermonMedia from './SermonMedia.vue'
import SermonInfo from './SermonInfo.vue'

defineProps({
  sermon: {
    type: Object,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    required: true
  },
  readingMode: {
    type: Boolean,
    required: true
  },
  fontSize: {
    type: Number,
    required: true
  }
})

defineEmits(['close', 'toggleReading', 'playVideo', 'adjustFontSize'])
</script>
