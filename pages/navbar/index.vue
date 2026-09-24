<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'

const translations = {
  en: {
    navAbout: 'About',
    navServices: 'Services',
    navProjects: 'Projects',
    navContact: 'Contact'
  },
  mk: {
    navAbout: 'За нас',
    navServices: 'Услуги',
    navProjects: 'Проекти',
    navContact: 'Контакт'
  }
} as const

const useLanguage = () => {
  const locale = ref<'en' | 'mk'>('en')
  const t = (key: keyof (typeof translations)['en']) => translations[locale.value][key]

  return { t, locale }
}

const { t, locale } = useLanguage()

const handleLanguageChange = (event: Event) => {
  const value = (event.target as HTMLSelectElement).value

  if (value === 'en' || value === 'mk') {
    locale.value = value
  }
}

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const handleScroll = () => {
  const currentScrollY = window.scrollY

  isScrolled.value = currentScrollY > 40
  if (currentScrollY > 40) isMenuOpen.value = false
}

function closeMenu() {
  isMenuOpen.value = false
}

onMounted(() => {
  isScrolled.value = window.scrollY > 40
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
      'fixed right-4 top-4 z-50 transition-colors duration-500 sm:right-6 sm:top-6',
      isScrolled ? 'text-[#d96842]' : 'text-[#1f2521]'
    ]"
  >
    <div
      :class="[
        'flex items-stretch gap-1 border p-1 shadow-[0_12px_30px_rgba(239,109,63,0.12)] transition-all duration-500',
        isScrolled
          ? 'flex-col rounded-[20px] border-transparent bg-transparent shadow-none'
          : 'flex-col rounded-[20px] border-[#ef6d3f]/25 bg-[#f6eee8]/80 sm:flex-row sm:items-center sm:gap-2 sm:rounded-full'
      ]"
    >
      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center self-end rounded-full transition hover:text-[#ef6d3f] sm:hidden"
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

      <div
        :class="[
          isMenuOpen ? 'flex' : 'hidden',
          'flex-col gap-1 sm:flex sm:items-center sm:gap-2',
          isScrolled ? 'sm:items-stretch' : 'sm:flex-row'
        ]"
      >
        <a href="#about" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:text-[#ef6d3f] sm:text-sm" @click="closeMenu">
          {{ t('navAbout') }}
        </a>
        <NuxtLink to="/#services" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:text-[#ef6d3f] sm:text-sm" @click="closeMenu">
          {{ t('navServices') }}
        </NuxtLink>
        <NuxtLink to="/#projects" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:text-[#ef6d3f] sm:text-sm" @click="closeMenu">
          {{ t('navProjects') }}
        </NuxtLink>
        <a href="#contact" class="rounded-full px-2 py-1 text-center text-[11px] font-semibold uppercase tracking-[0.18em] transition hover:text-[#ef6d3f] sm:text-sm" @click="closeMenu">
          {{ t('navContact') }}
        </a>
      </div>

      <label class="sr-only" for="language-select">Language</label>
      <select
        id="language-select"
        :value="locale"
        @change="handleLanguageChange"
        :class="[
          'h-9 appearance-none rounded-full border border-current px-3 pr-8 text-[10px] font-bold uppercase tracking-[0.18em] transition hover:text-[#ef6d3f] focus:outline-none',
          isScrolled ? 'bg-transparent' : 'bg-[#f8f4ef]'
        ]"
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

