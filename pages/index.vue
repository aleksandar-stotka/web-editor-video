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
          <h1 class="mt-4 text-4xl font-light leading-[0.95] tracking-[-0.04em] text-[#1f2521] sm:text-5xl lg:text-6xl">
            I turn footage into stories.
          </h1>

          <div class="rotating-words mt-5" aria-live="polite">
            <span v-for="(word, index) in rotatingWords" :key="word" :class="['rotating-word', { active: activeWordIndex === index }]">
              {{ word }}
            </span>
          </div>
        </div>
      </section>

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

      <section id="projects" class="pb-16 pt-8">
        <div class="mb-6 flex items-end justify-between gap-4">
          <div>
            <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">Selected work</p>
            <h2 class="mt-2 text-3xl font-light tracking-[-0.04em] text-[#d96842] sm:text-4xl">SELECTED WORK</h2>
          </div>
          <NuxtLink
            to="/projects"
            class="text-xs font-semibold uppercase tracking-[0.14em] text-[#70786f] transition hover:text-[#d96842]"
          >
            View all
          </NuxtLink>
        </div>

        <div class="rounded-[24px] border border-[#1f2521]/10 bg-white/35 p-4 sm:p-6">
          <div class="mb-4 flex items-center justify-between gap-4 border-b border-[#1f2521]/10 pb-3">
            <p class="text-[0.58rem] font-semibold uppercase tracking-[0.14em] text-[#70786f]">
              {{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(projectVideos.length).padStart(2, '0') }}
            </p>

            <div class="flex gap-2">
              <button
                type="button"
                aria-label="Previous project"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2521] bg-transparent text-lg text-[#1f2521] transition hover:bg-[#d96842] hover:text-white"
                @click="showPrevious"
              >
                &#8592;
              </button>
              <button
                type="button"
                aria-label="Next project"
                class="flex h-10 w-10 items-center justify-center rounded-full border border-[#1f2521] bg-transparent text-lg text-[#1f2521] transition hover:bg-[#d96842] hover:text-white"
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

      <section id="services" class="pb-16 pt-8">
        <div class="rounded-[30px] border border-[#1f2521]/10 bg-[#f0eee9] p-6 sm:p-8">
          <div class="mb-6">
            <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">Services</p>
            <h2 class="mt-2 text-3xl font-light tracking-[-0.04em] text-[#1f2521] sm:text-4xl">Video editing packages</h2>
          </div>

          <div class="grid gap-5 md:grid-cols-3">
            <div class="rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
              <h3 class="text-xl font-bold">Short-Form</h3>
              <p class="mt-2 text-sm text-[#f1f0e9]/70">Fast, punchy edits built for Reels, Shorts and social-first content.</p>
              <div class="mt-5 text-3xl font-black text-[#d96842]">From $35</div>
              <ul class="mt-4 space-y-2 text-sm text-[#f1f0e9]/75">
                <li>✓ Dynamic cuts</li>
                <li>✓ Captions & sound</li>
                <li>✓ Social-ready exports</li>
              </ul>
            </div>

            <div class="rounded-[24px] border-2 border-[#d96842] bg-[#2a2f2d] p-5 text-[#f1f0e9] shadow-lg shadow-[#d96842]/10">
              <span class="inline-block rounded-full bg-[#d96842] px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.12em] text-[#f1f0e9]">Popular</span>
              <h3 class="mt-3 text-xl font-bold">YouTube & Corporate</h3>
              <p class="mt-2 text-sm text-[#f1f0e9]/70">Brand videos, interviews and polished long-form edits for digital channels.</p>
              <div class="mt-5 text-3xl font-black text-[#d96842]">From $150</div>
              <ul class="mt-4 space-y-2 text-sm text-[#f1f0e9]/75">
                <li>✓ Audio cleanup</li>
                <li>✓ Graphic elements</li>
                <li>✓ Color grading</li>
              </ul>
            </div>

            <div class="rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
              <h3 class="text-xl font-bold">Documentary & Custom</h3>
              <p class="mt-2 text-sm text-[#f1f0e9]/70">Tailored storytelling for premium branded work and cinematic documentary-style edits.</p>
              <div class="mt-5 text-3xl font-black text-[#d96842]">Custom</div>
              <ul class="mt-4 space-y-2 text-sm text-[#f1f0e9]/75">
                <li>✓ Narrative structure</li>
                <li>✓ Motion design</li>
                <li>✓ Full VFX pass</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="pb-10 pt-8">
        <div class="rounded-[24px] border border-[#1f2521]/10 bg-white/35 p-6 sm:p-8">
          <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">Contact</p>

          <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 class="text-2xl font-light tracking-[-0.04em] text-[#1f2521] sm:text-3xl">
                Let’s build something worth watching.
              </h2>
              <a
                href="mailto:aangelevski6@gmail.com"
                class="mt-4 inline-block text-base text-[#1f2521]/80 underline decoration-[#1f2521]/30 underline-offset-4 transition hover:text-[#1f2521]"
              >
                aangelevski6@gmail.com
              </a>
            </div>

            <form class="w-full max-w-xl">
              <div class="grid gap-5 sm:grid-cols-2">
                <label class="block text-sm text-[#70786f] sm:col-span-1">
                  <span class="mb-2 block text-base">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#70786f]/70 focus:border-[#d96842] focus:outline-none"
                  />
                </label>

                <label class="block text-sm text-[#70786f] sm:col-span-1">
                  <span class="mb-2 block text-base">Email</span>
                  <input
                    type="email"
                    placeholder="Your email"
                    class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#70786f]/70 focus:border-[#d96842] focus:outline-none"
                  />
                </label>

                <label class="block text-sm text-[#70786f] sm:col-span-2">
                  <span class="mb-2 block text-base">Project</span>
                  <textarea
                    rows="5"
                    placeholder="Tell me about your idea"
                    class="w-full resize-none rounded-[22px] border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#70786f]/70 focus:border-[#d96842] focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                class="mt-6 inline-flex items-center justify-center rounded-full border border-[#1f2521]/15 bg-[#1f2521] px-6 py-3.5 text-base font-medium text-[#f1f0e9] transition hover:bg-[#1f2521]/90"
              >
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import NavbarPage from './navbar/index.vue'

const rotatingWords = [
  'ADVERTISING',
  'MUSIC VIDEOS',
  'DOCUMENTARIES',
  'SOCIAL MEDIA',
  'COLOR GRADING',
]

const projectVideos = [
  'https://youtu.be/ZLKsOn235u8?si=KRhibq1DzTlttI5I',
  'https://youtu.be/ObcWjd3eyps?si=y0IIzo9sMdpvmV8a',
  'https://youtu.be/rPwZb_nr0P4?si=nzVQKnHr3_hDNAht',
  'https://youtu.be/8cfWt3t8o8s?si=sSPFiXxv7l_SO_LQ',
  
  
  'https://youtu.be/JbL_nv5gwXQ?si=kmGIF2wc0t2kJaZN',
  'https://youtu.be/1L0Eb1vnXsQ?si=Ye3t2ZWhBJmhUpne',
  'https://youtu.be/ro_Da05e7e0?si=-Es5YTCI7_cbAqZ7',
  'https://youtu.be/5G-5AverTiQ?si=xatz8qzQ769o15E5',
  'https://youtu.be/Kga4wZup_vc?si=LgmUKK3sHAk11spc',
  'https://youtu.be/NJCpue0xDJ4?si=CEGZRHRP15m4Ytx5',
  'https://youtu.be/vOaGkt87UHY?si=MayaeP7DEahlP0ru',
  'https://youtu.be/p3kUSdxnUTs?si=kyubSVwB1BDYA-CO',
  'https://youtu.be/4BC-v0qtKkM?si=MgC-4ZhRu1glQ0up',
]

const activeIndex = ref(0)
const activeWordIndex = ref(0)
const showBackToTop = ref(false)
const rawYoutubeUrl = computed(() => projectVideos[activeIndex.value])
let wordTimer: ReturnType<typeof setInterval> | null = null

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function updateBackToTopVisibility() {
  showBackToTop.value = window.scrollY > 200
}

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
  font-size: clamp(2rem, 5vw, 4rem);
  line-height: 0.9;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(239, 109, 63, 0.18);
  -webkit-text-stroke: 1.5px rgba(239, 109, 63, 0.9);
  text-shadow: 0 0 0 rgba(239, 109, 63, 0.25);
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.9s ease, transform 0.9s ease, color 0.9s ease;
}

.rotating-word.active {
  position: relative;
  opacity: 1;
  transform: translateY(0);
  color: #ef6d3f;
  -webkit-text-stroke: 2px rgba(239, 109, 63, 1);
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
</style>
