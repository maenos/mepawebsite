import { ref } from "vue"

export function useVideoModal() {
  const isVideoModalOpen = ref(false)
  const videoUrl = ref("")
  const videoFile = ref("")

  const playVideo = (sermon) => {
    if (sermon?.videoUrl) {
      videoUrl.value = sermon.videoUrl
    }
    if (sermon?.videoFile) {
      videoFile.value = `https://api.eglisesiloecentre.org/storage/${sermon.videoFile}`
    }
    isVideoModalOpen.value = true
  }

  const closeVideoModal = () => {
    isVideoModalOpen.value = false
    videoUrl.value = ""
    videoFile.value = ""
  }

  const isExternal = (url) => {
    return url.includes("youtube.com") || url.includes("youtu.be") || url.includes("vimeo.com")
  }

  const embedUrl = (url) => {
    if (url.includes("youtube.com/watch?v=")) {
      return url.replace("watch?v=", "embed/")
    } else if (url.includes("youtu.be/")) {
      return url.replace("youtu.be/", "youtube.com/embed/")
    } else if (url.includes("vimeo.com")) {
      return url.replace("vimeo.com/", "player.vimeo.com/video/")
    }
    return url
  }

  return {
    isVideoModalOpen,
    videoUrl,
    videoFile,
    playVideo,
    closeVideoModal,
    isExternal,
    embedUrl,
  }
}
