<template>
  <footer
    class="py-16 border-t transition-colors duration-500 relative overflow-hidden"
    :class="
      isDarkMode
        ? 'bg-black text-white border-white/10'
        : 'bg-amber-50 text-gray-900 border-amber-100/50'
    "
  >
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div
        class="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
        <!-- Column 1: Logo and Description -->
        <div>
          <div class="flex items-center mb-6">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lll-7NEmvicZ2fhXgM3ScFv4l5zSKo5Iq2.png"
              alt="Logo SLC"
              class="h-10 w-auto"
              :class="isDarkMode ? 'brightness-100' : 'brightness-90'"
            />
            <span
              class="ml-3 text-xl font-serif font-semibold"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Centre Siloé / Mepavie
            </span>
          </div>
          <p
            class="leading-relaxed mb-6"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Un lieu de culte, de communauté et de croissance spirituelle au cœur de la
            ville.
          </p>

          <!-- Theme Toggle -->
          <div class="flex items-center">
            <button
              @click="toggleTheme"
              class="group flex items-center space-x-2 rounded-full px-4 py-2 transition-all duration-300"
              :class="
                isDarkMode
                  ? 'bg-white/10 hover:bg-white/15'
                  : 'bg-amber-100 hover:bg-amber-200'
              "
            >
              <Sun v-if="isDarkMode" class="h-4 w-4 text-amber-100" />
              <Moon v-else class="h-4 w-4 text-amber-700" />
              <span
                class="text-sm font-medium"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              >
                {{ isDarkMode ? "Mode Clair" : "Mode Sombre" }}
              </span>
            </button>
          </div>
        </div>

        <!-- Column 2: Address -->
        <div>
          <h4
            class="text-lg font-serif font-semibold mb-6"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Adresse
          </h4>
          <ul class="space-y-4">
            <li class="flex items-start">
              <MapPin
                class="h-5 w-5 mr-3 mt-1 flex-shrink-0"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              />
              <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                ADIDOADIN, 1ER IMMEUBLE PHARMACIE LAUS DÉO<br />
                LOMÉ,TOGO
              </span>
            </li>
            <li class="flex items-center">
              <Phone
                class="h-5 w-5 mr-3 flex-shrink-0"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              />
              <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                +2289012222
              </span>
            </li>
            <li class="flex items-center">
              <Mail
                class="h-5 w-5 mr-3 flex-shrink-0"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              />
              <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                contact@siloecentre.fr
              </span>
            </li>
          </ul>
        </div>

        <!-- Column 3: Social Media -->
        <div>
          <h4
            class="text-lg font-serif font-semibold mb-6"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Réseaux Sociaux
          </h4>
          <ul class="space-y-4">
            <li>
              <a
                href="https://www.facebook.com/mission.mepavie"
                class="group flex items-center transition-all duration-300"
                :class="
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                "
              >
                <div
                  class="h-8 w-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110"
                  :class="
                    isDarkMode
                      ? 'bg-white/10 group-hover:bg-white/15'
                      : 'bg-amber-100 group-hover:bg-amber-200'
                  "
                >
                  <Facebook
                    class="h-4 w-4"
                    :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                  />
                </div>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="group flex items-center transition-all duration-300"
                :class="
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                "
              >
                <div
                  class="h-8 w-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110"
                  :class="
                    isDarkMode
                      ? 'bg-white/10 group-hover:bg-white/15'
                      : 'bg-amber-100 group-hover:bg-amber-200'
                  "
                >
                  <Instagram
                    class="h-4 w-4"
                    :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                  />
                </div>
                <span>Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@siloecentre"
                class="group flex items-center transition-all duration-300"
                :class="
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                "
              >
                <div
                  class="h-8 w-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110"
                  :class="
                    isDarkMode
                      ? 'bg-white/10 group-hover:bg-white/15'
                      : 'bg-amber-100 group-hover:bg-amber-200'
                  "
                >
                  <Tiktok
                    class="h-4 w-4"
                    :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                  />
                </div>
                <span>TikTOk</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Silo%C3%A9Centre"
                class="group flex items-center transition-all duration-300"
                :class="
                  isDarkMode
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-gray-900'
                "
              >
                <div
                  class="h-8 w-8 rounded-full flex items-center justify-center mr-3 transition-all duration-300 group-hover:scale-110"
                  :class="
                    isDarkMode
                      ? 'bg-white/10 group-hover:bg-white/15'
                      : 'bg-amber-100 group-hover:bg-amber-200'
                  "
                >
                  <Youtube
                    class="h-4 w-4"
                    :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                  />
                </div>
                <span>YouTube</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Column 4: Newsletter -->
        <div>
          <h4
            class="text-lg font-serif font-semibold mb-6"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            S'abonner
          </h4>
          <p
            class="mb-6 leading-relaxed"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Abonnez-vous à notre newsletter pour recevoir les mises à jour sur les
            sermons, événements et actualités de l'église.
          </p>
          <form class="space-y-3">
            <div class="flex rounded-full overflow-hidden shadow-sm">
              <input
                type="email"
                placeholder="Votre email"
                class="px-5 py-3 w-full focus:outline-none"
                :class="
                  isDarkMode
                    ? 'bg-white/10 text-white placeholder:text-white/50'
                    : 'bg-white text-gray-900 placeholder:text-gray-500'
                "
              />
              <button
                type="submit"
                class="px-4 py-3 transition-all duration-300 flex items-center justify-center"
                :class="
                  isDarkMode
                    ? 'bg-amber-100 hover:bg-amber-200 text-gray-900'
                    : 'bg-amber-700 hover:bg-amber-800 text-white'
                "
              >
                <Send class="h-5 w-5" />
              </button>
            </div>
            <p class="text-xs" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              Nous respectons votre vie privée. Désabonnez-vous à tout moment.
            </p>
          </form>
        </div>
      </div>

      <!-- Bottom Section with Links and Copyright -->
      <div
        class="border-t mt-12 pt-8 flex flex-col md:flex-row md:justify-between md:items-center gap-6"
        :class="isDarkMode ? 'border-white/10' : 'border-amber-100'"
      >
        <!-- Quick Links -->
        <div class="flex flex-wrap gap-x-6 gap-y-2">
          <a
            href="#"
            class="text-sm transition-all duration-300 relative group"
            :class="
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
            "
          >
            Accueil
            <span
              class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
            ></span>
          </a>
          <a
            href="#"
            class="text-sm transition-all duration-300 relative group"
            :class="
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
            "
          >
            À propos
            <span
              class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
            ></span>
          </a>
          <a
            href="#"
            class="text-sm transition-all duration-300 relative group"
            :class="
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
            "
          >
            Sermons
            <span
              class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
            ></span>
          </a>
          <a
            href="#"
            class="text-sm transition-all duration-300 relative group"
            :class="
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
            "
          >
            Événements
            <span
              class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
            ></span>
          </a>
          <a
            href="#"
            class="text-sm transition-all duration-300 relative group"
            :class="
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900'
            "
          >
            Contact
            <span
              class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
              :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
            ></span>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-sm" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
          &copy; 2025 Centre Siloé. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useThemeStore } from "@/stores/theme";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Send,
  Sun,
  Moon,
} from "lucide-vue-next";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDarkMode);
const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>
