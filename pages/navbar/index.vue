<template>
  <nav aria-label="Main navigation" class="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
    <div class="flex items-center justify-between gap-2 rounded-full p-1">
      <a href="#about" class="rounded-full px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#1f2521] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(31,37,33,0.85)]">
        About Me
      </a>
      <NuxtLink to="/#services" class="rounded-full px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2a2f2d] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(42,47,45,0.7)]">
        Services
      </NuxtLink>
      <NuxtLink to="/projects" class="rounded-full px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2a2f2d] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(42,47,45,0.7)]">
        Selected Work
      </NuxtLink>
      <a href="#contact" class="rounded-full px-3 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2a2f2d] transition hover:bg-[#ef6d3f]/90 hover:text-white sm:text-sm [-webkit-text-stroke:0.8px_rgba(42,47,45,0.7)]">
        Contact
      </a>
    </div>
  </nav>
</template>

