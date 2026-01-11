import { ref } from "vue"
import api from "@/plugin/mepa"

export function useSermons() {
  const sermons = ref([])
  const isLoading = ref(false)
  const error = ref(null)

  const fetchSermons = async () => {
    isLoading.value = true
    error.value = null

    try {
      const response = await api.get("/sermons")
      const data = response.data

      if (Array.isArray(data)) {
        sermons.value = data
      } else if (data['hydra:member']) {
        sermons.value = data['hydra:member']
      } else if (data.data) {
        // Handle JSON:API style or wrapped responses
        sermons.value = data.data
      } else {
        sermons.value = []
        console.log("Aucun sermon trouvé ou format de données incorrect")
      }
    } catch (err) {
      console.error("Erreur lors de la récupération des sermons:", err)
      error.value = err
      sermons.value = []
    } finally {
      isLoading.value = false
    }
  }

  const refreshSermons = () => {
    fetchSermons()
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    const day = String(date.getDate()).padStart(2, "0")
    const month = String(date.getMonth() + 1).padStart(2, "0")
    const year = date.getFullYear()
    return `${day}/${month}/${year}`
  }

  return {
    sermons,
    isLoading,
    error,
    fetchSermons,
    refreshSermons,
    formatDate,
  }
}
