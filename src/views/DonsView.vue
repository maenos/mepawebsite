<template>
  <div>
    <!-- Hero Section -->
    <div class="relative pt-16">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img
          src="@/assets/images/donate.jpeg"
          alt="Faire un don"
          class="w-full h-[400px] object-cover transition-all duration-500"
          :class="isDarkMode ? 'brightness-50 filter' : 'brightness-90'"
        />
        <div
          class="absolute inset-0"
          :class="
            isDarkMode
              ? 'bg-gradient-to-r from-black via-black/70 to-black/50'
              : 'bg-gradient-to-r from-white/80 via-white/60 to-white/40'
          "
        ></div>
      </div>
      <div class="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 100 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200, duration: 800 } }"
        >
          <h1
            class="text-4xl md:text-5xl font-bold mb-4 tracking-tight"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Soutenez Notre Mission
          </h1>
          <p
            class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Votre générosité permet à notre église de continuer son œuvre et d'étendre son
            impact dans la communauté au Togo et au-delà.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
              @click="scrollToSection('payment-methods')"
              :class="[
                'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-glow',
                isDarkMode
                  ? 'bg-white hover:bg-gray-200 text-black'
                  : 'bg-gray-900 hover:bg-gray-800 text-white',
              ]"
            >
              Faire un don maintenant
            </button>
            <button
              @click="scrollToSection('why-give')"
              :class="[
                'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 border',
                isDarkMode
                  ? 'bg-transparent hover:bg-white/10 text-white border-white'
                  : 'bg-transparent hover:bg-gray-900/10 text-gray-900 border-gray-900',
              ]"
            >
              Pourquoi donner ?
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="transition-colors duration-500"
      :class="isDarkMode ? 'bg-black' : 'bg-white'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Pourquoi donner -->
        <div
          id="why-give"
          class="mb-20"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="text-center mb-12">
            <h2
              class="text-3xl md:text-4xl font-bold mb-4"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Pourquoi Donner ?
            </h2>
            <div class="w-16 h-1 mx-auto mt-4 mb-8 bg-amber-500"></div>
            <p
              class="text-lg max-w-3xl mx-auto"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Vos dons soutiennent notre mission et permettent à notre église de continuer
              à servir notre communauté au Togo.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(reason, index) in donationReasons"
              :key="index"
              :class="[
                'p-6 rounded-lg shadow-xl border transform transition-all duration-500 hover:scale-105 hover:shadow-glow',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
              ]"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { delay: 100 * index, duration: 800 },
              }"
            >
              <div class="flex items-center justify-center mb-6">
                <div
                  class="w-16 h-16 rounded-full flex items-center justify-center"
                  :class="reason.bgColor"
                >
                  <component :is="reason.icon" class="h-8 w-8 text-white" />
                </div>
              </div>
              <h3
                class="text-xl font-bold mb-3 text-center"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                {{ reason.title }}
              </h3>
              <p
                class="text-center"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
              >
                {{ reason.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Méthodes de paiement -->
        <div
          id="payment-methods"
          class="mb-20"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="text-center mb-12">
            <h2
              class="text-3xl md:text-4xl font-bold mb-4"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Comment Donner
            </h2>
            <div class="w-16 h-1 mx-auto mt-4 mb-8 bg-amber-500"></div>
            <p
              class="text-lg max-w-3xl mx-auto"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Nous offrons plusieurs méthodes de paiement pour faciliter vos dons,
              localement au Togo et internationalement.
            </p>
          </div>

          <!-- Onglets pour les méthodes de paiement -->
          <div class="mb-8">
            <div class="flex flex-wrap justify-center gap-4 mb-8">
              <button
                @click="activePaymentTab = 'local'"
                :class="[
                  'px-6 py-3 rounded-full transition-all duration-300 font-medium',
                  activePaymentTab === 'local'
                    ? isDarkMode
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-500 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
                ]"
              >
                <map-pin class="h-5 w-5 inline-block mr-2" />
                Dons Locaux (Togo)
              </button>
              <button
                @click="activePaymentTab = 'international'"
                :class="[
                  'px-6 py-3 rounded-full transition-all duration-300 font-medium',
                  activePaymentTab === 'international'
                    ? isDarkMode
                      ? 'bg-amber-500 text-white'
                      : 'bg-amber-500 text-white'
                    : isDarkMode
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
                ]"
              >
                <globe class="h-5 w-5 inline-block mr-2" />
                Dons Internationaux
              </button>
            </div>
          </div>

          <!-- Méthodes de paiement locales (Togo) -->
          <div
            v-if="activePaymentTab === 'local'"
            class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <!-- Mobile Money -->
            <div
              :class="[
                'p-6 rounded-lg shadow-xl border',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
              ]"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            >
              <div class="flex items-center mb-6">
                <div
                  class="p-3 rounded-full mr-4"
                  :class="isDarkMode ? 'bg-amber-500/20' : 'bg-amber-500/10'"
                >
                  <smartphone
                    class="h-8 w-8"
                    :class="isDarkMode ? 'text-amber-500' : 'text-amber-600'"
                  />
                </div>
                <h3
                  class="text-xl font-bold"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Mobile Money (Togo)
                </h3>
              </div>

              <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                Vous pouvez faire un don rapidement et facilement via ces services de
                paiement mobile populaires au Togo :
              </p>

              <div class="space-y-4">
                <div
                  v-for="(method, index) in togoMobilePaymentMethods"
                  :key="index"
                  :class="[
                    'p-4 rounded-md border transition-all duration-300',
                    isDarkMode
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-white border-gray-200 hover:bg-gray-50',
                  ]"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div
                        class="h-10 w-10 rounded-full flex items-center justify-center mr-3"
                        :class="method.bgColor"
                      >
                        <component :is="method.icon" class="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4
                          class="font-medium"
                          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >
                          {{ method.name }}
                        </h4>
                        <p
                          class="text-sm"
                          :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                        >
                          {{ method.description }}
                        </p>
                      </div>
                    </div>
                    <button
                      @click="copyToClipboard(method.number)"
                      class="p-2 rounded-md transition-all duration-300"
                      :class="
                        isDarkMode
                          ? 'bg-white/10 hover:bg-white/20 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      "
                    >
                      <copy class="h-5 w-5" />
                    </button>
                  </div>

                  <div class="mt-3 flex items-center justify-between">
                    <div class="flex items-center">
                      <phone
                        class="h-4 w-4 mr-2"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                      />
                      <span
                        class="font-mono font-medium"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                      >
                        {{ method.number }}
                      </span>
                    </div>
                    <button
                      :class="[
                        'px-3 py-1 rounded-md text-sm font-medium transition-all duration-300',
                        isDarkMode
                          ? 'bg-amber-500 hover:bg-amber-600 text-white'
                          : 'bg-amber-500 hover:bg-amber-600 text-white',
                      ]"
                      @click="openPaymentApp(method)"
                    >
                      Payer maintenant
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Autres méthodes locales -->
            <div
              :class="[
                'p-6 rounded-lg shadow-xl border',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
              ]"
              v-motion
              :initial="{ opacity: 0, x: 30 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            >
              <div class="flex items-center mb-6">
                <div
                  class="p-3 rounded-full mr-4"
                  :class="isDarkMode ? 'bg-sky-500/20' : 'bg-sky-500/10'"
                >
                  <credit-card
                    class="h-8 w-8"
                    :class="isDarkMode ? 'text-sky-500' : 'text-sky-600'"
                  />
                </div>
                <h3
                  class="text-xl font-bold"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Autres Méthodes Locales
                </h3>
              </div>

              <div class="space-y-4">
                <div
                  v-for="(method, index) in togoOtherPaymentMethods"
                  :key="index"
                  :class="[
                    'p-4 rounded-md border transition-all duration-300',
                    isDarkMode
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-white border-gray-200 hover:bg-gray-50',
                  ]"
                >
                  <div class="flex items-center mb-3">
                    <component
                      :is="method.icon"
                      class="h-6 w-6 mr-3"
                      :class="method.iconColor"
                    />
                    <h4
                      class="font-medium"
                      :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                    >
                      {{ method.name }}
                    </h4>
                  </div>

                  <p class="mb-4" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                    {{ method.description }}
                  </p>

                  <div v-if="method.details" class="mb-4">
                    <div
                      v-for="(detail, detailIndex) in method.details"
                      :key="detailIndex"
                      class="flex items-center mb-2"
                    >
                      <component
                        :is="detail.icon"
                        class="h-4 w-4 mr-2"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                      />
                      <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                        <span
                          class="font-medium"
                          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                          >{{ detail.label }}:</span
                        >
                        {{ detail.value }}
                      </span>
                    </div>
                  </div>

                  <button
                    v-if="method.action"
                    :class="[
                      'w-full px-4 py-2 rounded-md font-medium transition-all duration-300',
                      isDarkMode
                        ? 'bg-sky-500 hover:bg-sky-600 text-white'
                        : 'bg-sky-500 hover:bg-sky-600 text-white',
                    ]"
                    @click="method.action.handler"
                  >
                    {{ method.action.label }}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Méthodes de paiement internationales -->
          <div
            v-if="activePaymentTab === 'international'"
            class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          >
            <!-- Paiements en ligne -->
            <div
              :class="[
                'p-6 rounded-lg shadow-xl border',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
              ]"
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            >
              <div class="flex items-center mb-6">
                <div
                  class="p-3 rounded-full mr-4"
                  :class="isDarkMode ? 'bg-green-500/20' : 'bg-green-500/10'"
                >
                  <credit-card
                    class="h-8 w-8"
                    :class="isDarkMode ? 'text-green-500' : 'text-green-600'"
                  />
                </div>
                <h3
                  class="text-xl font-bold"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Paiements en Ligne
                </h3>
              </div>

              <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                Pour nos donateurs internationaux, nous proposons ces méthodes de paiement
                en ligne sécurisées :
              </p>

              <div class="space-y-4">
                <div
                  v-for="(method, index) in internationalOnlinePaymentMethods"
                  :key="index"
                  :class="[
                    'p-4 rounded-md border transition-all duration-300',
                    isDarkMode
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-white border-gray-200 hover:bg-gray-50',
                  ]"
                >
                  <div class="flex items-center justify-between">
                    <div class="flex items-center">
                      <div
                        class="h-10 w-10 rounded-full flex items-center justify-center mr-3"
                        :class="method.bgColor"
                      >
                        <component :is="method.icon" class="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4
                          class="font-medium"
                          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >
                          {{ method.name }}
                        </h4>
                        <p
                          class="text-sm"
                          :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                        >
                          {{ method.description }}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="mt-4">
                    <button
                      :class="[
                        'w-full px-4 py-2 rounded-md font-medium transition-all duration-300',
                        isDarkMode
                          ? 'bg-green-500 hover:bg-green-600 text-white'
                          : 'bg-green-500 hover:bg-green-600 text-white',
                      ]"
                      @click="method.action.handler"
                    >
                      {{ method.action.label }}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Virements internationaux -->
            <div
              :class="[
                'p-6 rounded-lg shadow-xl border',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
              ]"
              v-motion
              :initial="{ opacity: 0, x: 30 }"
              :visible="{ opacity: 1, x: 0, transition: { duration: 800 } }"
            >
              <div class="flex items-center mb-6">
                <div
                  class="p-3 rounded-full mr-4"
                  :class="isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500/10'"
                >
                  <landmark
                    class="h-8 w-8"
                    :class="isDarkMode ? 'text-purple-500' : 'text-purple-600'"
                  />
                </div>
                <h3
                  class="text-xl font-bold"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Virements Internationaux
                </h3>
              </div>

              <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                Vous pouvez effectuer un virement bancaire international vers notre compte
                :
              </p>

              <div
                :class="[
                  'p-4 rounded-md border transition-all duration-300',
                  isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200',
                ]"
              >
                <div class="space-y-3">
                  <div class="flex items-center">
                    <landmark
                      class="h-4 w-4 mr-2"
                      :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    />
                    <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                      <span
                        class="font-medium"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >Banque:</span
                      >
                      Ecobank Togo
                    </span>
                  </div>
                  <div class="flex items-center">
                    <users
                      class="h-4 w-4 mr-2"
                      :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    />
                    <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                      <span
                        class="font-medium"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >Titulaire:</span
                      >
                      Église Siloe Center Togo
                    </span>
                  </div>
                  <div class="flex items-center">
                    <credit-card
                      class="h-4 w-4 mr-2"
                      :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    />
                    <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                      <span
                        class="font-medium"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >IBAN:</span
                      >
                      TG53 1234 5678 9012 3456 7890 123
                    </span>
                    <button
                      @click="copyToClipboard('TG53 1234 5678 9012 3456 7890 123')"
                      class="ml-2 p-1 rounded-md transition-all duration-300"
                      :class="
                        isDarkMode
                          ? 'bg-white/10 hover:bg-white/20 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      "
                    >
                      <copy class="h-4 w-4" />
                    </button>
                  </div>
                  <div class="flex items-center">
                    <banknote
                      class="h-4 w-4 mr-2"
                      :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                    />
                    <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                      <span
                        class="font-medium"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >SWIFT/BIC:</span
                      >
                      ECOCGLTG
                    </span>
                    <button
                      @click="copyToClipboard('ECOCGLTG')"
                      class="ml-2 p-1 rounded-md transition-all duration-300"
                      :class="
                        isDarkMode
                          ? 'bg-white/10 hover:bg-white/20 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      "
                    >
                      <copy class="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div class="mt-6">
                  <p
                    class="text-sm mb-4"
                    :class="isDarkMode ? 'text-amber-300' : 'text-amber-600'"
                  >
                    <info-icon class="h-4 w-4 inline-block mr-1" />
                    Veuillez indiquer "Don Siloe Center" comme référence de votre
                    virement.
                  </p>
                  <button
                    :class="[
                      'w-full px-4 py-2 rounded-md font-medium transition-all duration-300',
                      isDarkMode
                        ? 'bg-purple-500 hover:bg-purple-600 text-white'
                        : 'bg-purple-500 hover:bg-purple-600 text-white',
                    ]"
                    @click="contactForWireTransfer"
                  >
                    Demander des informations supplémentaires
                  </button>
                </div>
              </div>
            </div>
          </div>

          <!-- Message de confirmation de copie -->
          <div
            v-if="showCopyConfirmation"
            class="fixed bottom-4 right-4 p-4 rounded-md bg-green-500 text-white flex items-center shadow-lg transition-all duration-300"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 300 } }"
            :leave="{ opacity: 0, y: 20, transition: { duration: 300 } }"
          >
            <check-circle class="h-5 w-5 mr-2" />
            <span>Information copiée dans le presse-papiers !</span>
          </div>
        </div>

        <!-- Coordonnées et informations -->
        <div
          id="contact"
          class="mb-20"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="text-center mb-12">
            <h2
              class="text-3xl md:text-4xl font-bold mb-4"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Nous Contacter
            </h2>
            <div class="w-16 h-1 mx-auto mt-4 mb-8 bg-amber-500"></div>
            <p
              class="text-lg max-w-3xl mx-auto"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Pour toute question concernant les dons, n'hésitez pas à nous contacter.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(contact, index) in contactInfo"
              :key="index"
              :class="[
                'p-6 rounded-lg shadow-xl border transform transition-all duration-500 hover:scale-105',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
              ]"
              v-motion
              :initial="{ opacity: 0, y: 30 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { delay: 100 * index, duration: 800 },
              }"
            >
              <div class="flex items-center justify-center mb-6">
                <div
                  class="w-16 h-16 rounded-full flex items-center justify-center"
                  :class="contact.bgColor"
                >
                  <component :is="contact.icon" class="h-8 w-8 text-white" />
                </div>
              </div>
              <h3
                class="text-xl font-bold mb-3 text-center"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                {{ contact.title }}
              </h3>
              <div
                class="text-center"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
              >
                <p
                  v-for="(line, lineIndex) in contact.details"
                  :key="lineIndex"
                  class="mb-2"
                >
                  {{ line }}
                </p>
              </div>
              <div v-if="contact.action" class="mt-6 text-center">
                <button
                  :class="[
                    'px-4 py-2 rounded-md font-medium transition-all duration-300',
                    isDarkMode
                      ? 'bg-white/10 hover:bg-white/20 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900',
                  ]"
                  @click="contact.action.handler"
                >
                  <component
                    :is="contact.action.icon"
                    class="h-4 w-4 mr-2 inline-block"
                  />
                  <span>{{ contact.action.label }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ -->
        <div
          class="mb-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div class="text-center mb-12">
            <h2
              class="text-3xl md:text-4xl font-bold mb-4"
              :class="isDarkMode ? 'text-white' : 'text-gray-900'"
            >
              Questions Fréquentes
            </h2>
            <div class="w-16 h-1 mx-auto mt-4 mb-8 bg-amber-500"></div>
          </div>

          <div class="max-w-3xl mx-auto">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="mb-4"
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{
                opacity: 1,
                y: 0,
                transition: { delay: 100 * index, duration: 600 },
              }"
            >
              <button
                @click="toggleFaq(index)"
                class="w-full text-left p-4 rounded-md flex items-center justify-between transition-all duration-300"
                :class="[
                  activeFaq === index
                    ? isDarkMode
                      ? 'bg-amber-500/20 text-white'
                      : 'bg-amber-500/10 text-gray-900'
                    : isDarkMode
                    ? 'bg-white/5 text-white hover:bg-white/10'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200',
                ]"
              >
                <span class="font-medium">{{ faq.question }}</span>
                <chevron-down
                  class="h-5 w-5 transition-transform duration-300"
                  :class="{ 'transform rotate-180': activeFaq === index }"
                />
              </button>

              <div
                v-show="activeFaq === index"
                class="p-4 rounded-b-md mt-1 transition-all duration-300"
                :class="
                  isDarkMode ? 'bg-white/5 text-gray-300' : 'bg-gray-50 text-gray-700'
                "
              >
                <p>{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Call to Action -->
        <div
          class="text-center"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <h2
            class="text-2xl md:text-3xl font-bold mb-4"
            :class="isDarkMode ? 'text-white' : 'text-gray-900'"
          >
            Votre Générosité Fait la Différence
          </h2>
          <p
            class="text-lg max-w-3xl mx-auto mb-8"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Chaque don, quel que soit son montant, contribue à notre mission et nous
            permet de continuer à servir notre communauté au Togo et au-delà.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
              @click="scrollToSection('payment-methods')"
              class="flex items-center justify-center gap-2 py-3 px-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow bg-amber-500 text-white hover:bg-amber-600"
            >
              <heart class="h-5 w-5" />
              <span>Faire un don maintenant</span>
            </button>
            <button
              class="flex items-center justify-center gap-2 py-3 px-6 rounded-md font-medium transition-all duration-300 hover:scale-105 border"
              :class="
                isDarkMode
                  ? 'bg-transparent hover:bg-white/10 text-white border-white'
                  : 'bg-transparent hover:bg-gray-900/10 text-gray-900 border-gray-900'
              "
              @click="contactUs"
            >
              <message-circle class="h-5 w-5" />
              <span>Nous contacter</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import {
  Banknote,
  CheckCircle,
  ChevronDown,
  Church,
  Clock,
  Copy,
  CreditCard,
  Gift,
  Globe,
  HandHeart,
  Heart,
  InfoIcon,
  Landmark,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Smartphone,
  Users,
} from "lucide-vue-next";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const isDarkMode = computed(() => {
  return themeStore.isDarkMode;
});
const activeFaq = ref(null);
const showCopyConfirmation = ref(false);
const activePaymentTab = ref("local"); // 'local' ou 'international'

// Raisons de donner
const donationReasons = [
  {
    title: "Soutenir le Ministère",
    description:
      "Vos dons permettent de financer les activités de l'église, les programmes d'enseignement et les services de culte.",
    icon: Church,
    bgColor: "bg-amber-500",
  },
  {
    title: "Aider la Communauté",
    description:
      "Nous utilisons une partie des dons pour soutenir des projets communautaires et aider les personnes dans le besoin au Togo.",
    icon: HandHeart,
    bgColor: "bg-sky-500",
  },
  {
    title: "Étendre l'Impact",
    description:
      "Votre générosité nous aide à étendre notre mission et à toucher davantage de vies avec le message de l'Évangile.",
    icon: Users,
    bgColor: "bg-purple-500",
  },
];

// Méthodes de paiement mobile au Togo
const togoMobilePaymentMethods = [
  {
    name: "T-Money",
    description: "Service de paiement mobile de Togocom",
    icon: Smartphone,
    bgColor: "bg-blue-500",
    number: "+228 90 12 34 56",
    app: "tmoney",
  },
  {
    name: "Flooz",
    description: "Service de paiement mobile de Moov Africa",
    icon: Smartphone,
    bgColor: "bg-orange-500",
    number: "+228 99 87 65 43",
    app: "flooz",
  },
  {
    name: "Eco CashXpress",
    description: "Service de paiement mobile d'Ecobank",
    icon: Smartphone,
    bgColor: "bg-green-500",
    number: "+228 92 34 56 78",
    app: "ecocash",
  },
];

// Autres méthodes de paiement au Togo
const togoOtherPaymentMethods = [
  {
    name: "Virement Bancaire Local",
    description:
      "Vous pouvez faire un virement bancaire directement sur notre compte au Togo.",
    icon: Landmark,
    iconColor: isDarkMode.value ? "text-sky-500" : "text-sky-600",
    details: [
      {
        label: "Banque",
        value: "Ecobank Togo",
        icon: Landmark,
      },
      {
        label: "Titulaire",
        value: "Église Siloe Center Togo",
        icon: Users,
      },
      {
        label: "Numéro de compte",
        value: "1234 5678 9012 3456",
        icon: CreditCard,
      },
    ],
  },
  {
    name: "Don en Personne",
    description:
      "Vous pouvez également faire un don en personne lors de nos services ou en passant à notre bureau à Lomé.",
    icon: Gift,
    iconColor: isDarkMode.value ? "text-purple-500" : "text-purple-600",
    details: [
      {
        label: "Horaires",
        value: "Lundi - Vendredi: 9h00 - 17h00",
        icon: Clock,
      },
      {
        label: "Adresse",
        value: "123 Rue de la Paix, Lomé, Togo",
        icon: MapPin,
      },
    ],
    action: {
      label: "Voir l'itinéraire",
      handler: () => window.open("https://maps.google.com", "_blank"),
    },
  },
];

// Méthodes de paiement en ligne internationales
const internationalOnlinePaymentMethods = [
  {
    name: "PayPal",
    description: "Faites un don sécurisé via PayPal avec votre carte ou compte PayPal",
    icon: CreditCard,
    bgColor: "bg-blue-600",
    action: {
      label: "Donner via PayPal",
      handler: () => window.open("https://paypal.me/siloecenter", "_blank"),
    },
  },
  {
    name: "Carte de Crédit",
    description:
      "Faites un don sécurisé avec votre carte Visa, Mastercard ou American Express",
    icon: CreditCard,
    bgColor: "bg-green-600",
    action: {
      label: "Donner par Carte",
      handler: () => window.open("https://donate.siloecenter.org", "_blank"),
    },
  },
  {
    name: "Western Union / MoneyGram",
    description:
      "Envoyez un transfert d'argent international via Western Union ou MoneyGram",
    icon: Banknote,
    bgColor: "bg-yellow-600",
    action: {
      label: "Voir les instructions",
      handler: () =>
        alert(
          "Veuillez nous contacter pour obtenir les informations nécessaires pour un transfert Western Union ou MoneyGram."
        ),
    },
  },
];

// Informations de contact
const contactInfo = [
  {
    title: "Téléphone",
    details: ["+228 22 21 61 61", "+228 90 12 34 56"],
    icon: Phone,
    bgColor: "bg-amber-500",
    action: {
      label: "Appeler",
      icon: Phone,
      handler: () => window.open("tel:+22822216161", "_blank"),
    },
  },
  {
    title: "Email",
    details: ["dons@siloecenter.org", "contact@siloecenter.org"],
    icon: Mail,
    bgColor: "bg-sky-500",
    action: {
      label: "Envoyer un email",
      icon: Mail,
      handler: () => window.open("mailto:dons@siloecenter.org", "_blank"),
    },
  },
  {
    title: "Adresse",
    details: ["123 Rue de la Paix", "Quartier Tokoin", "Lomé, Togo"],
    icon: MapPin,
    bgColor: "bg-purple-500",
    action: {
      label: "Voir sur la carte",
      icon: MapPin,
      handler: () => window.open("https://maps.google.com", "_blank"),
    },
  },
];

// FAQ
const faqs = [
  {
    question: "Comment puis-je obtenir un reçu pour mon don ?",
    answer:
      "Après avoir effectué votre don, vous recevrez automatiquement un reçu par email si vous avez fourni votre adresse. Vous pouvez également demander un reçu en contactant notre bureau administratif à Lomé.",
  },
  {
    question: "Mes dons sont-ils déductibles des impôts ?",
    answer:
      "Pour les donateurs au Togo, nos reçus sont conformes à la législation fiscale togolaise. Pour les donateurs internationaux, veuillez consulter les lois fiscales de votre pays concernant les dons aux organisations religieuses étrangères.",
  },
  {
    question: "Puis-je faire un don anonyme ?",
    answer:
      "Absolument. Vous pouvez choisir de faire un don anonyme en le spécifiant lors de votre paiement ou en contactant directement notre équipe financière.",
  },
  {
    question: "Comment sont utilisés les dons ?",
    answer:
      "Les dons sont utilisés pour soutenir les différents ministères de l'église, financer nos programmes communautaires au Togo, entretenir nos installations, et soutenir nos missions locales et internationales. Un rapport financier annuel est disponible pour tous les membres.",
  },
  {
    question: "Puis-je faire un don régulier ?",
    answer:
      "Oui, vous pouvez mettre en place un don régulier (mensuel, trimestriel, etc.) en contactant notre équipe financière qui vous guidera dans la mise en place de ce processus.",
  },
  {
    question: "Comment puis-je faire un don depuis l'étranger ?",
    answer:
      "Nous offrons plusieurs options pour les donateurs internationaux, notamment PayPal, les virements bancaires internationaux, et les transferts d'argent via Western Union ou MoneyGram. Consultez la section 'Dons Internationaux' pour plus de détails.",
  },
];

// Fonction pour basculer l'affichage des réponses FAQ
const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null;
  } else {
    activeFaq.value = index;
  }
};

// Fonction pour copier un numéro dans le presse-papiers
const copyToClipboard = (text) => {
  navigator.clipboard.writeText(text).then(() => {
    showCopyConfirmation.value = true;
    setTimeout(() => {
      showCopyConfirmation.value = false;
    }, 3000);
  });
};

// Fonction pour ouvrir une application de paiement
const openPaymentApp = (method) => {
  // Cette fonction pourrait ouvrir l'application de paiement correspondante
  // ou rediriger vers un lien spécifique
  alert(
    `Ouverture de l'application ${method.name} pour payer au numéro ${method.number}`
  );
};

// Fonction pour contacter l'église
const contactUs = () => {
  scrollToSection('contact');
};

// Fonction pour demander des informations sur les virements
const contactForWireTransfer = () => {
  window.open(
    "mailto:finance@siloecenter.org?subject=Demande d'informations pour virement international",
    "_blank"
  );
};

// Fonction pour faire défiler jusqu'à une section
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// Initialisation
onMounted(() => {
  // Initialiser le composant
});
</script>

<style>
/* Add these custom color variables */
:root {
  --slc-orange: #ffa500;
  --slc-yellow: #ffd700;
  --slc-blue: #87ceeb;
  --slc-purple: #9370db;
}

/* Update glow effect colors */
.hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
}

.dark-theme .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.3);
}

html:not(.dark-theme) .hover\:shadow-glow:hover {
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.2);
}

/* Add gradient accent for buttons and highlights */
.accent-gradient {
  background: linear-gradient(90deg, var(--slc-orange), var(--slc-yellow));
}

/* Styles globaux */
html {
  scroll-behavior: smooth;
}

/* Animation pour les éléments qui apparaissent au défilement */
.fade-in {
  animation: fadeIn 0.8s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation pour les images au survol */
.image-zoom {
  transition: transform 0.5s ease;
}

.image-zoom:hover {
  transform: scale(1.05);
}

/* Transition pour le changement de thème */
.theme-transition {
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}
</style>
