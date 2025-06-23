<template>
  <!-- Loading State -->
  <div v-if="isLoading" class="flex justify-center items-center min-h-[50vh]">
    <div
      class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"
    ></div>
  </div>

  <!-- Empty State -->
  <EmptyState
    v-else-if="!isLoading && sermons.length === 0"
    @refresh="refreshSermons"
    :isDarkMode="isDarkMode"
  />

  <!-- Main Content -->
  <main v-else class="pt-24">
    <!-- Page Header -->
    <PageHeader :isDarkMode="isDarkMode" />

    <!-- Content Area -->
    <div
      class="transition-colors duration-500 pb-24"
      :class="isDarkMode ? 'bg-black' : 'bg-white'"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Selected Sermon Detail View -->
        <SermonDetail
          v-if="selectedSermon"
          :sermon="selectedSermon"
          :isDarkMode="isDarkMode"
          :readingMode="readingMode"
          :fontSize="fontSize"
          @close="closeSermonDetails"
          @toggleReading="readingMode = !readingMode"
          @playVideo="playVideo"
          @adjustFontSize="adjustFontSize"
        />

        <!-- Sermons List View -->
        <SermonsGrid
          v-else
          :sermons="sermonsToDisplay"
          :showAllSermons="showAllSermons"
          :isDarkMode="isDarkMode"
          @selectSermon="openSermonDetails"
          @toggleShowAll="showAllSermons = !showAllSermons"
        />

        <!-- Pagination -->
        <Pagination
          v-if="!selectedSermon && showAllSermons && totalPages > 1"
          :currentPage="currentPage"
          :totalPages="totalPages"
          :isDarkMode="isDarkMode"
          @changePage="currentPage = $event"
        />
      </div>
    </div>

    <!-- Video Modal -->
    <VideoModal
      v-if="isVideoModalOpen"
      :videoUrl="videoUrl"
      :videoFile="videoFile"
      @close="closeVideoModal"
    />
  </main>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useThemeStore } from "@/stores/theme";
import { useSermons } from "@/composables/useSermons";
import { useVideoModal } from "@/composables/useVideoModal";
import { usePagination } from "@/composables/usePagination";

// Components
import EmptyState from "@/components/sermons/EmptyState.vue";
import PageHeader from "@/components/sermons/PageHeader.vue";
import SermonDetail from "@/components/sermons/SermonDetail.vue";
import SermonsGrid from "@/components/sermons/SermonsGrid.vue";
import Pagination from "@/components/sermons/Pagination.vue";
import VideoModal from "@/components/sermons/VideoModal.vue";

// Stores and composables
const themeStore = useThemeStore();
const isDarkMode = computed(() => themeStore.isDarkMode);

const { sermons, isLoading, fetchSermons, refreshSermons } = useSermons();

const {
  isVideoModalOpen,
  videoUrl,
  videoFile,
  playVideo,
  closeVideoModal,
} = useVideoModal();

const { currentPage, totalPages, paginationRange } = usePagination(sermons, 6);

// Local state
const showAllSermons = ref(false);
const selectedSermon = ref(null);
const readingMode = ref(false);
const fontSize = ref(16);

// Computed
const sermonsToDisplay = computed(() => {
  if (!showAllSermons.value) {
    return sermons.value.slice(0, 3);
  }

  const start = (currentPage.value - 1) * 6;
  const end = start + 6;
  return sermons.value.slice(start, end);
});

// Methods
const openSermonDetails = (sermon) => {
  selectedSermon.value = sermon;
  readingMode.value = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const closeSermonDetails = () => {
  selectedSermon.value = null;
  readingMode.value = false;
};

const adjustFontSize = (delta) => {
  const newSize = fontSize.value + delta;
  if (newSize >= 14 && newSize <= 22) {
    fontSize.value = newSize;
  }
};

// Lifecycle
onMounted(() => {
  fetchSermons();
});
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

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
