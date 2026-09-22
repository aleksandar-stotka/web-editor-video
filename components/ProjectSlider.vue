<template>
  <section id="projects" class="pb-16 pt-8">
    <div class="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 class="text-3xl font-light tracking-[-0.04em] text-[#d96842] sm:text-4xl">SELECTED WORK</h2>
      </div>
      <NuxtLink
        to="/#projects"
        class="text-xs font-semibold uppercase tracking-[0.14em] text-[#70786f] transition hover:text-[#d96842]"
      >
        View all
      </NuxtLink>
    </div>

    <div class="rounded-[24px] border border-[#1f2521]/10 bg-white/35 p-4 sm:p-6">
      <div class="mb-4 flex items-center justify-between gap-4 border-b border-[#1f2521]/10 pb-3">
        <p class="text-sm font-semibold uppercase tracking-[0.16em] text-[#70786f]">
          {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(projectVideos.length).padStart(2, '0') }}
        </p>

        <div class="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous project"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-[#1f2521] bg-transparent text-2xl text-[#1f2521] transition hover:bg-[#d96842] hover:text-white"
            @click="showPrevious"
          >
            &#8592;
          </button>
          <span class="click-hint" aria-hidden="true">Click for More ✦</span>
          <button
            type="button"
            aria-label="Next project"
            class="flex h-12 w-12 items-center justify-center rounded-full border border-[#1f2521] bg-transparent text-2xl text-[#1f2521] transition hover:bg-[#d96842] hover:text-white"
            @click="showNext"
          >
            &#8594;
          </button>
        </div>
      </div>

      <div class="relative aspect-video overflow-hidden rounded-[18px] bg-[#111111]">
        <iframe
          :src="embedUrl"
          :title="`Project video ${activeIndex + 1}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="absolute inset-0 h-full w-full"
        ></iframe>
      </div>

      <div class="mt-4 flex items-center justify-between gap-4">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="(video, index) in projectVideos"
            :key="video"
            type="button"
            :class="[
              'h-1.5 rounded-full transition-all',
              activeIndex === index ? 'w-16 bg-[#d96842]' : 'w-8 bg-[#d9ddd5]'
            ]"
            :aria-label="`Show project video ${index + 1}`"
            :aria-current="activeIndex === index ? 'true' : undefined"
            @click="activeIndex = index"
          ></button>
        </div>

        <p class="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#70786f]">
          Project film {{ String(activeIndex + 1).padStart(2, '0') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const projectVideos = [
  'https://youtu.be/ZLKsOn235u8?si=KRhibq1DzTlttI5I',
  'https://youtu.be/rPwZb_nr0P4?si=nzVQKnHr3_hDNAht',
  'https://youtu.be/8cfWt3t8o8s?si=sSPFiXxv7l_SO_LQ',
  'https://youtu.be/1L0Eb1vnXsQ?si=Ye3t2ZWhBJmhUpne',
  'https://youtu.be/ro_Da05e7e0?si=-Es5YTCI7_cbAqZ7',
  'https://youtu.be/NJCpue0xDJ4?si=CEGZRHRP15m4Ytx5',
  'https://youtu.be/JbL_nv5gwXQ?si=kmGIF2wc0t2kJaZN',
  'https://youtu.be/ObcWjd3eyps?si=y0IIzo9sMdpvmV8a',
  'https://youtu.be/5G-5AverTiQ?si=xatz8qzQ769o15E5',
  'https://youtu.be/Kga4wZup_vc?si=LgmUKK3sHAk11spc',
  'https://youtu.be/vOaGkt87UHY?si=MayaeP7DEahlP0ru',
  'https://youtu.be/p3kUSdxnUTs?si=kyubSVwB1BDYA-CO',
  'https://youtu.be/4BC-v0qtKkM?si=MgC-4ZhRu1glQ0up',
]

const activeIndex = ref(0)
const rawYoutubeUrl = computed(() => projectVideos[activeIndex.value])

const embedUrl = computed(() => {
  const url = rawYoutubeUrl.value ?? ''
  let videoId = ''

  if (url.includes('watch?v=')) {
    videoId = url.split('watch?v=')[1]?.split('&')[0] ?? ''
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] ?? ''
  } else if (url.includes('embed/')) {
    return url
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
})

function showPrevious() {
  activeIndex.value = (activeIndex.value - 1 + projectVideos.length) % projectVideos.length
}

function showNext() {
  activeIndex.value = (activeIndex.value + 1) % projectVideos.length
}
</script>

<style scoped>
.click-hint {
  color: #d96842;
  font-size: 0.85rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  animation: click-hint-pulse 3s ease-in-out infinite;
}

@keyframes click-hint-pulse {
  0%,
  70%,
  100% {
    opacity: 0.25;
    transform: translateX(0);
  }
  78%,
  90% {
    opacity: 1;
    transform: translateX(3px);
  }
}
</style>
