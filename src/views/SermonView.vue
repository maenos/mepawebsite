<template>
  <div v-if="isLoading" class="flex justify-center items-center min-h-[50vh]">
    <div
      class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"
    ></div>
  </div>

  <!-- Empty State -->
  <div
    v-else-if="!isLoading && sermons && sermons.length === 0"
    class="min-h-[60vh] flex flex-col items-center justify-center px-4"
    :class="isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'"
  >
    <div
      class="p-8 rounded-2xl border max-w-lg w-full text-center"
      :class="
        isDarkMode ? 'border-white/10 bg-gray-900/50' : 'border-amber-100 bg-amber-50/50'
      "
    >
      <BookOpen
        class="h-16 w-16 mx-auto mb-6 opacity-50"
        :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
      />
      <h2 class="text-2xl font-serif font-bold mb-3">Aucun enseignement disponible</h2>
      <p class="mb-8 text-lg" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
        Nous n'avons pas encore d'enseignements à afficher. Revenez bientôt pour découvrir
        nos nouveaux contenus.
      </p>
      <button
        @click="refreshSermons"
        class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
        :class="
          isDarkMode
            ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
            : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg'
        "
      >
        <RefreshCw class="h-4 w-4" />
        <span>Actualiser</span>
      </button>
    </div>
  </div>

  <main class="pt-24" v-if="sermons.length > 0">
    <!-- Page Header -->
    <div
      class="pt-24 pb-16 transition-colors duration-500 relative overflow-hidden"
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
        <div
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        >
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

    <!-- Main Content -->
    <div
      class="transition-colors duration-500 pb-24"
      :class="isDarkMode ? 'bg-black' : 'bg-white'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Featured Sermon -->
        <div v-if="selectedSermon || !showAllSermons" class="mb-20">
          <!-- Mode Lecture -->
          <div v-if="readingMode && selectedSermon" class="mb-8">
            <div class="flex justify-between items-center mb-8">
              <button
                @click="readingMode = false"
                class="inline-flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                :class="
                  isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                "
              >
                <ArrowLeft class="h-4 w-4" />
                <span>Retour aux détails</span>
              </button>

              <div class="flex items-center gap-3">
                <button
                  @click="fontSize -= fontSize > 14 ? 1 : 0"
                  class="p-2 rounded-full transition-all duration-300"
                  :class="
                    isDarkMode
                      ? 'bg-white/10 text-white hover:bg-white/15'
                      : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                  "
                  :disabled="fontSize <= 14"
                >
                  <Minus class="h-4 w-4" />
                </button>
                <span
                  class="text-sm font-medium"
                  :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                >
                  Taille du texte
                </span>
                <button
                  @click="fontSize += fontSize < 22 ? 1 : 0"
                  class="p-2 rounded-full transition-all duration-300"
                  :class="
                    isDarkMode
                      ? 'bg-white/10 text-white hover:bg-white/15'
                      : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
                  "
                  :disabled="fontSize >= 22"
                >
                  <Plus class="h-4 w-4" />
                </button>
              </div>
            </div>

            <!-- Article de l'enseignement -->
            <article
              class="prose prose-lg max-w-4xl mx-auto"
              :class="isDarkMode ? 'prose-invert' : ''"
              :style="{ fontSize: `${fontSize}px` }"
            >
              <h1
                class="font-serif mb-6"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                {{ selectedSermon.title }}
              </h1>

              <div class="flex items-center gap-6 mb-8">
                <div class="flex items-center">
                  <User
                    class="h-5 w-5 mr-2"
                    :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                  />
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                    {{ selectedSermon.preacher }}
                  </span>
                </div>
                <div class="flex items-center">
                  <Calendar
                    class="h-5 w-5 mr-2"
                    :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                  />
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                    {{ formatDate(selectedSermon.date) }}
                  </span>
                </div>
              </div>

              <!-- Contenu de l'enseignement -->
              <div v-for="(section, index) in selectedSermon.content" :key="index">
                <h2
                  v-if="section.title"
                  class="font-serif mt-10 mb-4"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  {{ section.title }}
                </h2>

                <div v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
                  <!-- Paragraphe normal -->
                  <p
                    v-if="paragraph.type === 'text'"
                    class="mb-4 leading-relaxed"
                    :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                  >
                    {{ paragraph.content }}
                  </p>

                  <!-- Verset biblique -->
                  <blockquote
                    v-else-if="paragraph.type === 'verse'"
                    class="my-6 p-6 rounded-lg border-l-4 italic"
                    :class="
                      isDarkMode
                        ? 'bg-amber-900/20 border-amber-100/30 text-amber-100'
                        : 'bg-amber-50 border-amber-700 text-amber-900'
                    "
                  >
                    <p class="mb-2">{{ paragraph.content }}</p>
                    <footer
                      class="text-right font-medium not-italic"
                      :class="isDarkMode ? 'text-amber-100/80' : 'text-amber-700'"
                    >
                      {{ paragraph.reference }}
                    </footer>
                  </blockquote>

                  <!-- Point important -->
                  <div
                    v-else-if="paragraph.type === 'important'"
                    class="my-6 p-6 rounded-lg border-l-4 font-medium"
                    :class="
                      isDarkMode
                        ? 'bg-gray-800 border-amber-100/50 text-white'
                        : 'bg-gray-50 border-amber-700 text-gray-900'
                    "
                  >
                    {{ paragraph.content }}
                  </div>
                </div>
              </div>

              <!-- Conclusion -->
              <div
                v-if="selectedSermon.conclusion"
                class="mt-12 p-6 rounded-lg border"
                :class="
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10'
                    : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30'
                "
              >
                <h3
                  class="font-serif text-xl mb-4"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Conclusion
                </h3>
                <p
                  class="leading-relaxed"
                  :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                >
                  {{ selectedSermon.conclusion }}
                </p>
              </div>

              <!-- Questions de réflexion -->
              <div
                v-if="selectedSermon.questions && selectedSermon.questions.length > 0"
                class="mt-12 p-6 rounded-lg border"
                :class="
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10'
                    : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30'
                "
              >
                <h3
                  class="font-serif text-xl mb-4"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Questions de réflexion
                </h3>
                <ul class="space-y-3">
                  <li
                    v-for="(question, qIndex) in selectedSermon.questions"
                    :key="qIndex"
                    class="flex items-start"
                  >
                    <span
                      class="inline-flex items-center justify-center h-6 w-6 rounded-full mr-3 mt-0.5 text-sm font-medium flex-shrink-0"
                      :class="
                        isDarkMode
                          ? 'bg-amber-100/20 text-amber-100'
                          : 'bg-amber-100 text-amber-700'
                      "
                    >
                      {{ qIndex + 1 }}
                    </span>
                    <span
                      class="leading-relaxed"
                      :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                    >
                      {{ question }}
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          </div>

          <!-- Mode Aperçu -->
          <div v-else class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <!-- Video/Image -->
            <div
              class="lg:col-span-2"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            >
              <div class="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
                <div
                  v-if="(selectedSermon || sermons[0]).hasVideo"
                  class="absolute inset-0 flex items-center justify-center"
                >
                  <img
                    :src="
                      'http://localhost:8000/storage/' +
                      (selectedSermon || sermons[0]).image
                    "
                    :alt="(selectedSermon || sermons[0]).title"
                    class="w-full h-full object-cover transition-all duration-700"
                    :class="
                      isDarkMode
                        ? 'brightness-75 filter saturate-50 hover:brightness-100 hover:saturate-100'
                        : 'brightness-95 hover:brightness-105'
                    "
                  />
                  <div
                    class="absolute inset-0"
                    :class="
                      isDarkMode
                        ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                        : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent'
                    "
                  ></div>
                  <button
                    class="absolute inset-0 flex items-center justify-center group"
                    @click="playVideo"
                  >
                    <div
                      class="bg-amber-100/20 backdrop-blur-sm p-8 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:bg-amber-100/30"
                    >
                      <Play class="h-12 w-12 text-white" />
                    </div>
                  </button>
                </div>
                <img
                  v-else
                  :src="
                    'http://localhost:8000/storage/' +
                    (selectedSermon || sermons[0]).image
                  "
                  :alt="(selectedSermon || sermons[0]).title"
                  class="w-full h-full object-cover transition-all duration-700"
                  :class="
                    isDarkMode ? 'brightness-75 filter saturate-50' : 'brightness-95'
                  "
                />
              </div>
            </div>

            <!-- Sermon Details -->
            <div
              v-motion
              :initial="{ opacity: 0, x: 30 }"
              :enter="{ opacity: 1, x: 0, transition: { duration: 600 } }"
            >
              <div
                :class="[
                  'p-8 rounded-2xl h-full flex flex-col shadow-xl border',
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10'
                    : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30',
                ]"
              >
                <div class="flex items-center mb-4">
                  <Calendar
                    class="h-4 w-4 mr-2"
                    :class="isDarkMode ? 'text-amber-100/70' : 'text-amber-700/70'"
                  />
                  <div
                    class="text-sm font-medium"
                    :class="isDarkMode ? 'text-amber-100/70' : 'text-amber-700/70'"
                  >
                    {{ formatDate((selectedSermon || sermons[0]).date) }}
                  </div>
                </div>
                <h2
                  class="text-2xl font-serif font-bold mb-4"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  {{ (selectedSermon || sermons[0]).title }}
                </h2>
                <div class="flex items-center mb-4">
                  <User
                    class="h-5 w-5 mr-2"
                    :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                  />
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                    {{ (selectedSermon || sermons[0]).preacher }}
                  </span>
                </div>
                <div class="flex items-center mb-4">
                  <Clock
                    class="h-5 w-5 mr-2"
                    :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                  />
                  <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                    {{ (selectedSermon || sermons[0]).duration }}
                  </span>
                </div>
                <div class="flex items-center mb-6">
                  <Tag
                    class="h-5 w-5 mr-2"
                    :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                  />
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="(tag, index) in (selectedSermon || sermons[0]).tags"
                      :key="index"
                      class="px-3 py-1 text-xs rounded-full"
                      :class="
                        isDarkMode
                          ? 'bg-amber-100/10 text-amber-100'
                          : 'bg-amber-100 text-amber-700'
                      "
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>
                <p
                  class="mb-8 flex-grow leading-relaxed"
                  :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                >
                  {{ (selectedSermon || sermons[0]).description }}
                </p>
                <div class="flex flex-col sm:flex-row gap-4 mt-auto flex-wrap">
                  <button
                    v-if="
                      selectedSermon &&
                      selectedSermon.content &&
                      selectedSermon.content.length > 0
                    "
                    @click="readingMode = true"
                    class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
                    :class="
                      isDarkMode
                        ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
                        : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg'
                    "
                  >
                    <BookOpen class="h-4 w-4" />
                    <span>Lire l'enseignement</span>
                  </button>

                  <button
                    v-if="(selectedSermon || sermons[0]).hasVideo"
                    @click="playVideo"
                    class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
                    :class="
                      isDarkMode
                        ? 'bg-white/10 hover:bg-white/15 text-white'
                        : 'bg-amber-50 hover:bg-amber-100 text-amber-700'
                    "
                  >
                    <Play class="h-4 w-4" />
                    <span>Regarder</span>
                  </button>

                  <button
                    class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
                    :class="
                      isDarkMode
                        ? 'bg-transparent border border-amber-100/30 text-amber-100 hover:bg-amber-100/10'
                        : 'bg-transparent border border-amber-700/30 text-amber-700 hover:bg-amber-50'
                    "
                  >
                    <Download class="h-4 w-4" />
                    <span>Télécharger</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Back to list button -->
          <div v-if="selectedSermon && !readingMode" class="mt-10 text-center">
            <button
              @click="closeSermonDetails"
              class="inline-flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
              :class="
                isDarkMode
                  ? 'bg-white/10 text-white hover:bg-white/15'
                  : 'bg-amber-50 text-amber-700 hover:bg-amber-100'
              "
            >
              <ArrowLeft class="h-4 w-4" />
              <span>Retour à tous les enseignements</span>
            </button>
          </div>
        </div>

        <!-- Sermons List -->
        <div v-if="!selectedSermon">
          <div class="mb-10 flex justify-between items-center">
            <h2
              class="text-2xl font-serif font-bold"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              {{ showAllSermons ? "Tous les enseignements" : "Enseignements récents" }}
            </h2>
            <button
              @click="showAllSermons = !showAllSermons"
              class="text-sm font-medium flex items-center gap-1 transition-all duration-300 relative group"
              :class="
                isDarkMode
                  ? 'text-amber-100 hover:text-white'
                  : 'text-amber-700 hover:text-amber-800'
              "
            >
              <span>{{
                showAllSermons ? "Voir les plus récents" : "Voir tous les enseignements"
              }}</span>
              <ChevronRight
                v-if="!showAllSermons"
                class="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300"
              />
              <ChevronUp
                v-else
                class="h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300"
              />
              <span
                class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                :class="isDarkMode ? 'bg-white' : 'bg-amber-700'"
              ></span>
            </button>
          </div>

          <!-- Sermons Grid -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(sermon, index) in sermonsToDisplay"
              :key="sermon.id"
              @click="openSermonDetails(sermon)"
              class="cursor-pointer group transform transition-all duration-500 hover:scale-102"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :enter="{
                opacity: 1,
                y: 0,
                transition: { delay: 100 * index, duration: 600 },
              }"
            >
              <div
                :class="[
                  'rounded-2xl overflow-hidden shadow-xl border h-full flex flex-col hover:shadow-lg',
                  isDarkMode
                    ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:border-amber-100/20 hover:shadow-amber-100/5'
                    : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:border-amber-200 hover:shadow-amber-700/10',
                ]"
              >
                <!-- Sermon Image -->
                <div class="relative">
                  <div class="aspect-video overflow-hidden">
                    <img
                      :src="'http://localhost:8000/storage/' + sermon.image"
                      :alt="sermon.title"
                      class="w-full h-full object-cover transition-all duration-700 transform"
                      :class="
                        isDarkMode
                          ? 'brightness-75 saturate-50 group-hover:brightness-100 group-hover:saturate-100 group-hover:scale-105'
                          : 'brightness-95 group-hover:brightness-105 group-hover:scale-105'
                      "
                    />
                  </div>
                  <div
                    class="absolute inset-0"
                    :class="
                      isDarkMode
                        ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                        : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent'
                    "
                  ></div>

                  <!-- Play Icon -->
                  <div
                    v-if="sermon.hasVideo"
                    class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                  >
                    <div
                      class="bg-amber-100/20 backdrop-blur-sm p-4 rounded-full transform transition-all duration-300 hover:scale-110"
                    >
                      <Play class="h-8 w-8 text-white" />
                    </div>
                  </div>

                  <!-- Text Icon -->
                  <div
                    v-if="sermon.content"
                    class="absolute top-4 right-4 px-3 py-1 text-xs rounded-full bg-amber-500/80 text-white flex items-center"
                  >
                    <BookOpen class="h-3 w-3 mr-1.5" />
                    Texte
                  </div>

                  <!-- Date Badge -->
                  <div
                    class="absolute bottom-4 left-4 px-3 py-1 text-xs rounded-full bg-black/60 text-white flex items-center"
                  >
                    <Calendar class="h-3 w-3 mr-1.5" />
                    {{ formatDate(sermon.date) }}
                  </div>

                  <!-- Duration Badge -->
                  <div
                    class="absolute bottom-4 right-4 px-3 py-1 text-xs rounded-full bg-black/60 text-white flex items-center"
                  >
                    <Clock class="h-3 w-3 mr-1.5" />
                    {{ sermon.duration }}
                  </div>
                </div>

                <!-- Sermon Content -->
                <div class="p-6 flex-grow flex flex-col">
                  <h3
                    class="text-xl font-serif font-semibold mb-3"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                  >
                    {{ sermon.title }}
                  </h3>
                  <div
                    class="flex items-center mb-3 text-sm"
                    :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                  >
                    <User class="h-4 w-4 mr-2" />
                    <span>{{ sermon.preacher }}</span>
                  </div>
                  <p
                    class="text-sm mb-6 line-clamp-3 flex-grow leading-relaxed"
                    :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                  >
                    {{ sermon.description }}
                  </p>
                  <div class="flex justify-between items-center mt-auto">
                    <div class="flex gap-1.5">
                      <span
                        v-for="(tag, tagIndex) in sermon.tags.slice(0, 2)"
                        :key="tagIndex"
                        class="px-2 py-1 text-xs rounded-full"
                        :class="
                          isDarkMode
                            ? 'bg-amber-100/10 text-amber-100'
                            : 'bg-amber-100 text-amber-700'
                        "
                      >
                        {{ tag }}
                      </span>
                      <span
                        v-if="sermon.tags.length > 2"
                        class="px-2 py-1 text-xs rounded-full"
                        :class="
                          isDarkMode
                            ? 'bg-amber-100/10 text-amber-100'
                            : 'bg-amber-100 text-amber-700'
                        "
                      >
                        +{{ sermon.tags.length - 2 }}
                      </span>
                    </div>
                    <button
                      class="text-sm font-medium flex items-center relative group"
                      :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                    >
                      <span>Voir</span>
                      <ChevronRight
                        class="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                      />
                      <span
                        class="absolute -bottom-1 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                        :class="isDarkMode ? 'bg-amber-100' : 'bg-amber-700'"
                      ></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div v-if="showAllSermons && totalPages > 1" class="mt-12 flex justify-center">
            <div class="flex space-x-2">
              <button
                @click="currentPage > 1 && currentPage--"
                :disabled="currentPage === 1"
                class="p-2 rounded-full transition-all duration-300"
                :class="[
                  isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                  currentPage === 1 &&
                    (isDarkMode
                      ? 'opacity-50 cursor-not-allowed'
                      : 'opacity-50 cursor-not-allowed'),
                ]"
              >
                <ChevronLeft class="h-5 w-5" />
              </button>

              <button
                v-for="page in paginationRange"
                :key="page"
                @click="currentPage = page"
                class="w-10 h-10 flex items-center justify-center rounded-full transition-all duration-300"
                :class="[
                  page === currentPage
                    ? isDarkMode
                      ? 'bg-amber-100 text-gray-900'
                      : 'bg-amber-700 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                ]"
              >
                {{ page }}
              </button>

              <button
                @click="currentPage < totalPages && currentPage++"
                :disabled="currentPage === totalPages"
                class="p-2 rounded-full transition-all duration-300"
                :class="[
                  isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                  currentPage === totalPages &&
                    (isDarkMode
                      ? 'opacity-50 cursor-not-allowed'
                      : 'opacity-50 cursor-not-allowed'),
                ]"
              >
                <ChevronRight class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div
      v-if="!isLoading && sermons.length === 0"
      class="min-h-[60vh] flex flex-col items-center justify-center px-4"
      :class="isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'"
    >
      <div
        class="p-8 rounded-2xl border max-w-lg w-full text-center"
        :class="
          isDarkMode
            ? 'border-white/10 bg-gray-900/50'
            : 'border-amber-100 bg-amber-50/50'
        "
      >
        <BookOpen
          class="h-16 w-16 mx-auto mb-6 opacity-50"
          :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
        />
        <h2 class="text-2xl font-serif font-bold mb-3">Aucun enseignement disponible</h2>
        <p class="mb-8 text-lg" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
          Nous n'avons pas encore d'enseignements à afficher. Revenez bientôt pour
          découvrir nos nouveaux contenus.
        </p>
        <button
          @click="refreshSermons"
          class="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
          :class="
            isDarkMode
              ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
              : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg'
          "
        >
          <RefreshCw class="h-4 w-4" />
          <span>Actualiser</span>
        </button>
      </div>
    </div>

    <!-- Video Modal -->
    <div
      v-if="isVideoModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      @click="closeVideoModal"
    >
      <div
        class="relative w-full max-w-4xl bg-black rounded-2xl shadow-2xl overflow-hidden"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :enter="{ opacity: 1, scale: 1, transition: { duration: 300 } }"
        @click.stop
      >
        <button
          @click="closeVideoModal"
          class="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition-all duration-300"
        >
          <X class="h-6 w-6" />
        </button>
        <div class="aspect-video">
          <div class="w-full h-full bg-black flex items-center justify-center">
            <!-- Si video_url est un lien YouTube/Vimeo, on affiche un iframe -->
            <iframe
              v-if="videoUrl && isExternal(videoUrl)"
              :src="embedUrl(videoUrl)"
              frameborder="0"
              allowfullscreen
              class="w-full h-full rounded-b-2xl"
            ></iframe>

            <!-- Si video_file est un fichier local stocké -->
            <video
              v-else-if="videoFile"
              :src="videoFile"
              controls
              class="w-full h-full object-contain rounded-b-2xl"
            ></video>

            <!-- Sinon fallback -->
            <div v-else class="flex flex-col items-center text-center text-gray-500">
              <VideoOff class="h-16 w-16 mb-4" />
              <p>Vidéo non disponible en prévisualisation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  Download,
  Play,
  Tag,
  User,
  VideoOff,
  X,
  Calendar,
  BookOpen,
  Plus,
  Minus,
  RefreshCw,
} from "lucide-vue-next";
import { useThemeStore } from "@/stores/theme";
import api from "@/plugin/mepa";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDarkMode);

const showAllSermons = ref(false);
const selectedSermon = ref(null);
const isVideoModalOpen = ref(false);
const currentPage = ref(1);
const sermonsPerPage = 6;
const readingMode = ref(false);
const fontSize = ref(16);
const isLoading = ref(true);

// Données des sermons (simulées)
const sermons = ref([]);

// Ouvrir les détails d'un sermon
const openSermonDetails = (sermon) => {
  selectedSermon.value = sermon;
  videoUrl.value = sermon?.videoUrl;
  videoFile.value = "http://localhost:8000/storage/" + sermon?.videoFile;
  readingMode.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Fermer les détails d'un sermon
const closeSermonDetails = () => {
  selectedSermon.value = null;
  videoUrl.value = "";
  videoFile.value = "";
  readingMode.value = false;
};

// Ouvrir la modal vidéo
const playVideo = () => {
  isVideoModalOpen.value = true;
};

// Fermer la modal vidéo
const closeVideoModal = () => {
  isVideoModalOpen.value = false;
};

// Calcul du nombre total de pages
const totalPages = computed(() => {
  return Math.ceil(sermons.value.length / sermonsPerPage);
});

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Les mois commencent à 0
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
// Calcul de la plage de pagination à afficher
const paginationRange = computed(() => {
  const range = [];
  const maxVisiblePages = 5;

  if (totalPages.value <= maxVisiblePages) {
    // Afficher toutes les pages si leur nombre est inférieur à maxVisiblePages
    for (let i = 1; i <= totalPages.value; i++) {
      range.push(i);
    }
  } else {
    // Calcul de la plage à afficher
    let start = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2));
    let end = Math.min(totalPages.value, start + maxVisiblePages - 1);

    // Ajuster si on est proche de la fin
    if (end === totalPages.value) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  }

  return range;
});

// Sermons à afficher selon la pagination
const sermonsToDisplay = computed(() => {
  if (!showAllSermons.value) {
    // Afficher seulement les 3 plus récents
    return sermons.value.slice(0, 3);
  } else {
    // Afficher selon la pagination
    const start = (currentPage.value - 1) * sermonsPerPage;
    const end = start + sermonsPerPage;
    return sermons.value.slice(start, end);
  }
});

// Props ou state à passer à la modale
const videoUrl = ref(""); // lien externe YouTube/Vimeo
const videoFile = ref(""); // fichier local (ex: /storage/sermons/video.mp4)

// helpers
const isExternal = (url) => {
  return (
    url.includes("youtube.com") || url.includes("youtu.be") || url.includes("vimeo.com")
  );
};

const embedUrl = (url) => {
  if (url.includes("youtube.com/watch?v=")) {
    return url.replace("watch?v=", "embed/");
  } else if (url.includes("youtu.be/")) {
    return url.replace("youtu.be/", "youtube.com/embed/");
  } else if (url.includes("vimeo.com")) {
    return url.replace("vimeo.com/", "player.vimeo.com/video/");
  }
  return url;
};

const fetchSermons = async () => {
  isLoading.value = true;
  try {
    const response = await api.get("/sermons");
    if (response.data) {
      sermons.value = response.data;
      isLoading.value = false;
    } else {
      sermons.value = [];
      isLoading.value = false;
      console.log("Aucun sermon trouvé ou format de données incorrect");
    }
  } catch (error) {
    console.error("Erreur lors de la récupération des sermons:", error);
    sermons.value = [];
    isLoading.value = false;
  } finally {
    isLoading.value = false;
  }
};

// Fonction pour rafraîchir les sermons
const refreshSermons = () => {
  fetchSermons();
};

onMounted(() => {
  fetchSermons();
});
</script>

<style>
/* Limiter le nombre de lignes pour les descriptions */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Styles pour le mode lecture */
.prose {
  max-width: 65ch;
  color: inherit;
}

.prose h1,
.prose h2,
.prose h3 {
  font-family: serif;
}

.prose p {
  margin-bottom: 1.5em;
  line-height: 1.8;
}

.prose blockquote {
  font-style: italic;
  position: relative;
}
</style>
