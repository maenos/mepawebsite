import { ref, computed } from "vue"

export function usePagination(items, itemsPerPage = 6) {
  const currentPage = ref(1)

  const totalPages = computed(() => {
    return Math.ceil(items.value.length / itemsPerPage)
  })

  const paginationRange = computed(() => {
    const range = []
    const maxVisiblePages = 5

    if (totalPages.value <= maxVisiblePages) {
      for (let i = 1; i <= totalPages.value; i++) {
        range.push(i)
      }
    } else {
      let start = Math.max(1, currentPage.value - Math.floor(maxVisiblePages / 2))
      const end = Math.min(totalPages.value, start + maxVisiblePages - 1)

      if (end === totalPages.value) {
        start = Math.max(1, end - maxVisiblePages + 1)
      }

      for (let i = start; i <= end; i++) {
        range.push(i)
      }
    }

    return range
  })

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    currentPage,
    totalPages,
    paginationRange,
    goToPage,
    nextPage,
    prevPage,
  }
}
