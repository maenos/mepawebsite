<template>
  <footer
    class="py-12 border-t transition-colors duration-500"
    :class="
      isDarkMode
        ? 'bg-black text-white border-white/10'
        : 'bg-gray-900 text-white border-gray-800'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lll-7NEmvicZ2fhXgM3ScFv4l5zSKo5Iq2.png"
              alt="Logo SLC"
              class="h-8 w-auto"
            />
            <span class="ml-2 text-xl font-semibold">Centre Siloé / Mepavie</span>
          </div>
          <p class="text-gray-400">
            Un lieu de culte, de communauté et de croissance spirituelle au cœur de la
            ville.
          </p>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Adresse</h4>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 mt-0.5 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>123 Rue de l'Église<br />75000 Paris, France</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                ></path>
              </svg>
              <span>+33 1 23 45 67 89</span>
            </li>
            <li class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2 flex-shrink-0"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              <span>contact@siloecentre.fr</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">Réseaux Sociaux</h4>
          <ul class="space-y-2">
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                  ></path>
                </svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                  ></path>
                </svg>
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
                  ></path>
                  <path d="m10 15 5-3-5-3z"></path>
                </svg>
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 class="text-lg font-semibold mb-4">S'abonner</h4>
          <p class="text-gray-400 mb-4">
            Abonnez-vous à notre newsletter pour recevoir les mises à jour sur les
            sermons, événements et actualités de l'église.
          </p>
          <form class="flex">
            <input
              type="email"
              placeholder="Votre email"
              class="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-1 focus:ring-white text-white"
              :class="
                isDarkMode
                  ? 'bg-white/5 border border-white/10'
                  : 'bg-gray-800 border border-gray-700'
              "
            />
            <button
              type="submit"
              class="px-4 py-2 rounded-r-md transition-all duration-300"
              :class="
                isDarkMode
                  ? 'bg-white hover:bg-gray-200 text-black'
                  : 'bg-white hover:bg-gray-200 text-black'
              "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z"></path>
                <path d="M22 2 11 13"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>

      <div
        class="border-t mt-8 pt-8 text-center text-gray-400"
        :class="isDarkMode ? 'border-white/10' : 'border-gray-800'"
      >
        <p>&copy; 2025 Centre Siloé. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { ref, computed } from "vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const isDarkMode = computed(() => {
  return themeStore.isDarkMode;
});
</script>
