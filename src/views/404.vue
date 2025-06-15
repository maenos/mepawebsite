<template>
  <div>
    <!-- Main Content -->
    <div
      class="flex-grow flex items-center justify-center transition-colors duration-500"
      :class="isDarkMode ? 'bg-black' : 'bg-white'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <div
          class="relative"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
          <!-- Illustration 404 -->
          <div class="mb-8 relative">
            <div
              class="text-9xl font-bold opacity-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              404
            </div>
            <div class="relative z-10 flex justify-center">
              <map-off
                class="h-48 w-48"
                :class="isDarkMode ? 'text-amber-500' : 'text-amber-600'"
              />
            </div>
          </div>

          <h1
            class="text-4xl md:text-5xl font-bold mb-4"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Page Non Trouvée
          </h1>

          <p
            class="text-xl mb-8 max-w-2xl mx-auto"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Il semble que vous vous soyez égaré sur votre chemin. Ne vous inquiétez pas,
            nous sommes là pour vous guider.
          </p>

          <div class="mb-12">
            <blockquote
              class="italic max-w-2xl mx-auto p-6 rounded-lg border"
              :class="
                isDarkMode
                  ? 'bg-white/5 border-white/10 text-gray-300'
                  : 'bg-gray-50 border-gray-200 text-gray-700'
              "
            >
              <p>
                "Je suis le chemin, la vérité et la vie. Nul ne vient au Père que par
                moi."
              </p>
              <footer
                class="mt-2 font-medium"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Jean 14:6
              </footer>
            </blockquote>
          </div>

          <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="/"
              :class="[
                'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-glow flex items-center justify-center gap-2',
                isDarkMode
                  ? 'bg-white hover:bg-gray-200 text-black'
                  : 'bg-gray-900 hover:bg-gray-800 text-white',
              ]"
            >
              <home class="h-5 w-5" />
              <span>Retour à l'accueil</span>
            </a>
            <button
              @click="goBack"
              :class="[
                'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 border flex items-center justify-center gap-2',
                isDarkMode
                  ? 'bg-transparent hover:bg-white/10 text-white border-white'
                  : 'bg-transparent hover:bg-gray-900/10 text-gray-900 border-gray-900',
              ]"
            >
              <arrow-left class="h-5 w-5" />
              <span>Page précédente</span>
            </button>
          </div>

          <div class="max-w-3xl mx-auto">
            <h2
              class="text-2xl font-bold mb-6"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Vous pourriez être intéressé par
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              <a
                v-for="(link, index) in suggestedLinks"
                :key="index"
                :href="link.url"
                :class="[
                  'p-4 rounded-lg border transition-all duration-300 hover:scale-105 flex flex-col items-center text-center',
                  isDarkMode
                    ? 'bg-white/5 border-white/10 hover:bg-white/10 text-white'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100 text-gray-900',
                ]"
                v-motion
                :initial="{ opacity: 0, y: 20 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 100 * index, duration: 600 },
                }"
              >
                <component :is="link.icon" class="h-8 w-8 mb-2" :class="link.iconColor" />
                <span>{{ link.label }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, computed } from "vue";
import {
  ArrowLeft,
  BookOpen,
  Calendar,
  Church,
  Heart,
  Home,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  Users,
  X,
  Landmark,
} from "lucide-vue-next";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const isDarkMode = computed(() => {
  return themeStore.isDarkMode;
});

// Liens suggérés
const suggestedLinks = [
  {
    label: "Services",
    url: "/services",
    icon: Church,
    iconColor: isDarkMode ? "text-amber-500" : "text-amber-600",
  },
  {
    label: "Enseignements",
    url: "/sermons",
    icon: BookOpen,
    iconColor: isDarkMode ? "text-sky-500" : "text-sky-600",
  },
  {
    label: "Événements",
    url: "/events",
    icon: Calendar,
    iconColor: isDarkMode ? "text-purple-500" : "text-purple-600",
  },
  {
    label: "Contact",
    url: "/contact",
    icon: MessageCircle,
    iconColor: isDarkMode ? "text-green-500" : "text-green-600",
  },
];

// Fonction pour retourner à la page précédente
const goBack = () => {
  window.history.back();
};

// Fonction pour basculer entre les modes clair et sombre
const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value;
  localStorage.setItem("darkMode", isDarkMode.value);
};

// Initialiser le mode selon la préférence de l'utilisateur ou du système
onMounted(() => {
  // Vérifier si l'utilisateur a déjà une préférence enregistrée
  const savedTheme = localStorage.getItem("darkMode");

  if (savedTheme !== null) {
    // Utiliser la préférence enregistrée
    isDarkMode.value = savedTheme === "true";
  } else {
    // Sinon, utiliser la préférence du système
    isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  // Écouter les changements de préférence du système
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    // Ne mettre à jour que si l'utilisateur n'a pas défini de préférence
    if (localStorage.getItem("darkMode") === null) {
      isDarkMode.value = e.matches;
    }
  });
});

// Appliquer la classe dark au body lorsque le mode sombre est activé
watch(isDarkMode, (newValue) => {
  if (newValue) {
    document.documentElement.classList.add("dark-theme");
  } else {
    document.documentElement.classList.remove("dark-theme");
  }
});
</script>

<style>
/* Add these custom color variables */
:root {
  --slc-orange: #ffa500;
  --slc-yellow: #ffd700;
  --slc-blue: #87ceeb;
  --slc-purple: #9370db;
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
