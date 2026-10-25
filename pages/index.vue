<template>
  <div id="top" class="min-h-screen bg-[#141414] text-[#f5f5f1]">
    <NavbarPage />

    <button
      v-show="showBackToTop"
      type="button"
      aria-label="Back to top"
      @click="scrollToTop"
      class="fixed bottom-8 left-1/2 z-50 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/25 bg-[#222222] text-2xl font-light text-[#f5f5f1] shadow-lg shadow-black/30 transition hover:border-[#e50914] hover:text-[#e50914]"
    >
      ↑
    </button>

    <main class="mx-auto max-w-4xl px-6 pb-24 pt-20 sm:px-8 lg:px-12">
      <section class="scroll-reveal flex min-h-[32vh] items-end pb-16">
        <div class="max-w-3xl">
          <p class="text-sm uppercase tracking-[0.18em] text-[#b3b3b3]">{{ t('heroTag') }}</p>
          <h1 class="mt-4 text-3xl font-light leading-[0.95] tracking-[-0.04em] text-[#f5f5f1] sm:text-4xl lg:text-5xl">
            {{ t('heroTitle') }}
          </h1>

          <div class="rotating-words mt-5" aria-live="polite">
            <span v-for="(word, index) in rotatingWords" :key="word" :class="['rotating-word', { active: activeWordIndex === index }]">
              {{ word }}
            </span>
          </div>
        </div>
      </section>

      <div class="scroll-reveal my-8 flex items-center justify-center gap-4">
        <div class="h-px w-24 bg-white/60"></div>
        <div class="divider-ornament h-12 w-[4px] bg-[#e50914] opacity-100"></div>
        <div class="h-px w-24 bg-white/60"></div>
      </div>

      <section id="about" class="about-section scroll-reveal pb-16 pt-12">
        <h2 class="scroll-scale-title about-title mb-6 text-3xl font-light tracking-[-0.04em] text-[#e50914] sm:text-4xl">{{ t('aboutTitle') }}</h2>

        <p class="about-copy text-base leading-8 text-[#f5f5f1]/80 sm:text-lg">
          {{ t('aboutP1') }}
        </p>

        <p class="about-copy mt-6 text-base leading-8 text-[#f5f5f1]/80 sm:text-lg">
          {{ t('aboutP2Before') }}<strong>{{ t('aboutP2Tools') }}</strong>{{ t('aboutP2After') }}
        </p>

        <p class="about-copy mt-6 text-base leading-8 text-[#f5f5f1]/80 sm:text-lg">
          {{ t('aboutP3Before') }}<strong>{{ t('aboutP3Tools') }}</strong>{{ t('aboutP3After') }}
        </p>

        <p class="about-copy mt-6 text-base leading-8 text-[#f5f5f1]/80 sm:text-lg">
          {{ t('aboutP4') }}
        </p>

        <p class="about-copy mt-6 text-base leading-8 text-[#f5f5f1]/80 sm:text-lg">
          {{ t('aboutP5') }}
        </p>
      </section>

      <ProjectSlider />

      <ServicesSection />

      <ContactPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'
import ContactPage from './contact/index.vue'
import NavbarPage from './navbar/index.vue'
import ProjectSlider from '../components/ProjectSlider.vue'
import ServicesSection from '../components/ServicesSection.vue'

const { t } = useLanguage()
const rotatingWords = computed(() => t('heroWords') as string[])

const activeWordIndex = ref(0)
const showBackToTop = ref(false)
let wordTimer: ReturnType<typeof setInterval> | null = null
let scrollRevealObserver: IntersectionObserver | null = null
let scrollFrame: number | null = null

function updateScrollEffects() {
  const scrollY = window.scrollY
  showBackToTop.value = scrollY > 200

  const viewportCenter = window.innerHeight / 2
  const scaleRange = window.innerHeight * 0.75

  document.querySelectorAll<HTMLElement>('.scroll-scale-title').forEach((title) => {
    const bounds = title.getBoundingClientRect()
    const titleCenter = bounds.top + bounds.height / 2
    const distanceFromCenter = Math.abs(titleCenter - viewportCenter)
    const progress = Math.max(0, 1 - distanceFromCenter / scaleRange)
    title.style.setProperty('--scroll-title-scale', `${0.92 + progress * 0.2}`)
  })
}

function handleScroll() {
  if (scrollFrame !== null) return

  scrollFrame = window.requestAnimationFrame(() => {
    scrollFrame = null
    updateScrollEffects()
  })
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
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

  updateScrollEffects()
  window.addEventListener('scroll', handleScroll, { passive: true })

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('scroll-reveal-ready')
    scrollRevealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-reveal-visible')
          observer.unobserve(entry.target)
        }
      })
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    })

    document.querySelectorAll('.scroll-reveal').forEach((element) => {
      scrollRevealObserver?.observe(element)
    })
  }

  wordTimer = setInterval(() => {
    activeWordIndex.value = (activeWordIndex.value + 1) % rotatingWords.value.length
  }, 1800)
})

onBeforeUnmount(() => {
  if (wordTimer) {
    clearInterval(wordTimer)
  }

  scrollRevealObserver?.disconnect()
  document.documentElement.classList.remove('scroll-reveal-ready')
  window.removeEventListener('scroll', handleScroll)
  if (scrollFrame !== null) {
    window.cancelAnimationFrame(scrollFrame)
  }
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
  color: rgba(229, 9, 20, 0.18);
  -webkit-text-stroke: 1.2px rgba(229, 9, 20, 0.8);
  text-shadow: 0 0 0 rgba(229, 9, 20, 0.2);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.9s ease, transform 0.9s ease, color 0.9s ease;
}

.rotating-word.active {
  position: relative;
  opacity: 1;
  transform: translateY(0);
  color: #e50914;
  -webkit-text-stroke: 1.8px rgba(229, 9, 20, 1);
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
