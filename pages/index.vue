<template>
  <div id="top" class="min-h-screen bg-[#f1f0e9] text-[#1f2521]">
    <NavbarPage />

    <button
      v-show="showBackToTop"
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
      class="fixed bottom-8 left-1/2 z-50 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-[#1f2521]/25 bg-[#f7f4ef] text-2xl font-light text-[#1f2521] shadow-lg shadow-[#1f2521]/10 transition hover:border-[#d96842] hover:text-[#d96842]"
    >
      ↑
    </button>

    <main class="mx-auto max-w-4xl px-6 pb-24 pt-20 sm:px-8 lg:px-12">
     

      <section class="flex min-h-[32vh] items-end pb-16">
        <div class="max-w-3xl">
          <p class="text-sm uppercase tracking-[0.18em] text-[#70786f]">Editor / Visual Storyteller</p>
          <h1 class="mt-4 text-3xl font-light leading-[0.95] tracking-[-0.04em] text-[#1f2521] sm:text-4xl lg:text-5xl">
            I turn footage into stories.
          </h1>

          <div class="rotating-words mt-5" aria-live="polite">
            <span v-for="(word, index) in rotatingWords" :key="word" :class="['rotating-word', { active: activeWordIndex === index }]">
              {{ word }}
            </span>
          </div>
        </div>
      </section>

      <div class="my-8 flex items-center justify-center gap-4">
        <div class="h-px w-24 bg-[#1f2521]/80"></div>
        <div class="divider-ornament h-12 w-[4px] bg-[#ef6d3f] opacity-100"></div>
        <div class="h-px w-24 bg-[#1f2521]/80"></div>
      </div>

      <section id="about" class="about-section pb-16 pt-12">
        <h2 class="about-title mb-6 text-3xl font-light tracking-[-0.04em] text-[#d96842] sm:text-4xl">ABOUT ME</h2>

        <p class="about-copy text-base leading-8 text-[#1f2521]/80 sm:text-lg">
          I’m a Video Editor focused on creating engaging, polished, and story-driven content for commercials, music videos, documentaries, and digital media.
        </p>

        <p class="about-copy mt-6 text-base leading-8 text-[#1f2521]/80 sm:text-lg">
          My primary expertise is post-production using <strong>Adobe Premiere Pro, After Effects, and DaVinci Resolve</strong>, covering everything from assembly and color grading to motion graphics and visual effects.
        </p>

        <p class="about-copy mt-6 text-base leading-8 text-[#1f2521]/80 sm:text-lg">
          Before dedicating myself fully to video editing, I built a foundation in web development, working with modern web technologies to build responsive sites. This background gives me a distinct technical edge—allowing me to combine creative visual storytelling with a deep understanding of digital media formats, web integration, and technical asset management.
        </p>

        <p class="about-copy mt-6 text-base leading-8 text-[#1f2521]/80 sm:text-lg">
          Today, my focus is entirely on visual storytelling: turning raw footage into compelling videos that evoke emotion, communicate ideas clearly, and hold audience attention. I am always looking to collaborate with businesses, agencies, artists, and creative teams on ambitious video projects.
        </p>
      </section>

      <ProjectSlider />

      <ServicesSection />

      <ContactPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import ContactPage from './contact/index.vue'
import NavbarPage from './navbar/index.vue'
import ProjectSlider from '../components/ProjectSlider.vue'
import ServicesSection from '../components/ServicesSection.vue'

const rotatingWords = [
  'ADVERTISING',
  'MUSIC VIDEOS',
  'DOCUMENTARIES',
  'SOCIAL MEDIA',
  'COLOR GRADING',
]

const activeWordIndex = ref(0)
const showBackToTop = ref(false)
let wordTimer: ReturnType<typeof setInterval> | null = null

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function updateBackToTopVisibility() {
  showBackToTop.value = window.scrollY > 200
}

onMounted(() => {
  const frame = document.querySelector('.video-frame-fade') as HTMLElement | null
  const video = document.querySelector('.video-fade') as HTMLVideoElement | null

  if (frame) {
    setTimeout(() => {
      frame.classList.add('show-video-frame')
      if (video) video.classList.add('show-video')
    }, 1000)
  }

  updateBackToTopVisibility()
  window.addEventListener('scroll', updateBackToTopVisibility)

  wordTimer = setInterval(() => {
    activeWordIndex.value = (activeWordIndex.value + 1) % rotatingWords.length
  }, 1800)
})

onBeforeUnmount(() => {
  if (wordTimer) {
    clearInterval(wordTimer)
  }

  window.removeEventListener('scroll', updateBackToTopVisibility)
})
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
}

.about-section {
  font-family: 'Georgia', 'Times New Roman', serif;
}

.about-title {
  font-family: 'Arial Black', 'Segoe UI', sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.about-copy {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 1.08rem;
  letter-spacing: 0.01em;
  line-height: 1.9;
}

.rotating-words {
  position: relative;
  display: inline-block;
  min-height: 4rem;
  margin-top: 0.75rem;
}

.rotating-word {
  position: absolute;
  left: 0;
  top: 0;
  font-size: clamp(1.35rem, 2.8vw, 2.5rem);
  line-height: 0.9;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'Arial Black', 'Segoe UI', sans-serif;
  color: rgba(239, 109, 63, 0.18);
  -webkit-text-stroke: 1.2px rgba(239, 109, 63, 0.8);
  text-shadow: 0 0 0 rgba(239, 109, 63, 0.2);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.9s ease, transform 0.9s ease, color 0.9s ease;
}

.rotating-word.active {
  position: relative;
  opacity: 1;
  transform: translateY(0);
  color: #ef6d3f;
  -webkit-text-stroke: 1.8px rgba(239, 109, 63, 1);
}

.video-fade {
  transition: opacity 1.5s ease-in-out;
}

.video-frame-fade {
  transition: opacity 1.5s ease-in-out;
}

.show-video,
.show-video-frame {
  opacity: 1;
}

.divider-ornament {
  animation: divider-sway 1.4s ease-in-out infinite alternate;
  transform-origin: center;
}

@keyframes divider-sway {
  0% {
    transform: translateX(-14px) scaleY(0.9);
  }
  100% {
    transform: translateX(14px) scaleY(1.12);
  }
}
</style>
