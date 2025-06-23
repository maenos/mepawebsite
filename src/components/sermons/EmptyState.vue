<template>
  <div
    class="min-h-[60vh] flex flex-col items-center justify-center px-4"
    :class="isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'"
  >
    <div
      class="p-8 rounded-2xl border max-w-lg w-full text-center"
      :class="
        isDarkMode ? 'border-white/10 bg-gray-900/50' : 'border-amber-100 bg-amber-50/50'
      "
    >
      <BookOpen
        class="h-16 w-16 mx-auto mb-6 opacity-50"
        :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
      />
      <h2 class="text-2xl font-serif font-bold mb-3">Aucun enseignement disponible</h2>
      <p class="mb-8 text-lg" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
        Nous n'avons pas encore d'enseignements à afficher. Revenez bientôt pour découvrir
        nos nouveaux contenus.
      </p>
      <button
        @click="$emit('refresh')"
        class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
        :class="
          isDarkMode
            ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
            : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg'
        "
      >
        <RefreshCw class="h-4 w-4" />
        <span>Actualiser</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { BookOpen, RefreshCw } from 'lucide-vue-next'

defineProps({
  isDarkMode: {
    type: Boolean,
    required: true
  }
})

defineEmits(['refresh'])
</script>
