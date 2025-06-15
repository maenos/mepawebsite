<template>
  <div>
    <div class="relative pt-16">
      <div class="absolute inset-0 z-0 overflow-hidden">
        <img
          src=""
          alt="Évangélisation et suivi spirituel"
          class="w-full h-[500px] object-cover transition-all duration-500"
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
      <div class="relative z-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
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
            Évangélisation & Suivi
          </h1>
          <p
            class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Accompagner chaque personne dans son cheminement spirituel et accueillir les
            nouveaux croyants dans notre communauté de foi.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
              @click="scrollToSection('contact-form')"
              :class="[
                'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-glow',
                isDarkMode
                  ? 'bg-white hover:bg-gray-200 text-black'
                  : 'bg-gray-900 hover:bg-gray-800 text-white',
              ]"
            >
              Demander un suivi spirituel
            </button>
            <button
              @click="scrollToSection('discover-faith')"
              :class="[
                'font-medium py-3 px-6 rounded-md transition-all duration-300 hover:scale-105 border',
                isDarkMode
                  ? 'bg-transparent hover:bg-white/10 text-white border-white'
                  : 'bg-transparent hover:bg-gray-900/10 text-gray-900 border-gray-900',
              ]"
            >
              Découvrir la foi
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="transition-colors duration-500"
      :class="isDarkMode ? 'bg-black' : 'bg-white'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          id="contact-form"
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
              Demander un Suivi Spirituel
            </h2>
            <div class="w-16 h-1 mx-auto mt-4 mb-8 bg-amber-500"></div>
            <p
              class="text-lg max-w-3xl mx-auto"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Que vous soyez nouvellement converti ou que vous souhaitiez simplement un
              entretien, une prière ou un accompagnement, nous sommes là pour vous.
            </p>
          </div>

          <div class="max-w-3xl mx-auto">
            <div
              :class="[
                'p-8 rounded-lg shadow-xl border',
                isDarkMode
                  ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                  : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
              ]"
            >
              <form @submit.prevent="submitForm" class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="firstName"
                      class="block mb-2 font-medium"
                      :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      v-model="formData.firstName"
                      required
                      class="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300"
                      :class="
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:ring-amber-500/50'
                          : 'bg-white border-gray-300 text-gray-900 focus:ring-amber-500/50'
                      "
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block mb-2 font-medium"
                      :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      v-model="formData.lastName"
                      required
                      class="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300"
                      :class="
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:ring-amber-500/50'
                          : 'bg-white border-gray-300 text-gray-900 focus:ring-amber-500/50'
                      "
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="phone"
                      class="block mb-2 font-medium"
                      :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                    >
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      v-model="formData.phone"
                      required
                      class="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300"
                      :class="
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:ring-amber-500/50'
                          : 'bg-white border-gray-300 text-gray-900 focus:ring-amber-500/50'
                      "
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block mb-2 font-medium"
                      :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                    >
                      Email (optionnel)
                    </label>
                    <input
                      type="email"
                      id="email"
                      v-model="formData.email"
                      class="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300"
                      :class="
                        isDarkMode
                          ? 'bg-gray-800 border-gray-700 text-white focus:ring-amber-500/50'
                          : 'bg-white border-gray-300 text-gray-900 focus:ring-amber-500/50'
                      "
                      placeholder="Votre adresse email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    class="block mb-2 font-medium"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                  >
                    Type de suivi souhaité *
                  </label>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div
                      v-for="(option, index) in followUpOptions"
                      :key="index"
                      :class="[
                        'p-4 rounded-md border cursor-pointer transition-all duration-300',
                        formData.followUpType === option.value
                          ? isDarkMode
                            ? 'bg-amber-500/20 border-amber-500'
                            : 'bg-amber-500/10 border-amber-500'
                          : isDarkMode
                          ? 'bg-gray-800 border-gray-700 hover:bg-gray-700'
                          : 'bg-white border-gray-300 hover:bg-gray-100',
                      ]"
                      @click="formData.followUpType = option.value"
                    >
                      <div class="flex items-center">
                        <component
                          :is="option.icon"
                          class="h-5 w-5 mr-2"
                          :class="isDarkMode ? 'text-amber-500' : 'text-amber-600'"
                        />
                        <span :class="isDarkMode ? 'text-white' : 'text-gray-900'">{{
                          option.label
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    for="message"
                    class="block mb-2 font-medium"
                    :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    rows="4"
                    class="w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 transition-all duration-300"
                    :class="
                      isDarkMode
                        ? 'bg-gray-800 border-gray-700 text-white focus:ring-amber-500/50'
                        : 'bg-white border-gray-300 text-gray-900 focus:ring-amber-500/50'
                    "
                    placeholder="Partagez votre besoin ou votre témoignage..."
                  ></textarea>
                </div>

                <div class="flex justify-center">
                  <button
                    type="submit"
                    class="flex items-center justify-center gap-2 py-3 px-8 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow bg-amber-500 text-white hover:bg-amber-600"
                  >
                    <send class="h-5 w-5" />
                    <span>Demander un suivi spirituel</span>
                  </button>
                </div>
              </form>

              <div
                v-if="formSubmitted"
                class="mt-8 p-4 rounded-md bg-green-500/20 border border-green-500 text-center"
              >
                <check-circle class="h-8 w-8 mx-auto mb-2 text-green-500" />
                <p
                  class="text-lg font-medium"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Votre demande a été envoyée avec succès !
                </p>
                <p :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                  Un membre de notre équipe vous contactera très prochainement.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="discover-faith"
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
              Découvrir la Foi Chrétienne
            </h2>
            <div class="w-16 h-1 mx-auto mt-4 mb-8 bg-sky-500"></div>
            <p
              class="text-lg max-w-3xl mx-auto"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Explorez les fondements de la foi chrétienne et commencez votre voyage
              spirituel avec ces ressources essentielles.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div
              v-for="(resource, index) in faithResources"
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
                  :class="resource.bgColor"
                >
                  <component :is="resource.icon" class="h-8 w-8 text-white" />
                </div>
              </div>
              <h3
                class="text-xl font-bold mb-3 text-center"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              >
                {{ resource.title }}
              </h3>
              <p
                class="mb-6 text-center"
                :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
              >
                {{ resource.description }}
              </p>
              <div class="space-y-3">
                <a
                  v-for="(link, linkIndex) in resource.links"
                  :key="linkIndex"
                  :href="link.url"
                  class="flex items-center p-3 rounded-md transition-all duration-300 hover:translate-x-1"
                  :class="
                    isDarkMode
                      ? 'bg-white/5 hover:bg-white/10 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  "
                  target="_blank"
                >
                  <component
                    :is="link.icon"
                    class="h-5 w-5 mr-3"
                    :class="resource.iconColor"
                  />
                  <span>{{ link.title }}</span>
                  <external-link
                    class="h-4 w-4 ml-auto"
                    :class="isDarkMode ? 'text-gray-400' : 'text-gray-500'"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
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
              Témoignages Inspirants
            </h2>
            <div class="w-16 h-1 mx-auto mt-4 mb-8 bg-purple-500"></div>
            <p
              class="text-lg max-w-3xl mx-auto"
              :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
            >
              Découvrez comment Dieu a transformé la vie de ces personnes qui ont fait le
              choix de Le suivre.
            </p>
          </div>

          <div class="relative">
            <div class="flex overflow-x-hidden">
              <div
                class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${currentTestimonial * 100}%)` }"
              >
                <div
                  v-for="(testimonial, index) in testimonials"
                  :key="index"
                  class="w-full flex-shrink-0 px-4 md:px-12"
                >
                  <div
                    :class="[
                      'p-8 rounded-lg shadow-xl border',
                      isDarkMode
                        ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                        : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
                    ]"
                  >
                    <div class="flex items-center mb-6">
                      <div class="relative">
                        <img
                          :src="testimonial.image"
                          :alt="testimonial.name"
                          class="w-16 h-16 rounded-full object-cover"
                        />
                        <div
                          class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center bg-purple-500 text-white"
                        >
                          <quote class="h-3 w-3" />
                        </div>
                      </div>
                      <div class="ml-4">
                        <h3
                          class="text-lg font-semibold"
                          :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                        >
                          {{ testimonial.name }}
                        </h3>
                        <p
                          class="text-sm"
                          :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                        >
                          {{ testimonial.location }}
                        </p>
                      </div>
                    </div>
                    <p
                      class="mb-4 text-lg italic"
                      :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
                    >
                      "{{ testimonial.quote }}"
                    </p>
                    <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
                      {{ testimonial.story }}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              @click="prevTestimonial"
              class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              :class="
                isDarkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-900'
              "
            >
              <chevron-left class="h-6 w-6" />
            </button>
            <button
              @click="nextTestimonial"
              class="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              :class="
                isDarkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white'
                  : 'bg-white hover:bg-gray-100 text-gray-900'
              "
            >
              <chevron-right class="h-6 w-6" />
            </button>

            <div class="flex justify-center mt-8 space-x-2">
              <button
                v-for="(_, index) in testimonials"
                :key="index"
                @click="currentTestimonial = index"
                class="w-3 h-3 rounded-full transition-all duration-300"
                :class="
                  currentTestimonial === index
                    ? 'bg-purple-500 scale-125'
                    : isDarkMode
                    ? 'bg-gray-600 hover:bg-gray-500'
                    : 'bg-gray-300 hover:bg-gray-400'
                "
              ></button>
            </div>
          </div>
        </div>

        <div
          class="mb-16"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        >
          <div
            :class="[
              'p-8 rounded-lg shadow-xl border overflow-hidden relative',
              isDarkMode
                ? 'bg-gradient-to-br from-gray-800 to-black border-white/10'
                : 'bg-gradient-to-br from-white to-gray-100 border-gray-200',
            ]"
          >
            <div class="absolute top-0 right-0 w-64 h-64 opacity-10">
              <users
                class="w-full h-full"
                :class="isDarkMode ? 'text-white' : 'text-gray-900'"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
              <div>
                <h2
                  class="text-3xl font-bold mb-4"
                  :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                >
                  Rejoignez Notre Communauté
                </h2>
                <p class="mb-6" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                  La foi chrétienne n'est pas destinée à être vécue seul. Nous vous
                  invitons à rejoindre notre communauté pour grandir ensemble dans la foi,
                  l'amour et l'espérance.
                </p>
                <p class="mb-8" :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
                  Que vous soyez nouveau dans la foi ou que vous cherchiez à approfondir
                  votre relation avec Dieu, nous avons plusieurs façons de vous aider à
                  vous connecter et à grandir spirituellement.
                </p>
                <button
                  class="flex items-center gap-2 py-3 px-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow bg-amber-500 text-white hover:bg-amber-600"
                >
                  <users class="h-5 w-5" />
                  <span>Nous rejoindre dimanche</span>
                </button>
              </div>

              <div class="space-y-4">
                <div
                  v-for="(activity, index) in communityActivities"
                  :key="index"
                  :class="[
                    'p-4 rounded-md border transition-all duration-300 hover:shadow-md',
                    isDarkMode
                      ? 'bg-white/5 border-white/10 hover:bg-white/10'
                      : 'bg-white border-gray-200 hover:bg-gray-50',
                  ]"
                >
                  <div class="flex items-start">
                    <div class="p-2 rounded-md mr-4" :class="activity.bgColor">
                      <component :is="activity.icon" class="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3
                        class="text-lg font-semibold mb-1"
                        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
                      >
                        {{ activity.title }}
                      </h3>
                      <p :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'">
                        {{ activity.description }}
                      </p>
                      <div
                        class="mt-2 flex items-center text-sm"
                        :class="isDarkMode ? 'text-gray-400' : 'text-gray-600'"
                      >
                        <calendar class="h-4 w-4 mr-1" />
                        <span>{{ activity.schedule }}</span>
                        <map-pin class="h-4 w-4 ml-4 mr-1" />
                        <span>{{ activity.location }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            Prêt à Commencer Votre Voyage Spirituel?
          </h2>
          <p
            class="text-lg max-w-3xl mx-auto mb-8"
            :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
          >
            Nous sommes là pour vous accompagner à chaque étape de votre cheminement
            spirituel. N'hésitez pas à nous contacter ou à venir nous rencontrer lors de
            nos services.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-4">
            <button
              @click="scrollToSection('contact-form')"
              class="flex items-center justify-center gap-2 py-3 px-6 rounded-md font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow bg-amber-500 text-white hover:bg-amber-600"
            >
              <message-circle class="h-5 w-5" />
              <span>Demander un suivi</span>
            </button>
            <button
              class="flex items-center justify-center gap-2 py-3 px-6 rounded-md font-medium transition-all duration-300 hover:scale-105 border"
              :class="
                isDarkMode
                  ? 'bg-transparent hover:bg-white/10 text-white border-white'
                  : 'bg-transparent hover:bg-gray-900/10 text-gray-900 border-gray-900'
              "
            >
              <calendar class="h-5 w-5" />
              <span>Voir nos horaires</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import {
  Book,
  BookOpen,
  Calendar,
  CalendarDays,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Clock,
  Coffee,
  ExternalLink,
  FileText,
  Heart,
  Home,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Music,
  HandHelping,
  Quote,
  Send,
  Share,
  Sun,
  User,
  Users,
  Video,
  X,
} from "lucide-vue-next";
import { useThemeStore } from "@/stores/theme";

const themeStore = useThemeStore();

const isDarkMode = ref(themeStore.isDarkMode);

watch(
  () => themeStore.isDarkMode,
  (newVal) => {
    isDarkMode.value = newVal;
  }
);

const currentTestimonial = ref(0);
const formSubmitted = ref(false);

const formData = ref({
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  followUpType: "prayer",
  message: "",
});

const followUpOptions = [
  {
    label: "Prière",
    value: "prayer",
    icon: HandHelping,
  },
  {
    label: "Entretien",
    value: "meeting",
    icon: Coffee,
  },
  {
    label: "Suivi spirituel",
    value: "followup",
    icon: User,
  },
  {
    label: "Nouveau converti",
    value: "newbeliever",
    icon: Heart,
  },
];

const faithResources = [
  {
    title: "Bases de la Foi",
    description:
      "Découvrez les fondements essentiels de la foi chrétienne pour bien commencer votre cheminement spirituel.",
    icon: Book,
    bgColor: "bg-sky-500",
    iconColor: "text-sky-500",
    links: [
      {
        title: "Qui est Jésus-Christ?",
        url: "#",
        icon: FileText,
      },
      {
        title: "Comment prier?",
        url: "#",
        icon: HandHelping,
      },
      {
        title: "Comprendre la Bible",
        url: "#",
        icon: BookOpen,
      },
    ],
  },
  {
    title: "Grandir dans la Foi",
    description:
      "Ressources pour vous aider à approfondir votre relation avec Dieu et à grandir spirituellement.",
    icon: Heart,
    bgColor: "bg-amber-500",
    iconColor: "text-amber-500",
    links: [
      {
        title: "Plan de lecture biblique",
        url: "#",
        icon: Calendar,
      },
      {
        title: "Méditations quotidiennes",
        url: "#",
        icon: BookOpen,
      },
      {
        title: "Louange et adoration",
        url: "#",
        icon: Music,
      },
    ],
  },
  {
    title: "Ressources Multimédias",
    description:
      "Explorez notre collection de vidéos, podcasts et articles pour approfondir votre compréhension de la foi.",
    icon: Video,
    bgColor: "bg-purple-500",
    iconColor: "text-purple-500",
    links: [
      {
        title: "Série vidéo pour débutants",
        url: "#",
        icon: Video,
      },
      {
        title: "Podcasts inspirants",
        url: "#",
        icon: Music,
      },
      {
        title: "Articles et témoignages",
        url: "#",
        icon: FileText,
      },
    ],
  },
];

const testimonials = [
  {
    name: "Marie Dupont",
    location: "Paris",
    image: "/placeholder.svg?height=100&width=100",
    quote: "Ma vie a été complètement transformée depuis que j'ai rencontré Jésus.",
    story:
      "Après des années de recherche spirituelle, j'ai trouvé la paix et la joie que je cherchais depuis si longtemps. L'accompagnement de l'église m'a aidée à grandir dans ma foi et à comprendre la Bible.",
  },
  {
    name: "Jean Martin",
    location: "Lyon",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "J'étais sceptique au début, mais Dieu a touché mon cœur d'une manière que je ne peux expliquer.",
    story:
      "En tant qu'ancien athée, je ne pensais jamais que je deviendrais chrétien. Mais après avoir assisté à quelques services et étudié la Bible, j'ai découvert une vérité qui a changé ma vie pour toujours.",
  },
  {
    name: "Sophie Leclerc",
    location: "Marseille",
    image: "/placeholder.svg?height=100&width=100",
    quote:
      "Le suivi spirituel m'a aidée à surmonter les moments difficiles et à rester ancrée dans ma foi.",
    story:
      "Après ma conversion, j'avais beaucoup de questions et de doutes. Grâce au soutien et aux conseils de mentors spirituels, j'ai pu approfondir ma relation avec Dieu et trouver des réponses à mes questions.",
  },
];

const communityActivities = [
  {
    title: "Cultes du Dimanche",
    description:
      "Rejoignez-nous pour un moment de louange, d'enseignement biblique et de communion fraternelle.",
    schedule: "Chaque dimanche à 10h00",
    location: "Sanctuaire principal",
    icon: Users,
    bgColor: "bg-amber-500",
  },
  {
    title: "Groupes de Maison",
    description:
      "Petits groupes qui se réunissent pour étudier la Bible, prier ensemble et développer des relations profondes.",
    schedule: "Divers jours et horaires",
    location: "Dans différents quartiers",
    icon: Home,
    bgColor: "bg-sky-500",
  },
  {
    title: "Cours de Découverte de la Foi",
    description:
      "Une série de cours conçus pour les nouveaux croyants ou ceux qui explorent la foi chrétienne.",
    schedule: "Mercredi à 19h00",
    location: "Salle d'étude",
    icon: BookOpen,
    bgColor: "bg-purple-500",
  },
];

const submitForm = () => {
  console.log("Formulaire soumis:", formData.value);

  setTimeout(() => {
    formSubmitted.value = true;

    formData.value = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      followUpType: "prayer",
      message: "",
    };
  }, 1000);
};

const nextTestimonial = () => {
  if (currentTestimonial.value < testimonials.length - 1) {
    currentTestimonial.value++;
  } else {
    currentTestimonial.value = 0;
  }
};

const prevTestimonial = () => {
  if (currentTestimonial.value > 0) {
    currentTestimonial.value--;
  } else {
    currentTestimonial.value = testimonials.length - 1;
  }
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style>
:root {
  --slc-orange: #ffa500;
  --slc-yellow: #ffd700;
  --slc-blue: #87ceeb;
  --slc-purple: #9370db;
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

.accent-gradient {
  background: linear-gradient(90deg, var(--slc-orange), var(--slc-yellow));
}

html {
  scroll-behavior: smooth;
}

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

.image-zoom {
  transition: transform 0.5s ease;
}

.image-zoom:hover {
  transform: scale(1.05);
}

.theme-transition {
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
