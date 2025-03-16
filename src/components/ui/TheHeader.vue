<template>
  <nav
    :class="[
      'fixed w-full z-10 transition-all duration-500 border-b',
      isDarkMode
        ? 'bg-black/80 backdrop-blur-md border-white/10'
        : 'bg-white/80 backdrop-blur-md border-gray-200',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <img src="@/assets/images/lll.png" alt="SLC Logo" class="h-8 w-auto" />
            <span class="ml-2 text-xl font-semibold">Siloe Center / Mepavie</span>
          </div>
        </div>
        <div class="hidden md:flex items-center space-x-8">
          <a
            href="#"
            :class="[
              'px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900',
            ]"
            >Home</a
          >
          <a
            href="#"
            :class="[
              'px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900',
            ]"
            >About</a
          >
          <a
            href="#"
            :class="[
              'px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900',
            ]"
            >Services</a
          >
          <a
            href="#"
            :class="[
              'px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900',
            ]"
            >Sermons</a
          >
          <a
            href="#"
            :class="[
              'px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900',
            ]"
            >Events</a
          >
          <a
            href="#"
            :class="[
              'px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105',
              isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-700 hover:text-gray-900',
            ]"
            >Contact</a
          >

          <!-- Theme Toggle Button -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full transition-all duration-300 hover:scale-110"
            :class="
              isDarkMode
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-gray-200 hover:bg-gray-300'
            "
            aria-label="Toggle theme"
          >
            <sun v-if="isDarkMode" class="h-5 w-5 text-white" />
            <moon v-else class="h-5 w-5 text-gray-900" />
          </button>
        </div>
        <div class="flex md:hidden items-center space-x-4">
          <!-- Mobile Theme Toggle -->
          <button
            @click="toggleTheme"
            class="p-2 rounded-full transition-all duration-300 hover:scale-110"
            :class="
              isDarkMode
                ? 'bg-white/10 hover:bg-white/20'
                : 'bg-gray-200 hover:bg-gray-300'
            "
            aria-label="Toggle theme"
          >
            <sun v-if="isDarkMode" class="h-5 w-5 text-white" />
            <moon v-else class="h-5 w-5 text-gray-900" />
          </button>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            <menu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <x v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden shadow-lg"
      :class="
        isDarkMode ? 'bg-black/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'
      "
    >
      <div class="px-2 pt-2 pb-3 space-y-1">
        <a
          href="#"
          :class="[
            'block px-3 py-2 text-base font-medium transition-all duration-300',
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-gray-900',
          ]"
          >Home</a
        >
        <a
          href="#"
          :class="[
            'block px-3 py-2 text-base font-medium transition-all duration-300',
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-gray-900',
          ]"
          >About</a
        >
        <a
          href="#"
          :class="[
            'block px-3 py-2 text-base font-medium transition-all duration-300',
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-gray-900',
          ]"
          >Services</a
        >
        <a
          href="#"
          :class="[
            'block px-3 py-2 text-base font-medium transition-all duration-300',
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-gray-900',
          ]"
          >Sermons</a
        >
        <a
          href="#"
          :class="[
            'block px-3 py-2 text-base font-medium transition-all duration-300',
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-gray-900',
          ]"
          >Events</a
        >
        <a
          href="#"
          :class="[
            'block px-3 py-2 text-base font-medium transition-all duration-300',
            isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-700 hover:text-gray-900',
          ]"
          >Contact</a
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

const toggleTheme = () => {
  themeStore.toggleTheme();
};
</script>
