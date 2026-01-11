<template>
  <div
    class="fixed inset-0 z-9999 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    @click="$emit('close')"
  >
    <div
      class="relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden"
      @click.stop
    >
      <button
        @click="$emit('close')"
        class="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300"
      >
        <X class="h-6 w-6" />
      </button>
      <div class="aspect-video">
        <div class="w-full h-full bg-black flex items-center justify-center">
          <!-- External video (YouTube/Vimeo) -->
          <iframe
            v-if="videoUrl && isExternal(videoUrl)"
            :src="embedUrl(videoUrl)"
            frameborder="0"
            allowfullscreen
            class="w-full h-full rounded-b-2xl"
          ></iframe>

          <!-- Local video file -->
          <video
            v-else-if="videoFile"
            :src="videoFile"
            controls
            class="w-full h-full object-contain rounded-b-2xl"
          ></video>

          <!-- Fallback -->
          <div v-else class="flex flex-col items-center text-center text-gray-500">
            <VideoOff class="h-16 w-16 mb-4" />
            <p>Vidéo non disponible en prévisualisation</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { X, VideoOff } from 'lucide-vue-next'

defineProps({
  videoUrl: {
    type: String,
    default: ''
  },
  videoFile: {
    type: String,
    default: ''
  }
})

defineEmits(['close'])

const isExternal = (url) => {
  return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('vimeo.com')
}

const embedUrl = (url) => {
  if (url.includes('youtube.com/watch?v=')) {
    return url.replace('watch?v=', 'embed/')
  } else if (url.includes('youtu.be/')) {
    return url.replace('youtu.be/', 'youtube.com/embed/')
  } else if (url.includes('vimeo.com')) {
    return url.replace('vimeo.com/', 'player.vimeo.com/video/')
  }
  return url
}
</script>
