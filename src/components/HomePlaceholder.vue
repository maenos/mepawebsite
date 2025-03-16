<template>
  <img
    :src="images[currentImageIndex]"
    alt="Church sanctuary"
    class="w-full h-full object-cover transition-all duration-500"
    :class="isDarkMode ? 'brightness-50 filter grayscale' : 'brightness-90'"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useThemeStore } from "../stores/theme";
import home1 from "@/assets/images/home1.jpg";
import home2 from "@/assets/images/home2.jpg";
import home3 from "@/assets/images/home3.jpg";
import home4 from "@/assets/images/home4.jpg";
const themeStore = useThemeStore();

const isDarkMode = computed(() => {
  return themeStore.isDarkMode;
});
// Tableau contenant les chemins de vos images
const images = ref([home1, home2, home3, home4]);

const currentImageIndex = ref(0);
let intervalId = null;

// Fonction pour aller à une image spécifique
const goToImage = (index) => {
  currentImageIndex.value = index;
  resetInterval();
};

// Fonction pour aller à l'image suivante
const nextImage = () => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.value.length;
  resetInterval();
};

// Fonction pour aller à l'image précédente
const prevImage = () => {
  currentImageIndex.value =
    (currentImageIndex.value - 1 + images.value.length) % images.value.length;
  resetInterval();
};

// Démarrer l'intervalle
const startInterval = () => {
  intervalId = setInterval(nextImage, 5000);
};

// Réinitialiser l'intervalle
const resetInterval = () => {
  if (intervalId) {
    clearInterval(intervalId);
  }
  startInterval();
};

// Démarrer le carrousel au montage du composant
onMounted(() => {
  startInterval();
});

// Nettoyer l'intervalle lorsque le composant est démonté
onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId);
  }
});
</script>
