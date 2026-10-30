<template>
  <section id="projects" class="projects-showcase pb-16 pt-8">
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

    <div class="project-grid grid gap-5 sm:grid-cols-2">
      <a
        v-for="(video, index) in projectVideos"
        :key="video.url"
        :href="video.url"
        target="_blank"
        rel="noopener noreferrer"
        class="scroll-reveal project-card group relative overflow-hidden rounded-[24px] border border-white/10 bg-[#1d1d1d] shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-[#e50914]/60"
      >
        <div class="relative aspect-[4/3] overflow-hidden bg-[#111111]">
          <img
            :src="getThumbnail(video.url)"
            :alt="video.title || `Project video ${index + 1}`"
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            @error="handleImageError($event, video.url)"
          />

          <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div class="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/25 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#f5f5f1] backdrop-blur-sm">
            {{ t('projectFilm') }} {{ String(index + 1).padStart(2, '0') }}
          </div>

          <div class="absolute inset-0 z-10 flex items-center justify-center">
            <div class="flex h-16 w-16 items-center justify-center rounded-full bg-[#e50914]/90 text-white shadow-[0_0_30px_rgba(229,9,20,0.45)] transition-transform duration-300 group-hover:scale-110">
              <svg class="ml-1 h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          <div class="absolute bottom-0 left-0 right-0 z-10 p-4">
            <p v-if="video.title" class="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#f5f5f1] sm:text-[12px]">
              {{ video.title }}
            </p>
          </div>
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

<style scoped>
.projects-showcase {
  position: relative;
}

.projects-showcase::before {
  content: '';
  position: absolute;
  inset: 0 auto auto 0;
  width: 100%;
  height: 10px;
  background: linear-gradient(90deg, rgba(229, 9, 20, 0.8), rgba(255, 182, 0, 0.6));
  border-radius: 9999px;
  opacity: 0.8;
}

.project-card {
  position: relative;
  background: linear-gradient(180deg, rgba(20,20,20,0.96), rgba(10,10,10,0.98));
}

.project-card img {
  filter: saturate(1.1) contrast(1.08);
}

@media (min-width: 768px) {
  .project-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
