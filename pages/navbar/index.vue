<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useLanguage } from '~/composables/useLanguage'

const { t, locale } = useLanguage()

const handleLanguageChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value

  if (value === 'en' || value === 'mk') {
    locale.value = value
  }
}

const isNavVisible = ref(true)
const isMenuOpen = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY

  isNavVisible.value = currentScrollY < 40 || currentScrollY < lastScrollY
  if (currentScrollY > 40) isMenuOpen.value = false
  lastScrollY = currentScrollY
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  lastScrollY = window.scrollY
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <NuxtLink
    to="/"
    class="fixed left-4 top-4 z-50 text-base font-bold uppercase tracking-[0.16em] text-[#1f2521] transition hover:text-[#d96842] sm:left-6 sm:top-6 sm:text-lg"
  >
    <span class="storyline-mark">STORYLINE</span>
    <span class="font-normal normal-case tracking-[0.04em] text-[#d96842]">studio</span>
  </NuxtLink>

  <nav
    aria-label="Main navigation"
    :class="[
      'fixed right-4 top-4 z-50 transition-all duration-500 ease-out sm:right-6 sm:top-6',
      isNavVisible ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
    ]"
  >
    <div
      :class="[
        'flex flex-col items-stretch gap-1 rounded-[20px] border p-1 shadow-[0_12px_30px_rgba(239,109,63,0.12)] backdrop-blur-md transition-all duration-500 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full',
        isNavVisible
          ? 'border-[#ef6d3f]/25 bg-[#f6eee8]/80'
          : 'border-[#ef6d3f]/40 bg-[#ef6d3f]/80'
      ]"
    >
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center self-end rounded-full text-[#1f2521] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:hidden"
        aria-label="Toggle navigation menu"
        :aria-expanded="isMenuOpen"
        @click="isMenuOpen = !isMenuOpen"
      >
        <span class="flex flex-col gap-1" aria-hidden="true">
          <span class="h-0.5 w-5 bg-current transition" :class="isMenuOpen ? 'translate-y-1.5 rotate-45' : ''"></span>
          <span class="h-0.5 w-5 bg-current transition" :class="isMenuOpen ? 'opacity-0' : ''"></span>
          <span class="h-0.5 w-5 bg-current transition" :class="isMenuOpen ? '-translate-y-1.5 -rotate-45' : ''"></span>
        </span>
      </button>

      <div :class="[isMenuOpen ? 'flex' : 'hidden', 'flex-col gap-1 sm:flex sm:flex-row sm:items-center sm:gap-2']">
        <a href="#about" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f2521] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(31,37,33,0.85)]" @click="closeMenu">
          {{ t('navAbout') }}
        </a>
        <NuxtLink to="/#services" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2a2f2d] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(42,47,45,0.7)]" @click="closeMenu">
          {{ t('navServices') }}
        </NuxtLink>
        <NuxtLink to="/#projects" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2a2f2d] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(42,47,45,0.7)]" @click="closeMenu">
          {{ t('navProjects') }}
        </NuxtLink>
        <a href="#contact" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2a2f2d] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(42,47,45,0.7)]" @click="closeMenu">
          {{ t('navContact') }}
        </a>
      </div>

      <label class="sr-only" for="language-select">Language</label>
      <select
        id="language-select"
        :value="locale"
        @change="handleLanguageChange"
        class="h-9 appearance-none rounded-full border border-[#1f2521]/15 bg-[#f8f4ef] px-3 pr-8 text-[10px] font-bold uppercase tracking-[0.18em] text-[#1f2521] transition hover:border-[#d96842] hover:text-[#d96842] focus:outline-none"
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="mk">MK</option>
      </select>
    </div>
  </nav>
</template>

<style scoped>
.storyline-mark {
  display: inline-block;
  font-size: 1.12em;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px #1f2521;
}
</style>

