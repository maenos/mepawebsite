import { defineStore } from 'pinia'
import { ref, watch, onMounted } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false)
  const mobileMenuOpen = ref(false)

  // Basculer le mode sombre
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value
    localStorage.setItem('darkMode', isDarkMode.value)
  }

  // Initialiser le thème
  onMounted(() => {
    const savedTheme = localStorage.getItem('darkMode')

    if (savedTheme !== null) {
      isDarkMode.value = savedTheme === 'true'
    } else {
      isDarkMode.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    // Écouter les changements de préférence du système
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (localStorage.getItem('darkMode') === null) {
        isDarkMode.value = e.matches
      }
    })
  })

  // Appliquer la classe dark-theme au body
  watch(isDarkMode, (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark-theme')
    } else {
      document.documentElement.classList.remove('dark-theme')
    }
  })

  return {
    isDarkMode,
    mobileMenuOpen,
    toggleTheme,
  }
})
