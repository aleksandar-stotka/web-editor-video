<template>
  <section id="projects" class="pb-16 pt-8">
    <div class="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 class="text-3xl font-light tracking-[-0.04em] text-[#d96842] sm:text-4xl">{{ t('navProjects').toUpperCase() }}</h2>
      </div>
      <NuxtLink
        to="/#projects"
        class="text-xs font-semibold uppercase tracking-[0.14em] text-[#70786f] transition hover:text-[#d96842]"
      >
        {{ t('projectViewAll') }}
      </NuxtLink>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <a
        v-for="(video, index) in projectVideos"
        :key="video"
        :href="video"
        target="_blank"
        rel="noopener noreferrer"
        class="group overflow-hidden rounded-[22px] border border-[#1f2521]/10 bg-white/35 shadow-[0_15px_35px_rgba(31,37,33,0.06)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(31,37,33,0.12)]"
      >
        <div class="relative aspect-video overflow-hidden bg-[#111111]">
          <img
            :src="getThumbnail(video)"
            :alt="`Project video ${index + 1}`"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            @error="handleImageError($event, video)"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/10">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-[#d96842] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg class="ml-1 h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-3 px-4 py-3">
          <p class="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#70786f]">
            {{ t('projectFilm') }} {{ String(index + 1).padStart(2, '0') }}
          </p>
          <span class="text-sm text-[#1f2521] transition group-hover:text-[#d96842]">↗</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const projectVideos = [
  'https://youtu.be/a6bITHezhzc?si=eg4JfLKX7DmUjalV',
  'https://youtu.be/pcmuvV-mk1w?si=1tX5iHyZLJX89_A8',
  'https://youtu.be/ZLKsOn235u8?si=KRhibq1DzTlttI5I',
  'https://youtu.be/rPwZb_nr0P4?si=nzVQKnHr3_hDNAht',
  'https://youtu.be/8cfWt3t8o8s?si=sSPFiXxv7l_SO_LQ',
  'https://youtu.be/1L0Eb1vnXsQ?si=Ye3t2ZWhBJmhUpne',
  'https://youtu.be/ro_Da05e7e0?si=-Es5YTCI7_cbAqZ7',
  
  'https://youtu.be/1rH6hTpaDgc?si=FkSYSQfJzwFNFa0e',
  'https://youtu.be/NJCpue0xDJ4?si=CEGZRHRP15m4Ytx5',
  'https://youtu.be/JbL_nv5gwXQ?si=kmGIF2wc0t2kJaZN',
  'https://youtu.be/ObcWjd3eyps?si=y0IIzo9sMdpvmV8a',
  'https://youtu.be/5G-5AverTiQ?si=xatz8qzQ769o15E5',
  'https://youtu.be/Kga4wZup_vc?si=LgmUKK3sHAk11spc',
  'https://youtu.be/vOaGkt87UHY?si=MayaeP7DEahlP0ru',
  'https://youtu.be/p3kUSdxnUTs?si=kyubSVwB1BDYA-CO',
  'https://youtu.be/4BC-v0qtKkM?si=MgC-4ZhRu1glQ0up',
]

function getVideoId(url: string) {
  if (url.includes('watch?v=')) {
    return url.split('watch?v=')[1]?.split('&')[0] ?? ''
  }

  if (url.includes('youtu.be/')) {
    return url.split('youtu.be/')[1]?.split('?')[0] ?? ''
  }

  return ''
}

function getThumbnailCandidates(url: string) {
  const id = getVideoId(url)

  if (!id) return []

  return [
    `https://img.youtube.com/vi/${id}/sddefault.jpg`,
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${id}/0.jpg`
  ]
}

function getThumbnail(url: string) {
  const [first] = getThumbnailCandidates(url)
  return first ?? ''
}

function handleImageError(event: Event, url: string) {
  const image = event.currentTarget as HTMLImageElement
  const candidates = getThumbnailCandidates(url)
  const currentIndex = candidates.indexOf(image.currentSrc || image.src)
  const nextIndex = currentIndex >= 0 ? currentIndex + 1 : 0

  if (nextIndex < candidates.length) {
    image.src = candidates[nextIndex]
  }
}
</script>
