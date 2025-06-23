<template>
  <div
    class="pt-50 pb-16 transition-colors duration-500 relative overflow-hidden"
    :class="isDarkMode ? 'bg-black' : 'bg-amber-50'"
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
      <div class="text-center">
        <span
          class="text-sm uppercase tracking-[0.25em] font-medium mb-3 block"
          :class="isDarkMode ? 'text-amber-100/80' : 'text-amber-700/80'"
        >
          Parole de vie
        </span>
        <h1
          class="text-4xl md:text-5xl font-bold mb-4 font-serif"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Enseignements
        </h1>
        <div
          class="w-24 h-0.5 mx-auto mt-4 mb-8 rounded-full"
          :class="isDarkMode ? 'bg-amber-100/50' : 'bg-amber-700/50'"
        ></div>
        <p
          class="text-lg max-w-3xl mx-auto leading-relaxed"
          :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
        >
          Découvrez nos enseignements bibliques pour nourrir votre foi et approfondir
          votre relation avec Dieu.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  isDarkMode: {
    type: Boolean,
    required: true,
  },
});
</script>
