<template>
  <div>
    <!-- Hero Section -->
    <div class="relative pt-24 pb-16 overflow-hidden">
      <div
        class="absolute inset-0 z-0 transition-colors duration-500"
        :class="isDarkMode ? 'bg-gray-900' : 'bg-amber-50'"
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
      </div>

      <div class="max-w-7xl mx-auto py-5 my-2px-4 sm:px-6 lg:px-8 relative z-10">
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
            Rejoignez-nous
          </span>
          <h1
            class="text-4xl md:text-5xl font-bold mb-4 font-serif"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Services & Événements
          </h1>
          <div
            class="w-24 h-0.5 mx-auto mt-4 mb-8 rounded-full"
            :class="isDarkMode ? 'bg-amber-100/50' : 'bg-amber-700/50'"
          ></div>
          <p
            class="text-lg max-w-3xl mx-auto leading-relaxed"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Rejoignez-nous pour nos services hebdomadaires et événements spéciaux pour
            grandir ensemble dans la foi et la communauté.
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
        <!-- État de chargement -->
        <div v-if="isLoading" class="py-20 text-center">
          <div class="inline-block animate-spin mr-3">
            <loader-circle
              class="h-10 w-10"
              :class="isDarkMode ? 'text-amber-500' : 'text-amber-700'"
            />
          </div>
          <p
            class="mt-4 text-lg font-medium"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Chargement des services et événements...
          </p>
        </div>

        <div v-else>
          <!-- Prochain culte principal (mise en avant) -->
          <div
            v-if="featuredService"
            class="mb-20 mt-12"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >
            <div class="flex items-center mb-8">
              <h2
                class="text-2xl font-serif font-bold"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Prochain Culte du Dimanche
              </h2>
              <div
                class="ml-4 px-3 py-1 rounded-full text-sm font-medium"
                :class="
                  isDarkMode
                    ? 'bg-amber-500/20 text-amber-100'
                    : 'bg-amber-100 text-amber-700'
                "
              >
                À venir
              </div>
            </div>

            <div
              :class="[
                'rounded-2xl overflow-hidden shadow-xl border',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10'
                  : 'bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30',
              ]"
            >
              <div class="grid grid-cols-1 md:grid-cols-2">
                <!-- Image du culte -->
                <div class="relative h-80 md:h-auto overflow-hidden">
                  <img
                    :src="getImageUrl(featuredService.image)"
                    :alt="featuredService.title"
                    class="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                    :class="
                      isDarkMode ? 'brightness-75 filter saturate-50' : 'brightness-95'
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
                  <div class="absolute bottom-0 left-0 right-0 p-6">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-16 h-16 flex-shrink-0 rounded-2xl flex flex-col items-center justify-center"
                        :class="isDarkMode ? 'bg-amber-500/30' : 'bg-amber-500/80'"
                      >
                        <span class="text-sm font-medium text-white">{{
                          getMonthShort(featuredService.date)
                        }}</span>
                        <span class="text-2xl font-bold text-white">{{
                          getDayNumber(featuredService.date)
                        }}</span>
                      </div>
                      <div>
                        <h3 class="text-xl font-bold text-white">
                          {{ formatDateLong(featuredService.date) }}
                        </h3>
                        <p class="text-white/80">{{ featuredService.time }}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Détails du culte -->
                <div class="p-8 md:p-10 flex flex-col">
                  <h3
                    class="text-2xl font-serif font-bold mb-4"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                  >
                    {{ featuredService.title }}
                  </h3>

                  <div class="flex items-center mb-6">
                    <user
                      class="h-5 w-5 mr-2"
                      :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
                    />
                    <span
                      class="font-medium"
                      :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                    >
                      {{ featuredService.preacher }}
                    </span>
                  </div>

                  <div class="flex items-center mb-4">
                    <map-pin
                      class="h-5 w-5 mr-2"
                      :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                    />
                    <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                      {{ featuredService.location }}
                    </span>
                  </div>

                  <p
                    class="mb-8 flex-grow leading-relaxed"
                    :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                  >
                    {{ featuredService.description }}
                  </p>

                  <div class="flex flex-col sm:flex-row gap-4 mt-auto">
                    <button
                      @click="addToCalendar(featuredService)"
                      class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
                      :class="
                        isDarkMode
                          ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
                          : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg'
                      "
                    >
                      <calendar-plus class="h-4 w-4" />
                      <span>Ajouter au calendrier</span>
                    </button>

                    <button
                      @click="shareService(featuredService)"
                      class="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300 hover:scale-105"
                      :class="
                        isDarkMode
                          ? 'bg-transparent border border-amber-100/30 text-amber-100 hover:bg-amber-100/10'
                          : 'bg-transparent border border-amber-700/30 text-amber-700 hover:bg-amber-50'
                      "
                    >
                      <share class="h-4 w-4" />
                      <span>Partager</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Filtres pour les services et événements -->
          <div
            class="mb-12 pb-20 mt-20"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >
            <div class="flex flex-wrap gap-4 mb-8">
              <button
                @click="contentType = 'services'"
                class="px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium flex items-center gap-2"
                :class="[
                  contentType === 'services'
                    ? isDarkMode
                      ? 'bg-amber-100 text-gray-900'
                      : 'bg-amber-700 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                ]"
              >
                <church class="h-5 w-5" />
                Services
              </button>

              <button
                @click="contentType = 'events'"
                class="px-6 py-3 rounded-full transition-all duration-300 text-lg font-medium flex items-center gap-2"
                :class="[
                  contentType === 'events'
                    ? isDarkMode
                      ? 'bg-amber-100 text-gray-900'
                      : 'bg-amber-700 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                ]"
              >
                <calendar-days class="h-5 w-5" />
                Événements
              </button>
            </div>

            <div class="flex flex-wrap items-center gap-4">
              <button
                @click="activeFilter = 'all'"
                class="px-4 py-2 rounded-full transition-all duration-300"
                :class="[
                  activeFilter === 'all'
                    ? isDarkMode
                      ? 'bg-amber-100 text-gray-900'
                      : 'bg-amber-700 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                ]"
              >
                Tous
              </button>

              <button
                @click="activeFilter = 'upcoming'"
                class="px-4 py-2 rounded-full transition-all duration-300"
                :class="[
                  activeFilter === 'upcoming'
                    ? isDarkMode
                      ? 'bg-amber-100 text-gray-900'
                      : 'bg-amber-700 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                ]"
              >
                À venir
              </button>

              <button
                @click="activeFilter = 'past'"
                class="px-4 py-2 rounded-full transition-all duration-300"
                :class="[
                  activeFilter === 'past'
                    ? isDarkMode
                      ? 'bg-amber-100 text-gray-900'
                      : 'bg-amber-700 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/15'
                    : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                ]"
              >
                Passés
              </button>
            </div>
          </div>

          <!-- Liste des services -->
          <div v-if="contentType === 'services'" class="mb-20">
            <div v-if="filteredServices.length === 0" class="text-center py-16">
              <calendar-x
                class="h-16 w-16 mx-auto mb-4 opacity-30"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              />
              <p
                class="text-xl font-medium mb-4"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Aucun service
                {{
                  activeFilter === "upcoming"
                    ? "à venir"
                    : activeFilter === "past"
                    ? "passé"
                    : ""
                }}
              </p>
              <p
                class="mb-6 max-w-2xl mx-auto"
                :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
              >
                Veuillez vérifier ultérieurement ou modifier vos critères de recherche.
              </p>
            </div>

            <div v-else class="space-y-8">
              <div
                v-for="(service, index) in filteredServices"
                :key="service.id"
                :class="[
                  'p-6 rounded-xl border transition-all duration-300 hover:shadow-lg',
                  getEventStatusClass(service.date, isDarkMode),
                ]"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 100 * index, duration: 600 },
                }"
              >
                <div class="flex flex-col md:flex-row md:items-center gap-6">
                  <!-- Date du service -->
                  <div class="flex-shrink-0 text-center">
                    <div
                      class="w-20 h-20 rounded-xl flex flex-col items-center justify-center"
                      :class="[
                        getDateStyleClass(service.date, isDarkMode),
                        getDateTextStyleClass(service.date, isDarkMode),
                      ]"
                    >
                      <span class="text-sm font-medium">{{
                        getMonthShort(service.date)
                      }}</span>
                      <span
                        class="text-2xl font-bold"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                      >
                        {{ getDayNumber(service.date) }}
                      </span>
                    </div>
                  </div>

                  <!-- Détails du service -->
                  <div class="flex-grow">
                    <div
                      class="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
                    >
                      <div>
                        <div class="flex items-center gap-2 mb-2">
                          <h3
                            class="text-xl font-semibold"
                            :class="[
                              isDarkMode ? 'text-white' : 'text-gray-900',
                              !isUpcomingEvent(service.date) ? 'line-through' : '',
                            ]"
                          >
                            {{ service.title }}
                          </h3>
                          <span
                            v-if="isUpcomingEvent(service.date)"
                            class="inline-block px-2 py-0.5 text-xs rounded-full bg-amber-500/80 text-white"
                          >
                            À venir
                          </span>
                          <span
                            v-if="isComingSoon(service.date)"
                            class="inline-block px-2 py-0.5 text-xs rounded-full bg-red-500 text-white"
                          >
                            Bientôt
                          </span>
                          <span
                            v-if="!isUpcomingEvent(service.date)"
                            class="inline-block px-2 py-0.5 text-xs rounded-full"
                            :class="
                              isDarkMode
                                ? 'bg-gray-700 text-gray-300'
                                : 'bg-gray-300 text-gray-700'
                            "
                          >
                            Terminé
                          </span>
                        </div>
                      </div>
                      <div v-if="service.image" class="flex-shrink-0">
                        <img
                          :src="getImageUrl(service.image)"
                          :alt="service.title"
                          class="w-20 h-20 object-cover rounded-lg transition-all duration-500"
                          :class="[
                            !isUpcomingEvent(service.date) ? 'opacity-50' : '',
                            isDarkMode && isUpcomingEvent(service.date)
                              ? 'brightness-75'
                              : '',
                          ]"
                        />
                      </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3">
                      <div
                        class="flex items-center text-sm"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                      >
                        <clock class="h-4 w-4 mr-1" />
                        <span>{{ service.time }}</span>
                      </div>

                      <div
                        class="flex items-center text-sm"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                      >
                        <map-pin class="h-4 w-4 mr-1" />
                        <span>{{ service.location }}</span>
                      </div>
                    </div>

                    <div
                      v-if="service.preacher"
                      class="flex items-center mt-3 text-sm"
                      :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    >
                      <user class="h-4 w-4 mr-1" />
                      <span>{{ service.preacher }}</span>
                    </div>

                    <p
                      class="mt-3 leading-relaxed"
                      :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                    >
                      {{ service.description }}
                    </p>

                    <div v-if="isUpcomingEvent(service.date)" class="flex gap-3 mt-4">
                      <button
                        @click="addToCalendar(service)"
                        class="flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                        :class="
                          isDarkMode
                            ? 'bg-amber-100 hover:bg-amber-200 text-gray-900'
                            : 'bg-amber-700 hover:bg-amber-800 text-white'
                        "
                      >
                        <calendar-plus class="h-4 w-4" />
                        <span>Ajouter au calendrier</span>
                      </button>
                      <button
                        @click="shareService(service)"
                        class="flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                        :class="
                          isDarkMode
                            ? 'bg-transparent border border-amber-100/30 text-amber-100 hover:bg-amber-100/10'
                            : 'bg-transparent border border-amber-700/30 text-amber-700 hover:bg-amber-50'
                        "
                      >
                        <share class="h-4 w-4" />
                        <span>Partager</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Liste des événements -->
          <div v-if="contentType === 'events'" class="mb-20">
            <div v-if="filteredEvents.length === 0" class="text-center py-16">
              <calendar-x
                class="h-16 w-16 mx-auto mb-4 opacity-30"
                :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
              />
              <p
                class="text-xl font-medium mb-4"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Aucun événement
                {{
                  activeFilter === "upcoming"
                    ? "à venir"
                    : activeFilter === "past"
                    ? "passé"
                    : ""
                }}
              </p>
              <p
                class="mb-6 max-w-2xl mx-auto"
                :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
              >
                Veuillez vérifier ultérieurement ou modifier vos critères de recherche.
              </p>
            </div>

            <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div
                v-for="(event, index) in filteredEvents"
                :key="event.id"
                :class="[
                  'rounded-xl overflow-hidden shadow-xl border transform transition-all duration-500 hover:scale-102 hover:shadow-lg',
                  getEventStatusClass(event.date, isDarkMode),
                ]"
                v-motion
                :initial="{ opacity: 0, y: 30 }"
                :enter="{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 100 * index, duration: 600 },
                }"
              >
                <div class="relative">
                  <img
                    :src="getImageUrl(event.image)"
                    :alt="event.title"
                    class="w-full h-48 object-cover transition-all duration-700 transform hover:scale-105"
                    :class="[
                      !isUpcomingEvent(event.date) ? 'opacity-70' : '',
                      isDarkMode ? 'brightness-75 filter saturate-50' : 'brightness-95',
                    ]"
                  />
                  <div
                    class="absolute inset-0"
                    :class="
                      isDarkMode
                        ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                        : 'bg-gradient-to-t from-black/70 via-black/40 to-transparent'
                    "
                  ></div>

                  <div class="absolute top-4 left-4">
                    <div
                      class="px-3 py-1 rounded-full text-white text-sm font-medium"
                      :class="
                        isUpcomingEvent(event.date) ? 'bg-amber-500' : 'bg-gray-500'
                      "
                    >
                      {{ isUpcomingEvent(event.date) ? "À venir" : "Passé" }}
                    </div>
                  </div>

                  <div class="absolute bottom-4 left-4">
                    <div
                      class="w-14 h-14 flex-shrink-0 rounded-xl flex flex-col items-center justify-center bg-white/20 backdrop-blur-sm"
                    >
                      <span class="text-xs font-medium text-white">{{
                        getMonthShort(event.date)
                      }}</span>
                      <span class="text-xl font-bold text-white">{{
                        getDayNumber(event.date)
                      }}</span>
                    </div>
                  </div>
                </div>

                <div class="p-6">
                  <h3
                    class="text-xl font-bold mb-3"
                    :class="[
                      isDarkMode ? 'text-white' : 'text-gray-900',
                      !isUpcomingEvent(event.date) ? 'line-through' : '',
                    ]"
                  >
                    {{ event.title }}
                  </h3>

                  <div
                    class="flex items-center mb-2 text-sm"
                    :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                  >
                    <clock class="h-4 w-4 mr-1" />
                    <span>{{ event.time }}</span>
                  </div>

                  <div
                    class="flex items-center mb-4 text-sm"
                    :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                  >
                    <map-pin class="h-4 w-4 mr-1" />
                    <span>{{ event.location }}</span>
                  </div>

                  <p
                    class="mb-6 line-clamp-3 leading-relaxed"
                    :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                  >
                    {{ event.description }}
                  </p>

                  <div v-if="isUpcomingEvent(event.date)" class="flex gap-3">
                    <button
                      @click="viewEventDetails(event)"
                      class="flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                      :class="
                        isDarkMode
                          ? 'bg-amber-100 hover:bg-amber-200 text-gray-900'
                          : 'bg-amber-700 hover:bg-amber-800 text-white'
                      "
                    >
                      <eye class="h-4 w-4" />
                      <span>En savoir plus</span>
                    </button>
                    <button
                      @click="addToCalendar(event)"
                      class="flex items-center justify-center gap-2 px-4 py-2 rounded-full transition-all duration-300 hover:scale-105"
                      :class="
                        isDarkMode
                          ? 'bg-transparent border border-amber-100/30 text-amber-100 hover:bg-amber-100/10'
                          : 'bg-transparent border border-amber-700/30 text-amber-700 hover:bg-amber-50'
                      "
                    >
                      <calendar-plus class="h-4 w-4" />
                      <span>Ajouter</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Appel à l'action -->
          <div
            class="text-center py-16 px-6 rounded-2xl overflow-hidden relative"
            :class="
              isDarkMode
                ? 'bg-gradient-to-r from-gray-800 to-black'
                : 'bg-gradient-to-r from-amber-50 to-amber-100/50'
            "
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >
            <!-- Decorative elements -->
            <div class="absolute inset-0 opacity-10 pointer-events-none">
              <div
                class="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
              ></div>
              <div
                class="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-amber-500 blur-3xl"
              ></div>
            </div>

            <div class="relative z-10">
              <h2
                class="text-3xl md:text-4xl font-serif font-bold mb-4"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                Rejoignez-nous pour nos services
              </h2>
              <div
                class="w-24 h-0.5 mx-auto mt-4 mb-8 rounded-full"
                :class="isDarkMode ? 'bg-amber-100/50' : 'bg-amber-700/50'"
              ></div>
              <p
                class="text-xl max-w-3xl mx-auto mb-8 leading-relaxed"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
              >
                Nous serions ravis de vous accueillir à l'un de nos services. Venez tel
                que vous êtes et découvrez une communauté aimante et accueillante.
              </p>
              <div class="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  class="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-sm"
                  :class="
                    isDarkMode
                      ? 'bg-amber-100 hover:bg-amber-200 text-gray-900 hover:shadow-amber-100/20 hover:shadow-lg'
                      : 'bg-amber-700 hover:bg-amber-800 text-white hover:shadow-amber-700/20 hover:shadow-lg'
                  "
                >
                  <message-circle class="h-5 w-5" />
                  <span>Nous contacter</span>
                </button>
                <button
                  class="flex items-center justify-center gap-2 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  :class="
                    isDarkMode
                      ? 'bg-transparent border border-amber-100/30 text-amber-100 hover:bg-amber-100/10'
                      : 'bg-transparent border border-amber-700/30 text-amber-700 hover:bg-amber-50'
                  "
                >
                  <map-pin class="h-5 w-5" />
                  <span>Voir notre emplacement</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue";
import {
  CalendarDays,
  CalendarPlus,
  CalendarX,
  Church,
  Clock,
  Eye,
  LoaderCircle,
  MapPin,
  MessageCircle,
  Share,
  User,
} from "lucide-vue-next";
import { useThemeStore } from "@/stores/theme";
import api from "@/plugin/mepa";

const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDarkMode);

const activeFilter = ref("all"); // 'all', 'upcoming', 'past'
const contentType = ref("services"); // 'services' ou 'events'
const isLoading = ref(true);

// Données
const services = ref([]);
const events = ref([]);

// Service mis en avant
const featuredService = computed(() => {
  const upcomingServices = services.value.filter(
    (service) => service.featured && isUpcomingEvent(service.date)
  );
  return upcomingServices.length > 0 ? upcomingServices[0] : null;
});

// Services filtrés
const filteredServices = computed(() => {
  if (activeFilter.value === "all") {
    return services.value;
  } else if (activeFilter.value === "upcoming") {
    return services.value.filter((service) => isUpcomingEvent(service.date));
  } else if (activeFilter.value === "past") {
    return services.value.filter((service) => !isUpcomingEvent(service.date));
  }
  return services.value;
});

// Événements filtrés
const filteredEvents = computed(() => {
  if (activeFilter.value === "all") {
    return events.value;
  } else if (activeFilter.value === "upcoming") {
    return events.value.filter((event) => isUpcomingEvent(event.date));
  } else if (activeFilter.value === "past") {
    return events.value.filter((event) => !isUpcomingEvent(event.date));
  }
  return events.value;
});

// Fonctions utilitaires pour les dates
function formatDateLong(dateStr) {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) throw new Error("Date invalide");

    const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("fr-FR", options);
  } catch (error) {
    console.error("Erreur de formatage de date:", error, dateStr);
    return dateStr;
  }
}

function getMonthShort(dateStr) {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) throw new Error("Date invalide");

    return date.toLocaleString("fr-FR", { month: "short" }).toUpperCase();
  } catch (error) {
    console.error("Erreur d'extraction du mois:", error, dateStr);
    return "";
  }
}

function getDayNumber(dateStr) {
  try {
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) throw new Error("Date invalide");

    return date.getDate();
  } catch (error) {
    console.error("Erreur d'extraction du jour:", error, dateStr);
    return "";
  }
}

function isUpcomingEvent(dateStr) {
  try {
    const eventDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Réinitialiser l'heure pour comparer uniquement les dates

    return eventDate >= today;
  } catch (error) {
    console.error("Erreur de vérification de date:", error, dateStr);
    return false;
  }
}

function isComingSoon(dateStr) {
  try {
    const eventDate = new Date(dateStr);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const timeDiff = eventDate.getTime() - today.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);

    return dayDiff >= 0 && dayDiff <= 7; // Dans les 7 prochains jours
  } catch (error) {
    console.error("Erreur de vérification de date:", error, dateStr);
    return false;
  }
}

// Fonction pour obtenir l'URL complète de l'image
function getImageUrl(imagePath) {
  if (!imagePath) return "/placeholder.svg?height=400&width=600";

  // Si l'image est déjà une URL complète
  if (imagePath.startsWith("http")) {
    return imagePath;
  }

  // Sinon, construire l'URL à partir du chemin relatif
  return `https://api.eglisesiloecentre.org/storage/${imagePath}`;
}

// Fonctions d'interaction
function addToCalendar(item) {
  try {
    const title = encodeURIComponent(item.title);
    const description = encodeURIComponent(item.description);
    const location = encodeURIComponent(item.location);
    const date = new Date(item.date);

    // Extraire les heures et minutes du format "8h-10h-30"
    const timeMatch = item.time.match(/(\d+)h-?(\d+)?h?-?(\d+)?/);
    let startHour = 8,
      startMinute = 0,
      endHour = 10,
      endMinute = 0;

    if (timeMatch) {
      startHour = parseInt(timeMatch[1]) || 8;
      startMinute = parseInt(timeMatch[2]) || 0;
      endHour = parseInt(timeMatch[3]) || startHour + 2;
    }

    const startDate = new Date(date);
    startDate.setHours(startHour, startMinute, 0);

    const endDate = new Date(date);
    endDate.setHours(endHour, endMinute, 0);

    const start = startDate.toISOString().replace(/-|:|\.\d+/g, "");
    const end = endDate.toISOString().replace(/-|:|\.\d+/g, "");

    const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&location=${location}&dates=${start}/${end}`;

    window.open(googleCalendarUrl, "_blank");
  } catch (error) {
    console.error("Erreur lors de l'ajout au calendrier:", error);
    alert("Une erreur s'est produite lors de l'ajout au calendrier.");
  }
}

function shareService(item) {
  if (navigator.share) {
    navigator
      .share({
        title: item.title,
        text: item.description,
        url: window.location.href,
      })
      .catch((error) => console.error("Erreur lors du partage:", error));
  } else {
    // Fallback pour les navigateurs qui ne supportent pas l'API Web Share
    const shareText = `${item.title} - ${item.description} - ${window.location.href}`;
    navigator.clipboard
      .writeText(shareText)
      .then(() => alert("Lien copié dans le presse-papiers !"))
      .catch(() => alert("Impossible de copier le lien."));
  }
}

function viewEventDetails(event) {
  // Cette fonction pourrait rediriger vers une page détaillée de l'événement
  alert(`Affichage des détails pour: ${event.title}`);
}

// Récupération des données
const fetchServices = async () => {
  try {
    isLoading.value = true;
    const response = await api.get("/services");
    services.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des services:", error);
  } finally {
    isLoading.value = false;
  }
};

const fetchEvents = async () => {
  try {
    isLoading.value = true;
    const response = await api.get("/events");
    events.value = response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des événements:", error);
  } finally {
    isLoading.value = false;
  }
};

// Initialisation
onMounted(async () => {
  try {
    isLoading.value = true;
    await Promise.all([fetchServices(), fetchEvents()]);
  } catch (error) {
    console.error("Erreur lors de l'initialisation:", error);
  } finally {
    isLoading.value = false;
  }
});

// Réinitialiser le filtre lors du changement de type de contenu
watch(contentType, () => {
  activeFilter.value = "all";
});

const getEventStatusClass = (dateStr, isDarkMode) => {
  const isUpcoming = isUpcomingEvent(dateStr);
  if (!isUpcoming) {
    return isDarkMode
      ? "bg-gray-900/50 border-white/5"
      : "bg-gray-100/50 border-gray-200/50";
  } else {
    return isDarkMode
      ? "bg-gradient-to-br from-gray-800/80 to-black/80 border-white/10 hover:shadow-amber-100/5"
      : "bg-gradient-to-br from-white to-amber-50/80 border-amber-100/30 hover:shadow-amber-700/10";
  }
};

const getDateStyleClass = (dateStr, isDarkMode) => {
  const isUpcoming = isUpcomingEvent(dateStr);
  return [
    isUpcoming
      ? isDarkMode
        ? "bg-amber-500/20"
        : "bg-amber-100"
      : isDarkMode
      ? "bg-gray-800"
      : "bg-gray-200",
  ];
};

const getDateTextStyleClass = (dateStr, isDarkMode) => {
  const isUpcoming = isUpcomingEvent(dateStr);
  return [
    isUpcoming
      ? isDarkMode
        ? "text-amber-100"
        : "text-amber-700"
      : isDarkMode
      ? "text-gray-400"
      : "text-gray-600",
  ];
};
</script>

<style>
:root {
  --slc-orange: #ffa500;
  --slc-yellow: #ffd700;
}

.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
}

.dark-theme .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
}

html:not(.dark-theme) .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.2);
}

.hover\:scale-102:hover {
  transform: scale(1.02);
}

.accent-gradient {
  background: linear-gradient(90deg, var(--slc-orange), var(--slc-yellow));
}

html {
  scroll-behavior: smooth;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>
