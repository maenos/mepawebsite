<template>
  <article
    class="prose prose-lg max-w-4xl mx-auto"
    :class="isDarkMode ? 'prose-invert' : ''"
    :style="{ fontSize: `${fontSize}px` }"
  >
    <h1
      class="font-serif mb-6"
      :class="isDarkMode ? 'text-white' : 'text-gray-900'"
    >
      {{ sermon.title }}
    </h1>

    <div class="flex items-center gap-6 mb-8">
      <div class="flex items-center">
        <User
          class="h-5 w-5 mr-2"
          :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
        />
        <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
          {{ sermon.preacher }}
        </span>
      </div>
      <div class="flex items-center">
        <Calendar
          class="h-5 w-5 mr-2"
          :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
        />
        <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
          {{ formatDate(sermon.date) }}
        </span>
      </div>

      <div v-if="sermon.series" class="flex items-center">
        <Layers
          class="h-5 w-5 mr-2"
          :class="isDarkMode ? 'text-amber-100' : 'text-amber-700'"
        />
        <span :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'">
          {{ sermon.series.title || sermon.series }}
        </span>
      </div>
    </div>

    <!-- Content Sections -->
    <div v-for="(section, index) in sermon.content" :key="index">
      <h2
        v-if="section.title"
        class="font-serif mt-10 mb-4"
        :class="isDarkMode ? 'text-white' : 'text-gray-900'"
      >
        {{ section.title }}
      </h2>

      <div v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex">
        <!-- Normal paragraph -->
        <p
          v-if="paragraph.type === 'text'"
          class="mb-4 leading-relaxed"
          :class="isDarkMode ? 'text-gray-300' : 'text-gray-700'"
        >
          {{ paragraph.content }}
        </p>

        <!-- Bible verse -->
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

        <!-- Important point -->
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
      v-if="sermon.conclusion"
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
        {{ sermon.conclusion }}
      </p>
    </div>

    <!-- Reflection Questions -->
    <div
      v-if="sermon.questions && sermon.questions.length > 0"
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
          v-for="(question, qIndex) in sermon.questions"
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
</template>

<script setup>
import { User, Calendar, Layers } from 'lucide-vue-next'

defineProps({
  sermon: {
    type: Object,
    required: true
  },
  isDarkMode: {
    type: Boolean,
    required: true
  },
  fontSize: {
    type: Number,
    required: true
  }
})

const formatDate = (dateString) => {
  const date = new Date(dateString)
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
</script>
