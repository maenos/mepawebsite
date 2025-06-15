<template>
  <div class="relative w-full h-full overflow-hidden">
    <!-- Main Image with Ken Burns Effect -->
    <div class="absolute inset-0 w-full h-full">
      <transition name="fade" mode="out-in">
        <div
          :key="currentImageIndex"
          class="absolute inset-0 w-full h-full transform-gpu transition-transform duration-10000 ease-out"
          :class="
            isEvenSlide ? 'scale-110 origin-center' : 'scale-100 origin-bottom-right'
          "
        >
          <img
            :src="images[currentImageIndex]"
            :alt="`Church sanctuary image ${currentImageIndex + 1}`"
            class="w-full h-full object-cover transition-all duration-1000"
            :class="[
              isDarkMode
                ? 'brightness-40 contrast-125 saturate-50'
                : 'brightness-95 contrast-105',
              'transform-gpu',
            ]"
          />
        </div>
      </transition>
    </div>

    <!-- Subtle Vignette Overlay -->
    <div
      class="absolute inset-0 pointer-events-none"
      :class="isDarkMode ? 'bg-radial-dark opacity-70' : 'bg-radial-light opacity-40'"
    ></div>

    <!-- Navigation Arrows -->
    <button
      @click="prevImage"
      class="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-80 hover:scale-110 focus:outline-none"
      :class="
        isDarkMode
          ? 'bg-black/30 hover:bg-black/50 text-white'
          : 'bg-white/30 hover:bg-white/50 text-gray-900'
      "
    >
      <ChevronLeft class="w-6 h-6" />
      <span class="sr-only">Previous image</span>
    </button>

    <button
      @click="nextImage"
      class="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-80 hover:scale-110 focus:outline-none"
      :class="
        isDarkMode
          ? 'bg-black/30 hover:bg-black/50 text-white'
          : 'bg-white/30 hover:bg-white/50 text-gray-900'
      "
    >
      <ChevronRight class="w-6 h-6" />
      <span class="sr-only">Next image</span>
    </button>

    <!-- Slide Indicators -->
    <div
      class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2"
    >
      <button
        v-for="(_, index) in images"
        :key="index"
        @click="goToImage(index)"
        class="w-2 h-2 rounded-full transition-all duration-300 focus:outline-none"
        :class="[
          currentImageIndex === index
            ? isDarkMode
              ? 'bg-white scale-125'
              : 'bg-amber-700 scale-125'
            : isDarkMode
            ? 'bg-white/40 hover:bg-white/70'
            : 'bg-gray-400/40 hover:bg-gray-400/70',
        ]"
      >
        <span class="sr-only">Go to slide {{ index + 1 }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useThemeStore } from "../stores/theme";
import { ChevronLeft, ChevronRight } from "lucide-vue-next";
import home1 from "@/assets/images/home1.jpg";
import home2 from "@/assets/images/home2.jpg";
import home3 from "@/assets/images/home3.jpg";
import home4 from "@/assets/images/home4.jpg";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDarkMode);

// Image array
const images = ref([home1, home2, home3, home4]);
const currentImageIndex = ref(0);
const isEvenSlide = computed(() => currentImageIndex.value % 2 === 0);
let intervalId = null;

// Preload images for smoother transitions
onMounted(() => {
  images.value.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
});

// Navigation functions
const goToImage = (index) => {
  currentImageIndex.value = index;
  resetInterval();
};

const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
  resetInterval();
};

const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + images.value.length) % images.value.length;
  resetInterval();
};

// Interval management
const startInterval = () => {
  intervalId = setInterval(nextImage, 7000); // Slightly longer interval for better viewing
};

const resetInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  startInterval();
};

// Start carousel on component mount
onMounted(() => {
  startInterval();
});

// Clean up interval when component is unmounted
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>

<style scoped>
/* Fade transition effect */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Radial gradient backgrounds */
.bg-radial-dark {
  background: radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.7) 100%);
}
.bg-radial-light {
  background: radial-gradient(circle, transparent 40%, rgba(0, 0, 0, 0.2) 100%);
}
</style>
