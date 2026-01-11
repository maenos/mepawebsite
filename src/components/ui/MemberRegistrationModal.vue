<template>
  <div v-if="isOpen" class="fixed inset-0 z-9999 flex items-center justify-center p-4 ">
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      @click="close"
    ></div>

    <!-- Modal Content -->
    <div
      class="relative w-full max-w-md rounded-2xl shadow-2xl overflow-hidden transform transition-all p-6 py-4"
      :class="isDarkMode ? 'bg-gray-900 border border-white/10' : 'bg-white'"
    >
      <div class="flex justify-between items-center mb-6">
        <h2
          class="text-2xl font-serif font-bold"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Rejoignez-nous
        </h2>
        <button
          @click="close"
          class="p-2 rounded-full transition-colors"
          :class="isDarkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-100 text-gray-500'"
        >
          <X class="w-5 h-5" />
        </button>
      </div>

      <form @submit.prevent="submitForm" class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label
              class="block text-sm font-medium mb-1"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Prénom
            </label>
            <input
              v-model="form.first_name"
              type="text"
              required
              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              :class="isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'"
            />
          </div>
          <div>
            <label
              class="block text-sm font-medium mb-1"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Nom
            </label>
            <input
              v-model="form.last_name"
              type="text"
              required
              class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              :class="isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'"
            />
          </div>
        </div>

        <div>
          <label
            class="block text-sm font-medium mb-1"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Téléphone <span class="text-red-500">*</span>
          </label>
          <input
            v-model="form.phone"
            type="tel"
            required
            placeholder="Ex: 0600000000"
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            :class="isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'"
          />
          <p class="text-xs text-gray-500 mt-1">Nécessaire pour recevoir les notifications importantes.</p>
        </div>

        <div>
          <label
            class="block text-sm font-medium mb-1"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Email (Optionnel)
          </label>
          <input
            v-model="form.email"
            type="email"
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            :class="isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'"
          />
        </div>

        <div>
          <label
            class="block text-sm font-medium mb-1"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Adresse (Optionnel)
          </label>
          <input
            v-model="form.address"
            type="text"
            class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
            :class="isDarkMode ? 'bg-gray-800 border-gray-700 text-white' : 'bg-white border-gray-300 text-gray-900'"
          />
        </div>

        <div class="pt-2">
          <label
            class="block text-sm font-medium mb-2"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Je suis...
          </label>
          <div class="flex gap-4">
            <label class="flex items-center cursor-pointer">
              <input
                type="radio"
                v-model="form.status"
                value="newcomer"
                class="w-4 h-4 text-amber-600 focus:ring-amber-500 border-gray-300"
              />
              <span
                class="ml-2"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
              >
                Nouveau venu
              </span>
            </label>
            <label class="flex items-center cursor-pointer">
              <input
                type="radio"
                v-model="form.status"
                value="regular"
                class="w-4 h-4 text-amber-600 focus:ring-amber-500 border-gray-300"
              />
              <span
                class="ml-2"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
              >
                Habitué / Membre
              </span>
            </label>
          </div>
        </div>

        <div class="pt-4">
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Loader2 v-if="isLoading" class="w-5 h-5 animate-spin mr-2" />
            <span v-else>S'inscrire</span>
          </button>
        </div>

        <p v-if="error" class="text-sm text-red-500 text-center mt-2">{{ error }}</p>
        <p v-if="success" class="text-sm text-green-500 text-center mt-2">Inscription réussie ! Bienvenue.</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue'
import { X, Loader2 } from 'lucide-vue-next'
import api from '@/plugin/mepa'
import { useThemeStore } from '@/stores/theme'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const themeStore = useThemeStore()
const isDarkMode = computed(() => themeStore.isDarkMode)

const isLoading = ref(false)
const error = ref(null)
const success = ref(false)
const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
  address: '',
  status: 'newcomer'
})

const close = () => {
  emit('close')
  // Reset form after closing
  if (success.value) {
    setTimeout(() => {
      success.value = false
      Object.assign(form, {
        first_name: '',
        last_name: '',
        email: '',
        phone: '',
        address: '',
        status: 'newcomer'
      })
    }, 500)
  }
}

const submitForm = async () => {
  isLoading.value = true
  error.value = null
  success.value = false

  try {
    await api.post('/members', form)
    success.value = true
    setTimeout(() => {
      close()
    }, 2000)
  } catch (err) {
    console.error(err)
    if (err.response && err.response.data && err.response.data.message) {
      error.value = err.response.data.message
    } else {
      error.value = "Une erreur est survenue lors de l'inscription."
    }
  } finally {
    isLoading.value = false
  }
}
</script>
