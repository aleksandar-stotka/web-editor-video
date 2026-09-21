<template>
  <nav aria-label="Main navigation" class="fixed right-4 top-4 z-50 sm:right-6 sm:top-6">
    <div class="flex items-center justify-between gap-2 rounded-full border border-white/10 bg-slate-900/60 p-2 shadow-xl shadow-slate-900/20 backdrop-blur-md">
      <a href="#about" class="rounded-full px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10 hover:text-white sm:text-xs">
        About Me
      </a>
      <NuxtLink to="/projects" class="rounded-full px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10 hover:text-white sm:text-xs">
        Projects
      </NuxtLink>
      <a href="#contact" class="rounded-full px-3 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10 hover:text-white sm:text-xs">
        Contact
      </a>
    </div>
  </nav>
</template>

