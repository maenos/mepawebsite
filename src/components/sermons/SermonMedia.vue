<template>
  <div
    class="relative aspect-video overflow-hidden rounded-2xl shadow-xl group"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
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

    <!-- Audio Player Overlay -->
    <div
      v-if="sermon.has_audio || sermon.audio_url"
      class="absolute bottom-0 left-0 right-0 p-4 bg-black/60 backdrop-blur-md transition-all duration-300"
      :class="(isHovered || !sermon.hasVideo) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0'"
    >
      <div class="flex items-center gap-3 text-white mb-2">
        <Headphones class="w-4 h-4" />
        <span class="text-xs font-medium">Version Audio</span>
      </div>
      <audio
        controls
        controlsList="nodownload"
        class="w-full h-8 [&::-webkit-media-controls-panel]:bg-white/10 [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-time-remaining-display]:text-white"
        :src="getMediaUrl(sermon.audio_url || sermon.audio_file)"
      >
        Votre navigateur ne supporte pas l'élément audio.
      </audio>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Play, Headphones } from 'lucide-vue-next'

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

const isHovered = ref(false)

const getMediaUrl = (path) => {
  if (!path) return ''
  if (path.startsWith('http')) return path
  return `https://api.eglisesiloecentre.org/storage/${path}`
}
</script>
