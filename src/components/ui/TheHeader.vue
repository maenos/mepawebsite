<template>
  <nav
    :class="[
      'fixed w-full z-10 transition-all duration-500 border-b',
      isDarkMode
        ? 'bg-black/85 backdrop-blur-md border-white/10'
        : 'bg-white/90 backdrop-blur-md border-gray-100',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20">
        <!-- Logo and Site Name -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center space-x-3">
            <img
              src="@/assets/images/lll.png"
              alt="SLC Logo"
              class="h-10 w-auto transition-all duration-300 hover:opacity-90"
            />
            <div class="flex flex-col">
              <span
                class="text-xl font-serif tracking-wide"
                :class="isDarkMode ? 'text-white' : 'text-gray-800'"
              >
                Siloe Center
              </span>
              <span
                class="text-xs tracking-wider opacity-70"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'"
              >
                Foi • Espérance • Amour
              </span>
            </div>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-1">
          <a
            href="/"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-200 hover:text-white hover:bg-white/10'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
            ]"
            >Accueil</a
          >

          <a
            href="/services"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-200 hover:text-white hover:bg-white/10'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
            ]"
            >Services</a
          >
          <a
            href="/enseignements"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-200 hover:text-white hover:bg-white/10'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
            ]"
            >Enseignements</a
          >
          <a
            href="/evangelisation"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-200 hover:text-white hover:bg-white/10'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
            ]"
            >Évangélisation</a
          >

          <a
            href="/donations"
            :class="[
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-200 hover:text-white hover:bg-white/10'
                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
            ]"
            >Dons</a
          >

          <!-- Theme Toggle Button -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full transition-all duration-300 hover:scale-110 ml-2"
            :class="
              isDarkMode
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-gray-100 hover:bg-gray-200'
            "
            aria-label="Toggle theme"
          >
            <sun v-if="isDarkMode" class="h-5 w-5 text-amber-100" />
            <moon v-else class="h-5 w-5 text-gray-700" />
          </button>
        </div>

        <!-- Mobile Controls -->
        <div class="flex md:hidden items-center space-x-3">
          <!-- Mobile Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full transition-all duration-300 hover:scale-110"
            :class="
              isDarkMode
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-gray-100 hover:bg-gray-200'
            "
            aria-label="Toggle theme"
          >
            <sun v-if="isDarkMode" class="h-5 w-5 text-amber-100" />
            <moon v-else class="h-5 w-5 text-gray-700" />
          </button>

          <button
            @click="toggleMobileMenu"
            class="p-2 rounded-lg transition-all duration-300"
            :class="
              isDarkMode
                ? 'text-gray-200 hover:bg-white/10'
                : 'text-gray-700 hover:bg-gray-100'
            "
          >
            <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
            <X v-else class="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden shadow-lg overflow-hidden transition-all duration-300 max-h-screen"
      :class="
        isDarkMode ? 'bg-black/95 backdrop-blur-md' : 'bg-white/95 backdrop-blur-md'
      "
    >
      <div class="px-4 py-3 space-y-2">
        <a
          href="/"
          :class="[
            'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-102',
            isDarkMode
              ? 'text-gray-200 hover:text-white hover:bg-white/10'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
          ]"
          >Accueil</a
        >

        <a
          href="/services"
          :class="[
            'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-102',
            isDarkMode
              ? 'text-gray-200 hover:text-white hover:bg-white/10'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
          ]"
          >Services</a
        >
        <a
          href="/enseignements"
          :class="[
            'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-102',
            isDarkMode
              ? 'text-gray-200 hover:text-white hover:bg-white/10'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
          ]"
          >Enseignements</a
        >
        <a
          href="/evangelisation"
          :class="[
            'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-102',
            isDarkMode
              ? 'text-gray-200 hover:text-white hover:bg-white/10'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
          ]"
          >Évangélisation</a
        >
        <a
          href="/donations"
          :class="[
            'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:scale-102',
            isDarkMode
              ? 'text-gray-200 hover:text-white hover:bg-white/10'
              : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100',
          ]"
          >Dons</a
        >
      </div>
    </div>
  </nav>
</template>

<script setup>
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
import { ref, computed } from "vue";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const isDarkMode = computed(() => {
  return themeStore.isDarkMode;
});

const mobileMenuOpen = computed(() => {
  return themeStore.mobileMenuOpen;
});

isDarkMode.value = themeStore.isDarkMode;
mobileMenuOpen.value = themeStore.mobileMenuOpen;

const toggleMobileMenu = () => {
  themeStore.toggleMobileMenu();
  mobileMenuOpen.value = themeStore.mobileMenuOpen;
};

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>
