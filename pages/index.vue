<template>
  <div class="min-h-screen bg-slate-950 text-white">
    <NavbarPage />

    <main class="mx-auto max-w-4xl px-6 pb-24 pt-20 sm:px-8 lg:px-12">
      <section class="flex min-h-screen items-end pb-16">
        <div class="max-w-3xl">
          <p class="text-sm uppercase tracking-[0.18em] text-white/70">Editor / Visual Storyteller</p>
          <h1 class="mt-4 text-4xl font-light leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
            I turn footage into stories.
          </h1>
        </div>
      </section>

      <section id="about" class="pb-20 pt-12">
        <p class="text-base leading-8 text-white/80 sm:text-lg">
          Editing, for me, is more than cutting clips together. It's about finding the rhythm of a story — knowing when to move quickly, when to slow down, and when to let a moment breathe.
        </p>

        <p class="mt-6 text-base leading-8 text-white/80 sm:text-lg">
          My work includes short documentaries, educational films, music videos, and advertisements. Every project gives me a different story to understand and a different visual language to explore.
        </p>

        <p class="mt-6 text-base leading-8 text-white/80 sm:text-lg">
          I'm always looking for ways to make a video feel more natural, engaging, and memorable.
        </p>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import NavbarPage from './navbar/index.vue'
</script>
