<template>
  <div
    class="min-h-screen transition-colors duration-500"
    :class="isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'"
  >
    <TheHeader />

    <RouterView />

    <TheFooter />
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import {
  BookOpen,
  Clock,
  Facebook,
  Heart,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Play,
  Send,
  Sun,
  Twitter,
  Users,
  X,
  Youtube,
} from "lucide-vue-next";
import TheHeader from "../ui/TheHeader.vue";

import TheFooter from "../ui/TheFooter.vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const isDarkMode = computed(() => {
  return themeStore.isDarkMode;
});
</script>

<style>
/* Add these custom color variables */
:root {
  --slc-orange: #ffa500;
  --slc-yellow: #ffd700;
}

/* Update glow effect colors */
.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
}

.dark-theme .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
}

html:not(.dark-theme) .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.2);
}

/* Add gradient accent for buttons and highlights */
.accent-gradient {
  background: linear-gradient(90deg, var(--slc-orange), var(--slc-yellow));
}
/* Styles globaux */
html {
  scroll-behavior: smooth;
}

/* Animation de lueur pour les éléments hover */
.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

.dark-theme .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}

html:not(.dark-theme) .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

/* Animation pour les éléments qui apparaissent au défilement */
.fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation pour les images au survol */
.image-zoom {
  transition: transform 0.5s ease;
}

.image-zoom:hover {
  transform: scale(1.05);
}

/* Transition pour le changement de thème */
.theme-transition {
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}
</style>
