<template>
  <!-- Hero Section -->
  <div class="relative pt-16 min-h-screen flex items-center">
    <!-- Background with overlay -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <HomePlaceholder />
      <div
        class="absolute inset-0"
        :class="
          isDarkMode
            ? 'bg-gradient-to-b from-black/70 via-black/70 to-black/60'
            : 'bg-gradient-to-b from-white/85 via-white/75 to-white/65'
        "
      ></div>
      <!-- Subtle pattern overlay -->
      <div
        class="absolute inset-0 opacity-10"
        :class="
          isDarkMode
            ? 'bg-[url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEyYzAgOS45NCA4LjA2IDE4IDE4IDE4djEyYy05Ljk0IDAtMTgtOC4wNi0xOC0xOEgzNnoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9zdmc+\')]'
            : 'bg-[url(\'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDEyYzAgOS45NCA4LjA2IDE4IDE4IDE4djEyYy05Ljk0IDAtMTgtOC4wNi0xOC0xOEgzNnoiIGZpbGw9IiMwMDAwMDAiLz48L2c+PC9zdmc+\')]'
        "
      ></div>
    </div>

    <!-- Content -->
    <div class="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div
        class="text-center"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
      >
        <!-- Decorative cross symbol -->
        <div class="flex justify-center mb-6">
          <div
            class="w-12 h-12 relative"
            :class="isDarkMode ? 'text-amber-100/80' : 'text-amber-700/80'"
          >
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-0.5 h-full rounded-full"
                :class="isDarkMode ? 'bg-amber-100/80' : 'bg-amber-700/80'"
              ></div>
            </div>
            <div class="absolute inset-0 flex items-center justify-center">
              <div
                class="w-full h-0.5 rounded-full"
                :class="isDarkMode ? 'bg-amber-100/80' : 'bg-amber-700/80'"
              ></div>
            </div>
          </div>
        </div>

        <!-- Subtitle above main heading -->
        <p
          class="text-sm uppercase tracking-[0.25em] mb-4 font-medium"
          :class="isDarkMode ? 'text-amber-100/80' : 'text-amber-700/80'"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }"
        >
          Église Évangélique
        </p>

        <!-- Main heading with serif font -->
        <h1
          class="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-serif"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 600, duration: 800 } }"
        >
          Bienvenue au <span class="italic">Siloe Center</span>
        </h1>

        <!-- Divider -->
        <div class="flex justify-center mb-6">
          <div
            class="w-24 h-0.5 rounded-full"
            :class="isDarkMode ? 'bg-amber-100/50' : 'bg-amber-700/50'"
          ></div>
        </div>

        <!-- Subheading with improved typography -->
        <p
          class="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed font-light"
          :class="isDarkMode ? 'text-gray-200' : 'text-gray-700'"
          v-motion
          :initial="{ opacity: 0 }"
          :enter="{ opacity: 1, transition: { delay: 800, duration: 800 } }"
        >
          Un lieu de culte, de communauté et de croissance spirituelle
        </p>

        <!-- CTA Buttons with improved styling -->
        <div
          class="flex flex-col sm:flex-row justify-center gap-4"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 1000, duration: 800 } }"
        >
          <button
            :class="[
              'font-medium py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-sm',
              isDarkMode
                ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
                : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg',
            ]"
          >
            Joignez-vous à nous
          </button>
          <button
            :class="[
              'font-medium py-3.5 px-8 rounded-full transition-all duration-300 hover:scale-105 border-2',
              isDarkMode
                ? 'bg-transparent hover:bg-white/10 text-white border-white/70 hover:border-white'
                : 'bg-transparent hover:bg-amber-700/10 text-amber-700 border-amber-700/70 hover:border-amber-700',
            ]"
          >
            <span class="flex items-center justify-center gap-2">
              <Play class="w-4 h-4" /> Regardez en ligne
            </span>
          </button>
        </div>

        <!-- Scroll indicator -->
      </div>
    </div>
  </div>
  <!-- Service Times -->
  <div
    class="py-12 border-y transition-colors duration-500 relative overflow-hidden"
    :class="
      isDarkMode
        ? 'bg-gradient-to-r from-gray-900 to-black border-white/10'
        : 'bg-gradient-to-r from-amber-50 to-white border-amber-100/50'
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

    <!-- Section heading -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
      <h2
        class="text-2xl md:text-3xl font-serif font-medium mb-2"
        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
      >
        Nos Horaires
      </h2>
      <div class="flex justify-center mb-2">
        <div
          class="w-16 h-0.5 rounded-full"
          :class="isDarkMode ? 'bg-amber-100/50' : 'bg-amber-700/50'"
        ></div>
      </div>
      <p
        class="max-w-2xl mx-auto text-sm md:text-base"
        :class="isDarkMode ? 'text-gray-300' : 'text-gray-600'"
      >
        Rejoignez-nous pour nos services réguliers et activités communautaires
      </p>
    </div>

    <!-- Service times grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <!-- Sunday Service -->
        <div
          class="transform transition-all duration-500 hover:scale-102 group p-6 rounded-2xl"
          :class="
            isDarkMode
              ? 'hover:bg-white/5 hover:shadow-lg hover:shadow-white/5'
              : 'hover:bg-amber-50 hover:shadow-lg hover:shadow-amber-100/20'
          "
        >
          <div class="flex justify-center mb-4">
            <div
              class="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
              :class="
                isDarkMode
                  ? 'bg-white/10 text-amber-100 group-hover:bg-white/15'
                  : 'bg-amber-100 text-amber-700 group-hover:bg-amber-200'
              "
            >
              <Sun class="w-7 h-7" />
            </div>
          </div>
          <h3
            class="text-xl font-semibold mb-2 transition-colors duration-300"
            :class="
              isDarkMode
                ? 'text-white group-hover:text-amber-100'
                : 'text-gray-900 group-hover:text-amber-800'
            "
          >
            Services du Dimanche
          </h3>
          <p
            class="transition-colors duration-300"
            :class="
              isDarkMode
                ? 'text-gray-400 group-hover:text-gray-300'
                : 'text-gray-600 group-hover:text-gray-700'
            "
          >
            <span class="font-medium">8:00</span> à <span class="font-medium">10:00</span>
          </p>
        </div>

        <!-- Wednesday Prayer -->
        <div
          class="transform transition-all duration-500 hover:scale-102 group p-6 rounded-2xl"
          :class="
            isDarkMode
              ? 'hover:bg-white/5 hover:shadow-lg hover:shadow-white/5'
              : 'hover:bg-amber-50 hover:shadow-lg hover:shadow-amber-100/20'
          "
        >
          <div class="flex justify-center mb-4">
            <div
              class="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
              :class="
                isDarkMode
                  ? 'bg-white/10 text-amber-100 group-hover:bg-white/15'
                  : 'bg-amber-100 text-amber-700 group-hover:bg-amber-200'
              "
            >
              <HandsPraying class="w-7 h-7" />
            </div>
          </div>
          <h3
            class="text-xl font-semibold mb-2 transition-colors duration-300"
            :class="
              isDarkMode
                ? 'text-white group-hover:text-amber-100'
                : 'text-gray-900 group-hover:text-amber-800'
            "
          >
            Prière du Mercredi
          </h3>
          <p
            class="transition-colors duration-300"
            :class="
              isDarkMode
                ? 'text-gray-400 group-hover:text-gray-300'
                : 'text-gray-600 group-hover:text-gray-700'
            "
          >
            <span class="font-medium">18:00</span> à
            <span class="font-medium">20:00</span>
          </p>
        </div>

        <!-- Youth Group -->
        <div
          class="transform transition-all duration-500 hover:scale-102 group p-6 rounded-2xl"
          :class="
            isDarkMode
              ? 'hover:bg-white/5 hover:shadow-lg hover:shadow-white/5'
              : 'hover:bg-amber-50 hover:shadow-lg hover:shadow-amber-100/20'
          "
        >
          <div class="flex justify-center mb-4">
            <div
              class="w-16 h-16 rounded-full flex items-center justify-center transition-colors duration-300"
              :class="
                isDarkMode
                  ? 'bg-white/10 text-amber-100 group-hover:bg-white/15'
                  : 'bg-amber-100 text-amber-700 group-hover:bg-amber-200'
              "
            >
              <Users class="w-7 h-7" />
            </div>
          </div>
          <h3
            class="text-xl font-semibold mb-2 transition-colors duration-300"
            :class="
              isDarkMode
                ? 'text-white group-hover:text-amber-100'
                : 'text-gray-900 group-hover:text-amber-800'
            "
          >
            Groupe de Jeunes
          </h3>
          <p
            class="transition-colors duration-300"
            :class="
              isDarkMode
                ? 'text-gray-400 group-hover:text-gray-300'
                : 'text-gray-600 group-hover:text-gray-700'
            "
          >
            <span class="font-medium">Vendredi</span> à
            <span class="font-medium">18:30</span>
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div
    class="py-24 transition-colors duration-500 relative overflow-hidden"
    :class="{
      'bg-gradient-to-b from-black to-gray-900': isDarkMode,
      'bg-gradient-to-b from-white to-amber-50': !isDarkMode,
    }"
  >
    <!-- Decorative elements -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div
        class="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
      ></div>
      <div
        class="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <span
          class="text-sm uppercase tracking-[0.25em] font-medium mb-3 block"
          :class="{ 'text-amber-100/80': isDarkMode, 'text-amber-700/80': !isDarkMode }"
        >
          Notre Histoire
        </span>
        <h2
          class="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif"
          :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
        >
          À propos de notre église
        </h2>
        <div
          class="w-24 h-0.5 mx-auto mt-4 mb-8 rounded-full"
          :class="{ 'bg-amber-100/50': isDarkMode, 'bg-amber-700/50': !isDarkMode }"
        ></div>
        <p
          class="text-lg max-w-3xl mx-auto leading-relaxed"
          :class="{ 'text-gray-300': isDarkMode, 'text-gray-700': !isDarkMode }"
        >
          Fondée il y a 10 ans, Grace Church est un phare d'espoir et de foi dans notre
          communauté. Nous nous engageons à répandre l'amour de Dieu à travers le culte,
          la fraternité et le service.
        </p>
      </div>

      <!-- Core Values Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <!-- Mission Card -->
        <div
          :class="[
            'p-8 rounded-2xl shadow-xl border transform transition-all duration-500 hover:scale-102 relative overflow-hidden group',
            {
              'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20': isDarkMode,
              'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200': !isDarkMode,
            },
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <!-- Decorative background element -->
          <div
            class="absolute -right-16 -bottom-16 w-48 h-48 rounded-full opacity-10 transition-opacity duration-500 group-hover:opacity-20"
            :class="{ 'bg-amber-100': isDarkMode, 'bg-amber-700': !isDarkMode }"
          ></div>

          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 relative z-10 transition-all duration-300 group-hover:scale-110"
            :class="{ 'bg-amber-100/10': isDarkMode, 'bg-amber-100': !isDarkMode }"
          >
            <heart
              class="h-10 w-10"
              :class="{ 'text-amber-100': isDarkMode, 'text-amber-700': !isDarkMode }"
            />
          </div>
          <h3
            class="text-2xl font-serif font-semibold mb-4 relative z-10"
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
          >
            Notre mission
          </h3>
          <p
            class="relative z-10 leading-relaxed"
            :class="{ 'text-gray-300': isDarkMode, 'text-gray-700': !isDarkMode }"
          >
            Aimer Dieu, aimer les gens et faire des disciples qui transforment les
            communautés.
          </p>
        </div>

        <!-- Beliefs Card -->
        <div
          :class="[
            'p-8 rounded-2xl shadow-xl border transform transition-all duration-500 hover:scale-102 relative overflow-hidden group',
            {
              'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20': isDarkMode,
              'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200': !isDarkMode,
            },
          ]"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
        >
          <!-- Decorative background element -->
          <div
            class="absolute -right-16 -bottom-16 w-48 h-48 rounded-full opacity-10 transition-opacity duration-500 group-hover:opacity-20"
            :class="{ 'bg-amber-100': isDarkMode, 'bg-amber-700': !isDarkMode }"
          ></div>

          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 relative z-10 transition-all duration-300 group-hover:scale-110"
            :class="{ 'bg-amber-100/10': isDarkMode, 'bg-amber-100': !isDarkMode }"
          >
            <book-open
              class="h-10 w-10"
              :class="{ 'text-amber-100': isDarkMode, 'text-amber-700': !isDarkMode }"
            />
          </div>
          <h3
            class="text-2xl font-serif font-semibold mb-4 relative z-10"
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
          >
            Nos Croyances
          </h3>
          <p
            class="relative z-10 leading-relaxed"
            :class="{ 'text-gray-300': isDarkMode, 'text-gray-700': !isDarkMode }"
          >
            Fondées sur les Écritures, guidées par la tradition et ouvertes au mouvement
            de l'Esprit.
          </p>
        </div>

        <!-- Community Card -->
        <div
          :class="[
            'p-8 rounded-2xl shadow-xl border transform transition-all duration-500 hover:scale-102 relative overflow-hidden group',
            {
              'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20': isDarkMode,
              'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200': !isDarkMode,
            },
          ]"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
        >
          <!-- Decorative background element -->
          <div
            class="absolute -right-16 -bottom-16 w-48 h-48 rounded-full opacity-10 transition-opacity duration-500 group-hover:opacity-20"
            :class="{ 'bg-amber-100': isDarkMode, 'bg-amber-700': !isDarkMode }"
          ></div>

          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 relative z-10 transition-all duration-300 group-hover:scale-110"
            :class="{ 'bg-amber-100/10': isDarkMode, 'bg-amber-100': !isDarkMode }"
          >
            <users
              class="h-10 w-10"
              :class="{ 'text-amber-100': isDarkMode, 'text-amber-700': !isDarkMode }"
            />
          </div>
          <h3
            class="text-2xl font-serif font-semibold mb-4 relative z-10"
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
          >
            Notre Communauté
          </h3>
          <p
            class="relative z-10 leading-relaxed"
            :class="{ 'text-gray-300': isDarkMode, 'text-gray-700': !isDarkMode }"
          >
            Une famille diverse de croyants unis dans la foi, l'espérance et l'amour.
          </p>
        </div>
      </div>

      <!-- Church Life Section -->
      <div
        class="mt-24"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
      >
        <h3
          class="text-2xl md:text-3xl font-serif font-semibold text-center mb-12 tracking-tight"
          :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
        >
          La Vie de Notre Église
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Sunday Worship Card -->
          <div
            class="rounded-2xl overflow-hidden shadow-xl group relative transform transition-all duration-500 hover:scale-102 hover:shadow-lg"
            :class="{
              'hover:shadow-amber-100/5': isDarkMode,
              'hover:shadow-amber-700/10': !isDarkMode,
            }"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                src="@/assets/images/churchLive.jpg"
                alt="Culte du dimanche"
                class="w-full h-full object-cover transition-all duration-700"
                :class="{
                  'brightness-75 filter saturate-50 group-hover:brightness-100 group-hover:saturate-100': isDarkMode,
                  'brightness-95 group-hover:brightness-105': !isDarkMode,
                }"
              />
            </div>
            <div
              class="absolute inset-0 opacity-60 group-hover:opacity-40 transition-all duration-500"
              :class="{
                'bg-gradient-to-t from-black via-black/70 to-transparent': isDarkMode,
                'bg-gradient-to-t from-black/60 via-black/30 to-transparent': !isDarkMode,
              }"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500"
            >
              <p class="font-serif font-semibold text-xl text-white">Culte du dimanche</p>
              <p
                class="text-white/80 text-sm mt-2 max-w-md transform opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
              >
                Rejoignez-nous pour un moment de louange, de prière et d'enseignement
                biblique.
              </p>
            </div>
          </div>

          <!-- Bible Study Card -->
          <div
            class="rounded-2xl overflow-hidden shadow-xl group relative transform transition-all duration-500 hover:scale-102 hover:shadow-lg"
            :class="{
              'hover:shadow-amber-100/5': isDarkMode,
              'hover:shadow-amber-700/10': !isDarkMode,
            }"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                src="@/assets/images/bibleStudy.jpeg"
                alt="Étude biblique"
                class="w-full h-full object-cover transition-all duration-700"
                :class="{
                  'brightness-75 filter saturate-50 group-hover:brightness-100 group-hover:saturate-100': isDarkMode,
                  'brightness-95 group-hover:brightness-105': !isDarkMode,
                }"
              />
            </div>
            <div
              class="absolute inset-0 opacity-60 group-hover:opacity-40 transition-all duration-500"
              :class="{
                'bg-gradient-to-t from-black via-black/70 to-transparent': isDarkMode,
                'bg-gradient-to-t from-black/60 via-black/30 to-transparent': !isDarkMode,
              }"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500"
            >
              <p class="font-serif font-semibold text-xl text-white">Étude biblique</p>
              <p
                class="text-white/80 text-sm mt-2 max-w-md transform opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
              >
                Approfondissez votre compréhension des Écritures à travers nos études
                bibliques hebdomadaires.
              </p>
            </div>
          </div>

          <!-- Youth Group Card -->
          <div
            class="rounded-2xl overflow-hidden shadow-xl group relative transform transition-all duration-500 hover:scale-102 hover:shadow-lg"
            :class="{
              'hover:shadow-amber-100/5': isDarkMode,
              'hover:shadow-amber-700/10': !isDarkMode,
            }"
          >
            <div class="aspect-[4/3] overflow-hidden">
              <img
                src="@/assets/images/youth.jpg"
                alt="Groupe de jeunes"
                class="w-full h-full object-cover transition-all duration-700"
                :class="{
                  'brightness-75 filter saturate-50 group-hover:brightness-100 group-hover:saturate-100': isDarkMode,
                  'brightness-95 group-hover:brightness-105': !isDarkMode,
                }"
              />
            </div>
            <div
              class="absolute inset-0 opacity-60 group-hover:opacity-40 transition-all duration-500"
              :class="{
                'bg-gradient-to-t from-black via-black/70 to-transparent': isDarkMode,
                'bg-gradient-to-t from-black/60 via-black/30 to-transparent': !isDarkMode,
              }"
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 group-hover:translate-y-0 transition-all duration-500"
            >
              <p class="font-serif font-semibold text-xl text-white">Groupe de jeunes</p>
              <p
                class="text-white/80 text-sm mt-2 max-w-md transform opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0"
              >
                Un espace dynamique où les jeunes peuvent grandir dans leur foi et créer
                des liens d'amitié.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Statistics Section -->
  <div
    class="py-20 relative overflow-hidden transition-colors duration-500"
    :class="{ 'bg-black': isDarkMode, 'bg-white': !isDarkMode }"
  >
    <div
      class="absolute inset-0"
      :class="{
        'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 to-black': isDarkMode,
        'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-100/30 to-white': !isDarkMode,
      }"
    ></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <span
          class="text-sm uppercase tracking-[0.25em] font-medium mb-3 block"
          :class="{ 'text-amber-100/80': isDarkMode, 'text-amber-700/80': !isDarkMode }"
        >
          En chiffres
        </span>
        <h2
          class="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif"
          :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
        >
          Notre Communauté
        </h2>
        <div
          class="w-24 h-0.5 mx-auto mt-4 mb-8 rounded-full"
          :class="{ 'bg-amber-100/50': isDarkMode, 'bg-amber-700/50': !isDarkMode }"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        <!-- Faithful Members Counter -->
        <div
          class="text-center transform transition-all duration-500 hover:scale-105 group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 group-hover:scale-110"
            :class="{ 'bg-amber-100/10': isDarkMode, 'bg-amber-100': !isDarkMode }"
          >
            <Users
              class="h-10 w-10"
              :class="{ 'text-amber-100': isDarkMode, 'text-amber-700': !isDarkMode }"
            />
          </div>
          <div
            class="text-5xl font-bold mb-2 counter font-serif"
            data-target="1500"
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
          >
            {{ counters.fidèles }}
          </div>
          <div
            class="text-lg font-medium"
            :class="{ 'text-amber-100/80': isDarkMode, 'text-amber-700/80': !isDarkMode }"
          >
            Fidèles
          </div>
        </div>

        <!-- Years of Service Counter -->
        <div
          class="text-center transform transition-all duration-500 hover:scale-105 group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 group-hover:scale-110"
            :class="{ 'bg-amber-100/10': isDarkMode, 'bg-amber-100': !isDarkMode }"
          >
            <Clock
              class="h-10 w-10"
              :class="{ 'text-amber-100': isDarkMode, 'text-amber-700': !isDarkMode }"
            />
          </div>
          <div
            class="text-5xl font-bold mb-2 counter font-serif"
            data-target="50"
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
          >
            {{ counters.annéesDeService }}
          </div>
          <div
            class="text-lg font-medium"
            :class="{ 'text-amber-100/80': isDarkMode, 'text-amber-700/80': !isDarkMode }"
          >
            Années de Service
          </div>
        </div>

        <!-- Volunteers Counter -->
        <div
          class="text-center transform transition-all duration-500 hover:scale-105 group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 group-hover:scale-110"
            :class="{ 'bg-amber-100/10': isDarkMode, 'bg-amber-100': !isDarkMode }"
          >
            <Heart
              class="h-10 w-10"
              :class="{ 'text-amber-100': isDarkMode, 'text-amber-700': !isDarkMode }"
            />
          </div>
          <div
            class="text-5xl font-bold mb-2 counter font-serif"
            data-target="100"
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
          >
            {{ counters.bénévoles }}
          </div>
          <div
            class="text-lg font-medium"
            :class="{ 'text-amber-100/80': isDarkMode, 'text-amber-700/80': !isDarkMode }"
          >
            Bénévoles
          </div>
        </div>

        <!-- Ministries Counter -->
        <div
          class="text-center transform transition-all duration-500 hover:scale-105 group"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
        >
          <div
            class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 group-hover:scale-110"
            :class="{ 'bg-amber-100/10': isDarkMode, 'bg-amber-100': !isDarkMode }"
          >
            <BookOpen
              class="h-10 w-10"
              :class="{ 'text-amber-100': isDarkMode, 'text-amber-700': !isDarkMode }"
            />
          </div>
          <div
            class="text-5xl font-bold mb-2 counter font-serif"
            data-target="20"
            :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
          >
            {{ counters.ministères }}
          </div>
          <div
            class="text-lg font-medium"
            :class="{ 'text-amber-100/80': isDarkMode, 'text-amber-700/80': !isDarkMode }"
          >
            Ministères
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="py-24 transition-colors duration-500 relative overflow-hidden"
    :class="
      isDarkMode
        ? 'bg-gradient-to-b from-gray-900 to-black'
        : 'bg-gradient-to-b from-amber-50 to-white'
    "
  >
    <!-- Decorative elements -->
    <div class="absolute inset-0 opacity-5 pointer-events-none">
      <div
        class="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
      ></div>
      <div
        class="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
      ></div>
    </div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <span
          class="text-sm uppercase tracking-[0.25em] font-medium mb-3 block"
          :class="isDarkMode ? 'text-amber-100/80' : 'text-amber-700/80'"
        >
          Parole de vie
        </span>
        <h2
          class="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Derniers Enseignements
        </h2>
        <div
          class="w-24 h-0.5 mx-auto mt-4 mb-8 rounded-full"
          :class="isDarkMode ? 'bg-amber-100/50' : 'bg-amber-700/50'"
        ></div>
      </div>

      <!-- Sermons Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Sermon 1 -->
        <!-- Sermon 1 -->
        <div
          :class="[
            'rounded-2xl overflow-hidden shadow-xl border group transform transition-all duration-500 hover:scale-102 hover:shadow-lg',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20 hover:shadow-amber-100/5'
              : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200 hover:shadow-amber-700/10',
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <div class="relative overflow-hidden aspect-video">
            <img
              src="https://api.eglisesiloecentre.org/storage/sermons/videos/01JYET27DZQR30DE943H0Z17PX.mp4"
              alt="Miniature du sermon"
              class="w-full h-full object-cover transition-all duration-700 transform"
              :class="
                isDarkMode
                  ? 'brightness-75 saturate-50 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105'
                  : 'brightness-95 group-hover:brightness-105 group-hover:scale-105'
              "
            />
            <div
              class="absolute inset-0"
              :class="
                isDarkMode
                  ? 'bg-gradient-to-t from-black to-transparent opacity-70'
                  : 'bg-gradient-to-t from-black/70 to-transparent/40 opacity-50'
              "
            ></div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div
                :class="isDarkMode ? 'bg-amber-100/20' : 'bg-amber-700/20'"
                class="backdrop-blur-sm p-5 rounded-full transition-transform duration-500 transform hover:scale-110"
              >
                <play class="h-10 w-10 text-white" />
              </div>
            </div>
          </div>
          <div class="p-8">
            <div class="flex items-center mb-4">
              <Calendar
                class="h-4 w-4 mr-2"
                :class="isDarkMode ? 'text-amber-100/70' : 'text-amber-700/70'"
              />
              <div
                class="text-sm font-medium"
                :class="isDarkMode ? 'text-amber-100/70' : 'text-amber-700/70'"
              >
                15 Avril 2023
              </div>
            </div>
            <h3
              class="text-2xl font-serif font-semibold mb-3"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              La Foi
            </h3>
            <p
              class="mb-6 leading-relaxed"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Découvrez comment la foi peut transformer votre vie et vous donner la force
              de surmonter tous les obstacles avec confiance.
            </p>
            <a class="flex items-center font-medium group" href="/enseignements">
              <play
                class="h-4 w-4 mr-2 group-hover:animate-pulse"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              />
              <span
                class="relative"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              >
                Regarder l'enseignement
                <span
                  class="absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 rounded-full"
                  :class="isDarkMode ? 'bg-amber-100' : 'bg-amber-700'"
                ></span>
              </span>
            </a>
          </div>
        </div>

        <!-- Add Sermon Button -->
        <div
          :class="[
            'rounded-2xl overflow-hidden border-dashed border-2 group flex flex-col items-center justify-center transition-all duration-500 hover:scale-102',
            isDarkMode
              ? 'border-white/20 hover:border-amber-100/30'
              : 'border-amber-200 hover:border-amber-300',
          ]"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
        >
          <div class="p-12 text-center">
            <div
              class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 transition-all duration-300 group-hover:scale-110"
              :class="isDarkMode ? 'bg-amber-100/10' : 'bg-amber-100'"
            >
              <Plus
                class="h-10 w-10"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              />
            </div>
            <h3
              class="text-2xl font-serif font-semibold mb-3"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Voir plus
            </h3>
            <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
              Découvrez tous nos enseignements et sermons archivés
            </p>
            <a
              href="/enseignements"
              class="inline-flex items-center justify-center px-6 py-3 rounded-full transition-all duration-300 font-medium"
              :class="
                isDarkMode
                  ? 'bg-amber-100/10 hover:bg-amber-100/20 text-amber-100'
                  : 'bg-amber-100 hover:bg-amber-200 text-amber-700'
              "
            >
              Tous les enseignements
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Upcoming Events Section -->
  <div
    class="py-24 relative overflow-hidden transition-colors duration-500"
    :class="isDarkMode ? 'bg-black' : 'bg-white'"
  >
    <div
      class="absolute inset-0"
      :class="
        isDarkMode
          ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800/30 to-black'
          : 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-100/30 to-white'
      "
    ></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div
        class="text-center mb-16"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <span
          class="text-sm uppercase tracking-[0.25em] font-medium mb-3 block"
          :class="isDarkMode ? 'text-amber-100/80' : 'text-amber-700/80'"
        >
          Calendrier
        </span>
        <h2
          class="text-3xl md:text-5xl font-bold mb-4 tracking-tight font-serif"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Événements à venir
        </h2>
        <div
          class="w-24 h-0.5 mx-auto mt-4 mb-8 rounded-full"
          :class="isDarkMode ? 'bg-amber-100/50' : 'bg-amber-700/50'"
        ></div>
      </div>

      <!-- Events Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Event 1 -->
        <div
          :class="[
            'p-6 rounded-2xl shadow-xl border flex transform transition-all duration-500 hover:scale-102 hover:shadow-lg group',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20 hover:shadow-amber-100/5'
              : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200 hover:shadow-amber-700/10',
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-2xl p-6 text-center mr-6 transition-all duration-300 group-hover:scale-105"
            :class="
              isDarkMode ? 'bg-amber-100/10 text-white' : 'bg-amber-100 text-amber-700'
            "
          >
            <div class="text-3xl font-bold font-serif">15</div>
            <div class="text-sm font-medium tracking-wider">MAR</div>
          </div>
          <div>
            <h3
              class="text-xl font-serif font-semibold mb-3"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Journée de sensibilisation communautaire
            </h3>
            <p
              class="mb-4 leading-relaxed"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Rejoignez-nous pour servir notre communauté locale à travers divers projets.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-amber-100/60' : 'text-amber-700/60'"
            >
              <clock class="h-4 w-4 mr-2" />
              <span>9:00 - 14:00</span>
              <map-pin class="h-4 w-4 ml-6 mr-2" />
              <span>Parking de l'église</span>
            </div>
          </div>
        </div>

        <!-- Event 2 -->
        <div
          :class="[
            'p-6 rounded-2xl shadow-xl border flex transform transition-all duration-500 hover:scale-102 hover:shadow-lg group',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20 hover:shadow-amber-100/5'
              : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200 hover:shadow-amber-700/10',
          ]"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-2xl p-6 text-center mr-6 transition-all duration-300 group-hover:scale-105"
            :class="
              isDarkMode ? 'bg-amber-100/10 text-white' : 'bg-amber-100 text-amber-700'
            "
          >
            <div class="text-3xl font-bold font-serif">22</div>
            <div class="text-sm font-medium tracking-wider">MAR</div>
          </div>
          <div>
            <h3
              class="text-xl font-serif font-semibold mb-3"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Étude biblique pour femmes
            </h3>
            <p
              class="mb-4 leading-relaxed"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Un rassemblement spécial pour les femmes afin d'étudier les Écritures et de
              renforcer la communauté.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-amber-100/60' : 'text-amber-700/60'"
            >
              <clock class="h-4 w-4 mr-2" />
              <span>19:00 - 20:30</span>
              <map-pin class="h-4 w-4 ml-6 mr-2" />
              <span>Salle de communion</span>
            </div>
          </div>
        </div>

        <!-- Event 3 -->
        <div
          :class="[
            'p-6 rounded-2xl shadow-xl border flex transform transition-all duration-500 hover:scale-102 hover:shadow-lg group',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20 hover:shadow-amber-100/5'
              : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200 hover:shadow-amber-700/10',
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-2xl p-6 text-center mr-6 transition-all duration-300 group-hover:scale-105"
            :class="
              isDarkMode ? 'bg-amber-100/10 text-white' : 'bg-amber-100 text-amber-700'
            "
          >
            <div class="text-3xl font-bold font-serif">25</div>
            <div class="text-sm font-medium tracking-wider">MAR</div>
          </div>
          <div>
            <h3
              class="text-xl font-serif font-semibold mb-3"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Soirée jeux pour les jeunes
            </h3>
            <p
              class="mb-4 leading-relaxed"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Une soirée de fun, de jeux et de communion pour les élèves du collège et du
              lycée.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-amber-100/60' : 'text-amber-700/60'"
            >
              <clock class="h-4 w-4 mr-2" />
              <span>18:30 - 21:00</span>
              <map-pin class="h-4 w-4 ml-6 mr-2" />
              <span>Centre des jeunes</span>
            </div>
          </div>
        </div>

        <!-- Event 4 -->
        <div
          :class="[
            'p-6 rounded-2xl shadow-xl border flex transform transition-all duration-500 hover:scale-102 hover:shadow-lg group',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20 hover:shadow-amber-100/5'
              : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200 hover:shadow-amber-700/10',
          ]"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-2xl p-6 text-center mr-6 transition-all duration-300 group-hover:scale-105"
            :class="
              isDarkMode ? 'bg-amber-100/10 text-white' : 'bg-amber-100 text-amber-700'
            "
          >
            <div class="text-3xl font-bold font-serif">02</div>
            <div class="text-sm font-medium tracking-wider">AVR</div>
          </div>
          <div>
            <h3
              class="text-xl font-serif font-semibold mb-3"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Célébration du Dimanche de Pâques
            </h3>
            <p
              class="mb-4 leading-relaxed"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Services de culte spéciaux célébrant la résurrection de Jésus-Christ.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-amber-100/60' : 'text-amber-700/60'"
            >
              <clock class="h-4 w-4 mr-2" />
              <span>8:00, 9:30 & 11:00</span>
              <map-pin class="h-4 w-4 ml-6 mr-2" />
              <span>Sanctuaire principal</span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Events Button -->
      <div
        class="text-center mt-12"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
      >
        <button
          :class="[
            'font-medium py-3 px-8 rounded-full transition-all duration-300 hover:scale-105 shadow-sm',
            isDarkMode
              ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
              : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg',
          ]"
        >
          Voir tous les événements
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useThemeStore } from "../stores/theme";
import HomePlaceholder from "../components/HomePlaceholder.vue";
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
const themeStore = useThemeStore();

const isDarkMode = computed(() => {
  return themeStore.isDarkMode;
});

const counters = ref({
  fidèles: 15,
  annéesDeService: 10,
  bénévoles: 250,
  ministères: 25,
});
</script>
