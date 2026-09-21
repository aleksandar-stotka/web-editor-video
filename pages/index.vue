<template>
  <div class="min-h-screen bg-[#f1f0e9] text-[#1f2521]">
    <NavbarPage />

    <main class="mx-auto max-w-4xl px-6 pb-24 pt-20 sm:px-8 lg:px-12">
     

      <section class="flex min-h-[32vh] items-end pb-16">
        <div class="max-w-3xl">
          <p class="text-sm uppercase tracking-[0.18em] text-[#70786f]">Editor / Visual Storyteller</p>
          <h1 class="mt-4 text-4xl font-light leading-[0.95] tracking-[-0.04em] text-[#1f2521] sm:text-5xl lg:text-6xl">
            I turn footage into stories.
          </h1>
        </div>
      </section>

      <section id="about" class="pb-16 pt-12">
        <p class="text-base leading-8 text-[#1f2521]/80 sm:text-lg">
          Editing, for me, is more than cutting clips together. It's about finding the rhythm of a story — knowing when to move quickly, when to slow down, and when to let a moment breathe.
        </p>

        <p class="mt-6 text-base leading-8 text-[#1f2521]/80 sm:text-lg">
          My work includes short documentaries, educational films, music videos, and advertisements. Every project gives me a different story to understand and a different visual language to explore.
        </p>

        <p class="mt-6 text-base leading-8 text-[#1f2521]/80 sm:text-lg">
          I'm always looking for ways to make a video feel more natural, engaging, and memorable.
        </p>
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
              <div class="grid gap-4 sm:grid-cols-2">
                <label class="block text-sm text-[#70786f] sm:col-span-1">
                  <span class="mb-2 block">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-4 py-3 text-[#1f2521] placeholder:text-[#70786f]/70 focus:border-[#d96842] focus:outline-none"
                  />
                </label>

                <label class="block text-sm text-[#70786f] sm:col-span-1">
                  <span class="mb-2 block">Email</span>
                  <input
                    type="email"
                    placeholder="Your email"
                    class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-4 py-3 text-[#1f2521] placeholder:text-[#70786f]/70 focus:border-[#d96842] focus:outline-none"
                  />
                </label>

                <label class="block text-sm text-[#70786f] sm:col-span-2">
                  <span class="mb-2 block">Project</span>
                  <textarea
                    rows="4"
                    placeholder="Tell me about your idea"
                    class="w-full resize-none rounded-[20px] border border-[#1f2521]/15 bg-white/70 px-4 py-3 text-[#1f2521] placeholder:text-[#70786f]/70 focus:border-[#d96842] focus:outline-none"
                  />
                </label>
              </div>

              <button
                type="submit"
                class="mt-5 inline-flex items-center justify-center rounded-full border border-[#1f2521]/15 bg-[#1f2521] px-5 py-3 text-sm font-medium text-[#f1f0e9] transition hover:bg-[#1f2521]/90"
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
import { onMounted } from 'vue'
import NavbarPage from './navbar/index.vue'

onMounted(() => {
  const frame = document.querySelector('.video-frame-fade') as HTMLElement | null
  const video = document.querySelector('.video-fade') as HTMLVideoElement | null

  if (!frame) return

  setTimeout(() => {
    frame.classList.add('show-video-frame')
    if (video) video.classList.add('show-video')
  }, 1000)
})
</script>

<style scoped>
:global(html) {
  scroll-behavior: smooth;
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
