<template>
  <section id="projects" class="pb-16 pt-8">
    <div class="scroll-reveal mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 class="scroll-scale-title text-3xl font-light tracking-[-0.04em] text-[#e50914] sm:text-4xl">{{ t('navProjects').toUpperCase() }}</h2>
      </div>
      <NuxtLink
        to="/#projects"
        class="text-xs font-semibold uppercase tracking-[0.14em] text-[#b3b3b3] transition hover:text-[#e50914]"
      >
        {{ t('projectViewAll') }}
      </NuxtLink>
    </div>

    <div class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      <a
        v-for="(video, index) in projectVideos"
        :key="video.url"
        :href="video.url"
        target="_blank"
        rel="noopener noreferrer"
        class="scroll-reveal group overflow-hidden rounded-[22px] border border-white/10 bg-[#222222] shadow-[0_15px_35px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_22px_50px_rgba(0,0,0,0.45)]"
      >
        <div class="relative aspect-video overflow-hidden bg-[#111111]">
          <img
            :src="getThumbnail(video.url)"
            :alt="video.title || `Project video ${index + 1}`"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            @error="handleImageError($event, video.url)"
          />

          <div class="absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/10">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-[#e50914] text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
              <svg class="ml-1 h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="px-4 pb-3 pt-3">
          <p v-if="video.title" class="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f5f5f1]/80 sm:text-[11px]">
            {{ video.title }}
          </p>
        </div>

        <div class="flex items-center justify-between gap-3 px-4 pb-3">
          <p class="text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#b3b3b3]">
            {{ t('projectFilm') }} {{ String(index + 1).padStart(2, '0') }}
          </p>
          <span class="text-sm text-[#f5f5f1] transition group-hover:text-[#e50914]">↗</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()

const projectVideos = [
  { title: 'Storyline', url: 'https://youtu.be/a6bITHezhzc?si=eg4JfLKX7DmUjalV' },
  { title: 'Radiohead – Let Down | Cinematic Music Video (Fan-Made)', url: 'https://youtu.be/pcmuvV-mk1w?si=1tX5iHyZLJX89_A8' },
  { title: 'Stop Racism', url: 'https://youtu.be/ZLKsOn235u8?si=KRhibq1DzTlttI5I' },
  { title: 'Bees and Beekeeping in 10 Minutes part 1', url: 'https://youtu.be/rPwZb_nr0P4?si=nzVQKnHr3_hDNAht' },
  { title: 'Velvet Strut', url: 'https://youtu.be/8cfWt3t8o8s?si=sSPFiXxv7l_SO_LQ' },
  { title: 'The Man from Earth – Why Storytelling Beats CGI', url: 'https://youtu.be/1L0Eb1vnXsQ?si=Ye3t2ZWhBJmhUpne' },
  { title: '# Black & White Emotion | Miserable Girl', url: 'https://youtu.be/ro_Da05e7e0?si=-Es5YTCI7_cbAqZ7' },
  { title: 'Fatboy Slim - Brimful Of Asha [Visual Redesign]', url: 'https://youtu.be/1rH6hTpaDgc?si=FkSYSQfJzwFNFa0e' },
  { title: 'Skara House — Commercial Spot', url: 'https://youtu.be/NJCpue0xDJ4?si=CEGZRHRP15m4Ytx5' },
  { title: 'SKARA HOUSE', url: 'https://youtu.be/JbL_nv5gwXQ?si=kmGIF2wc0t2kJaZN' },
  { title: 'Color Grading & Video Editing DaVinci Resolve', url: 'https://youtu.be/ObcWjd3eyps?si=y0IIzo9sMdpvmV8a' },
  { title: 'Bees and Beekeeping in 10 Minutes part 2', url: 'https://youtu.be/5G-5AverTiQ?si=xatz8qzQ769o15E5' },
  { title: '', url: 'https://youtu.be/Kga4wZup_vc?si=LgmUKK3sHAk11spc' },
  { title: '', url: 'https://youtu.be/vOaGkt87UHY?si=MayaeP7DEahlP0ru' },
  { title: '', url: 'https://youtu.be/p3kUSdxnUTs?si=kyubSVwB1BDYA-CO' },
  { title: '', url: 'https://youtu.be/4BC-v0qtKkM?si=MgC-4ZhRu1glQ0up' },
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
