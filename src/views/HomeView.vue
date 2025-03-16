<template>
  <!-- Hero Section -->
  <div class="relative pt-16">
    <div class="absolute inset-0 z-0 overflow-hidden">
      <HomePlaceholder />
      <div
        class="absolute inset-0"
        :class="
          isDarkMode
            ? 'bg-gradient-to-r from-black via-black/70 to-black/50'
            : 'bg-gradient-to-r from-white/80 via-white/60 to-white/40'
        "
      ></div>
    </div>
    <div class="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
      <div
        class="text-center"
        v-motion
        :initial="{ opacity: 0, y: 100 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
      >
        <h1
          class="text-4xl md:text-6xl font-bold mb-4 tracking-tight"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Bienvenue au Siloe Center
        </h1>
        <p
          class="text-xl md:text-2xl mb-8"
          :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
        >
          Un lieu de culte, de communauté et de croissance spirituelle
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button
            :class="[
              'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-glow',
              isDarkMode
                ? 'bg-white hover:bg-gray-200 text-black'
                : 'bg-gray-900 hover:bg-gray-800 text-white',
            ]"
          >
            Joignez vous à nous
          </button>
          <button
            :class="[
              'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 border',
              isDarkMode
                ? 'bg-transparent hover:bg-white/10 text-white border-white'
                : 'bg-transparent hover:bg-gray-900/10 text-gray-900 border-gray-900',
            ]"
          >
            Regardez en ligne
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Service Times -->
  <div
    class="py-8 border-y transition-colors duration-500"
    :class="
      isDarkMode
        ? 'bg-gradient-to-r from-gray-900 to-black border-white/10'
        : 'bg-gradient-to-r from-gray-100 to-white border-gray-200'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div class="transform transition-all duration-500 hover:scale-105">
          <h3
            class="text-xl font-semibold mb-2"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Services du dimanche
          </h3>
          <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">8:00 h à 10:00 h</p>
        </div>
        <div class="transform transition-all duration-500 hover:scale-105">
          <h3
            class="text-xl font-semibold mb-2"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Priere du mercredi
          </h3>
          <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">18:00 h à 20:00 h</p>
        </div>
        <div class="transform transition-all duration-500 hover:scale-105">
          <h3
            class="text-xl font-semibold mb-2"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Youth Group
          </h3>
          <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
            Fridays at 6:30 PM
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- About Section -->
  <div
    class="py-16 transition-colors duration-500"
    :class="
      isDarkMode
        ? 'bg-gradient-to-b from-black to-gray-900'
        : 'bg-gradient-to-b from-white to-gray-100'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="text-center mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          A propos de notre église
        </h2>
        <div
          class="w-16 h-1 mx-auto mt-4 mb-8"
          :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
        ></div>
        <p
          class="text-lg max-w-3xl mx-auto"
          :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
        >
          Fondée il y a 10 ans, Grace Church est un phare d'espoir et de foi dans notre
          communauté. Nous nous engageons à répandre l'amour de Dieu à travers le culte,
          la fraternité et le service.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div
          :class="[
            'p-6 rounded-lg shadow-xl border transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            :class="isDarkMode ? 'bg-white/10' : 'bg-gray-900/10'"
          >
            <heart class="h-8 w-8" :class="isDarkMode ? 'text-white' : 'text-gray-900'" />
          </div>
          <h3
            class="text-xl font-semibold mb-2"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Notre mission
          </h3>
          <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
            Aimer Dieu, aimer les gens et faire des disciples qui transforment les
            communautés.
          </p>
        </div>

        <div
          :class="[
            'p-6 rounded-lg shadow-xl border transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
        >
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            :class="isDarkMode ? 'bg-white/10' : 'bg-gray-900/10'"
          >
            <book-open
              class="h-8 w-8"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            />
          </div>
          <h3
            class="text-xl font-semibold mb-2"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Nos Croyances
          </h3>
          <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
            Fondées sur les Écritures, guidées par la tradition et ouvertes au mouvement
            de l'Esprit.
          </p>
        </div>

        <div
          :class="[
            'p-6 rounded-lg shadow-xl border transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
        >
          <div
            class="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
            :class="isDarkMode ? 'bg-white/10' : 'bg-gray-900/10'"
          >
            <users class="h-8 w-8" :class="isDarkMode ? 'text-white' : 'text-gray-900'" />
          </div>
          <h3
            class="text-xl font-semibold mb-2"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Our Community
          </h3>
          <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
            A diverse family of believers united in faith, hope, and love.
          </p>
        </div>
      </div>

      <div
        class="mt-16"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
      >
        <h3
          class="text-2xl font-semibold text-center mb-8 tracking-tight"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          La Vie de Notre Église
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            class="rounded-lg overflow-hidden shadow-xl group relative transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
          >
            <img
              src="@/assets/images/churchLive.jpg"
              alt="Culte du dimanche"
              class="w-full h-64 object-cover transition-all duration-500"
              :class="
                isDarkMode
                  ? 'filter grayscale group-hover:grayscale-0'
                  : 'group-hover:brightness-110'
              "
            />
            <div
              class="absolute inset-0 opacity-70 group-hover:opacity-50 transition-all duration-500"
              :class="
                isDarkMode
                  ? 'bg-gradient-to-t from-black via-black/50 to-transparent'
                  : 'bg-gradient-to-t from-white/80 via-white/50 to-transparent'
              "
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
            >
              <p
                class="font-semibold text-lg"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Culte du dimanche
              </p>
            </div>
          </div>
          <div
            class="rounded-lg overflow-hidden shadow-xl group relative transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
          >
            <img
              src="@/assets/images/bibleStudy.jpeg"
              alt="Étude biblique"
              class="w-full h-64 object-cover transition-all duration-500"
              :class="
                isDarkMode
                  ? 'filter grayscale group-hover:grayscale-0'
                  : 'group-hover:brightness-110'
              "
            />
            <div
              class="absolute inset-0 opacity-70 group-hover:opacity-50 transition-all duration-500"
              :class="
                isDarkMode
                  ? 'bg-gradient-to-t from-black via-black/50 to-transparent'
                  : 'bg-gradient-to-t from-white/80 via-white/50 to-transparent'
              "
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
            >
              <p
                class="font-semibold text-lg"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Étude biblique
              </p>
            </div>
          </div>
          <div
            class="rounded-lg overflow-hidden shadow-xl group relative transform transition-all duration-500 hover:scale-105 hover:shadow-glow"
          >
            <img
              src="@/assets/images/youth.jpg"
              alt="Groupe de jeunes"
              class="w-full h-64 object-cover transition-all duration-500"
              :class="
                isDarkMode
                  ? 'filter grayscale group-hover:grayscale-0'
                  : 'group-hover:brightness-110'
              "
            />
            <div
              class="absolute inset-0 opacity-70 group-hover:opacity-50 transition-all duration-500"
              :class="
                isDarkMode
                  ? 'bg-gradient-to-t from-black via-black/50 to-transparent'
                  : 'bg-gradient-to-t from-white/80 via-white/50 to-transparent'
              "
            ></div>
            <div
              class="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500"
            >
              <p
                class="font-semibold text-lg"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Groupe de jeunes
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Statistiques -->
  <div
    class="py-16 relative overflow-hidden transition-colors duration-500"
    :class="isDarkMode ? 'bg-black' : 'bg-white'"
  >
    <div
      class="absolute inset-0"
      :class="
        isDarkMode
          ? 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/30 to-black'
          : 'bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-200/50 to-white'
      "
    ></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="text-center mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Notre Communauté en Chiffres
        </h2>
        <div
          class="w-16 h-1 mx-auto mt-4 mb-8"
          :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div
          class="text-center transform transition-all duration-500 hover:scale-110"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <div
            class="text-5xl font-bold mb-2 counter"
            data-target="1500"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            {{ counters.fidèles }}
          </div>
          <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Fidèles</div>
        </div>
        <div
          class="text-center transform transition-all duration-500 hover:scale-110"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
        >
          <div
            class="text-5xl font-bold mb-2 counter"
            data-target="50"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            {{ counters.annéesDeService }}
          </div>
          <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
            Années de Service
          </div>
        </div>
        <div
          class="text-center transform transition-all duration-500 hover:scale-110"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 400, duration: 800 } }"
        >
          <div
            class="text-5xl font-bold mb-2 counter"
            data-target="100"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            {{ counters.bénévoles }}
          </div>
          <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Bénévoles</div>
        </div>
        <div
          class="text-center transform transition-all duration-500 hover:scale-110"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 500, duration: 800 } }"
        >
          <div
            class="text-5xl font-bold mb-2 counter"
            data-target="20"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            {{ counters.ministères }}
          </div>
          <div :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">Ministères</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Derniers Sermons -->
  <div
    class="py-16 transition-colors duration-500"
    :class="
      isDarkMode
        ? 'bg-gradient-to-b from-gray-900 to-black'
        : 'bg-gradient-to-b from-gray-100 to-white'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div
        class="text-center mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Derniers Enseignements
        </h2>
        <div
          class="w-16 h-1 mx-auto mt-4 mb-8"
          :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          :class="[
            'rounded-lg overflow-hidden shadow-xl border group transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <div class="relative overflow-hidden">
            <img
              src=""
              alt="Miniature du sermon"
              class="w-full h-48 object-cover transition-all duration-500 transform group-hover:scale-110"
              :class="
                isDarkMode
                  ? 'filter grayscale group-hover:grayscale-0'
                  : 'group-hover:brightness-110'
              "
            />
            <div
              class="absolute inset-0"
              :class="
                isDarkMode
                  ? 'bg-gradient-to-t from-black to-transparent opacity-60'
                  : 'bg-gradient-to-t from-white/80 to-transparent opacity-40'
              "
            ></div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div
                :class="isDarkMode ? 'bg-white/20' : 'bg-gray-900/20'"
                class="backdrop-blur-sm p-4 rounded-full"
              >
                <play
                  class="h-8 w-8"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                />
              </div>
            </div>
          </div>
          <div class="p-6">
            <div
              class="text-sm mb-2"
              :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
            >
              12 Mars 2023
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Marcher dans la Foi
            </h3>
            <p class="mb-4" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              Le Pasteur Michael Johnson explore comment nous pouvons renforcer notre foi
              en temps de difficulté.
            </p>
            <button class="flex items-center font-medium group">
              <play
                class="h-4 w-4 mr-2 group-hover:animate-pulse"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              />
              <span class="relative" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                Regarder le Sermon
                <span
                  class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
                ></span>
              </span>
            </button>
          </div>
        </div>

        <div
          :class="[
            'rounded-lg overflow-hidden shadow-xl border group transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: 300, duration: 800 } }"
        >
          <div class="relative overflow-hidden">
            <img
              src=""
              alt="Miniature du sermon"
              class="w-full h-48 object-cover transition-all duration-500 transform group-hover:scale-110"
              :class="
                isDarkMode
                  ? 'filter grayscale group-hover:grayscale-0'
                  : 'group-hover:brightness-110'
              "
            />
            <div
              class="absolute inset-0"
              :class="
                isDarkMode
                  ? 'bg-gradient-to-t from-black to-transparent opacity-60'
                  : 'bg-gradient-to-t from-white/80 to-transparent opacity-40'
              "
            ></div>
            <div
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
              <div
                :class="isDarkMode ? 'bg-white/20' : 'bg-gray-900/20'"
                class="backdrop-blur-sm p-4 rounded-full"
              >
                <play
                  class="h-8 w-8"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                />
              </div>
            </div>
          </div>
          <div class="p-6">
            <div
              class="text-sm mb-2"
              :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
            >
              5 Mars 2023
            </div>
            <h3
              class="text-xl font-semibold mb-2"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Le Pouvoir de la Prière
            </h3>
            <p class="mb-4" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              Découvrez comment la prière peut transformer votre vie et approfondir votre
              relation avec Dieu.
            </p>
            <button class="flex items-center font-medium group">
              <play
                class="h-4 w-4 mr-2 group-hover:animate-pulse"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              />
              <span class="relative" :class="isDarkMode ? 'text-white' : 'text-gray-900'">
                Regarder le Sermon
                <span
                  class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                  :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
                ></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Événements à venir -->
  <div
    class="py-16 relative overflow-hidden transition-colors duration-500"
    :class="isDarkMode ? 'bg-black' : 'bg-white'"
  >
    <div
      class="absolute inset-0"
      :class="
        isDarkMode
          ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800/30 to-black'
          : 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200/50 to-white'
      "
    ></div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div
        class="text-center mb-12"
        v-motion
        :initial="{ opacity: 0, y: 50 }"
        :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
      >
        <h2
          class="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
        >
          Événements à venir
        </h2>
        <div
          class="w-16 h-1 mx-auto mt-4 mb-8"
          :class="isDarkMode ? 'bg-white' : 'bg-gray-900'"
        ></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          :class="[
            'p-6 rounded-lg shadow-xl border flex transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 200, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-lg p-4 text-center mr-6"
            :class="
              isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-900/10 text-gray-900'
            "
          >
            <div class="text-2xl font-bold">15</div>
            <div class="text-sm">MAR</div>
          </div>
          <div>
            <h3
              class="text-xl font-semibold mb-2"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Journée de sensibilisation communautaire
            </h3>
            <p class="mb-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              Rejoignez-nous pour servir notre communauté locale à travers divers projets.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'"
            >
              <clock class="h-4 w-4 mr-1" />
              <span>9:00 AM - 2:00 PM</span>
              <map-pin class="h-4 w-4 ml-4 mr-1" />
              <span>Parking de l'église</span>
            </div>
          </div>
        </div>

        <div
          :class="[
            'p-6 rounded-lg shadow-xl border flex transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 300, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-lg p-4 text-center mr-6"
            :class="
              isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-900/10 text-gray-900'
            "
          >
            <div class="text-2xl font-bold">22</div>
            <div class="text-sm">MAR</div>
          </div>
          <div>
            <h3
              class="text-xl font-semibold mb-2"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Étude biblique pour femmes
            </h3>
            <p class="mb-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              Un rassemblement spécial pour les femmes afin d'étudier les Écritures et de
              renforcer la communauté.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'"
            >
              <clock class="h-4 w-4 mr-1" />
              <span>7:00 PM - 8:30 PM</span>
              <map-pin class="h-4 w-4 ml-4 mr-1" />
              <span>Salle de communion</span>
            </div>
          </div>
        </div>

        <div
          :class="[
            'p-6 rounded-lg shadow-xl border flex transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, x: -50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 400, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-lg p-4 text-center mr-6"
            :class="
              isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-900/10 text-gray-900'
            "
          >
            <div class="text-2xl font-bold">25</div>
            <div class="text-sm">MAR</div>
          </div>
          <div>
            <h3
              class="text-xl font-semibold mb-2"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Soirée jeux pour les jeunes
            </h3>
            <p class="mb-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              Une soirée de fun, de jeux et de communion pour les élèves du collège et du
              lycée.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'"
            >
              <clock class="h-4 w-4 mr-1" />
              <span>6:30 PM - 9:00 PM</span>
              <map-pin class="h-4 w-4 ml-4 mr-1" />
              <span>Centre des jeunes</span>
            </div>
          </div>
        </div>

        <div
          :class="[
            'p-6 rounded-lg shadow-xl border flex transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
              : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
          ]"
          v-motion
          :initial="{ opacity: 0, x: 50 }"
          :visible="{ opacity: 1, x: 0, transition: { delay: 500, duration: 800 } }"
        >
          <div
            class="flex-shrink-0 rounded-lg p-4 text-center mr-6"
            :class="
              isDarkMode ? 'bg-white/10 text-white' : 'bg-gray-900/10 text-gray-900'
            "
          >
            <div class="text-2xl font-bold">02</div>
            <div class="text-sm">AVR</div>
          </div>
          <div>
            <h3
              class="text-xl font-semibold mb-2"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Célébration du Dimanche de Pâques
            </h3>
            <p class="mb-2" :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
              Services de culte spéciaux célébrant la résurrection de Jésus-Christ.
            </p>
            <div
              class="flex items-center text-sm"
              :class="isDarkMode ? 'text-gray-500' : 'text-gray-500'"
            >
              <clock class="h-4 w-4 mr-1" />
              <span>8:00 AM, 9:30 AM & 11:00 AM</span>
              <map-pin class="h-4 w-4 ml-4 mr-1" />
              <span>Sanctuaire principal</span>
            </div>
          </div>
        </div>
      </div>

      <div
        class="text-center mt-8"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
      >
        <button
          :class="[
            'font-medium py-2 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-glow',
            isDarkMode
              ? 'bg-white hover:bg-gray-200 text-black'
              : 'bg-gray-900 hover:bg-gray-800 text-white',
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
