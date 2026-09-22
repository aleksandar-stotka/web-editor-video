<template>
  <section id="services" class="services-section pb-16 pt-8">
    <div class="rounded-[30px] border border-[#1f2521]/10 bg-[#f0eee9] p-6 sm:p-8">
      <div class="mb-6">
        <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">Services</p>
        <h2 class="mt-2 text-3xl font-light tracking-[-0.04em] text-[#d96842] sm:text-4xl">Video editing packages</h2>
      </div>

      <div class="grid gap-5 md:grid-cols-3">
        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
          <h3 class="text-2xl font-bold">Short-Form</h3>
          <p class="mt-2 text-base text-[#f1f0e9]/70">Fast, punchy edits built for Reels, Shorts, and social-first content.</p>
          <div class="mt-5 text-4xl font-black text-[#d96842]">From $35</div>
          <ul class="mt-4 flex-1 space-y-2 text-base text-[#f1f0e9]/75">
            <li>✓ Dynamic cuts & transitions</li>
            <li>✓ Subtitles & sound design</li>
            <li>✓ Color correction & grading</li>
            <li>✓ Social-ready vertical exports</li>
          </ul>
          <a
            href="/?service=Short-Form#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            Choose package
          </a>
        </div>

        <div class="flex min-w-0 flex-col rounded-[24px] border-2 border-[#d96842] bg-[#2a2f2d] p-5 text-[#f1f0e9] shadow-lg shadow-[#d96842]/10">
          <span class="inline-block rounded-full border border-[#d96842] px-3 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-[#d96842]">POPULAR</span>
          <h3 class="mt-3 text-xl font-bold">YouTube & Corporate</h3>
          <p class="mt-2 text-sm text-[#f1f0e9]/70">Brand videos, interviews, and polished long-form edits for digital channels.</p>
          <div class="mt-5 text-3xl font-black text-[#d96842]">From $100</div>
          <ul class="mt-4 flex-1 space-y-2 text-sm text-[#f1f0e9]/75">
            <li>✓ Audio cleanup & balancing</li>
            <li>✓ Motion graphics & lower thirds</li>
            <li>✓ Cinematic color grading</li>
            <li>✓ B-roll integration & pacing</li>
          </ul>
          <a
            href="/?service=YouTube%20%26%20Corporate#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            Choose package
          </a>
        </div>

        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
          <h3 class="text-2xl font-bold">Custom Production</h3>
          <p class="mt-2 text-base text-[#f1f0e9]/70">Tailored storytelling for music videos, premium branded work, and documentary edits.</p>
          <div class="mt-5 text-4xl font-black text-[#d96842]">Custom</div>
          <ul class="mt-4 flex-1 space-y-2 text-base text-[#f1f0e9]/75">
            <li>✓ Music videos &amp; creative spots</li>
            <li>✓ Rhythm &amp; narrative pacing</li>
            <li>✓ Advanced motion design &amp; VFX pass</li>
            <li>✓ Cinematic color grading &amp; audio sync</li>
          </ul>
          <a
            href="/?service=Documentary%20%26%20Custom#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            Choose package
          </a>
        </div>
      </div>

      <div class="mt-5 grid gap-5 md:grid-cols-1">
        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
          <h3 class="text-2xl font-bold">My Materials Production</h3>
          <p class="mt-2 text-base text-[#f1f0e9]/70">Music videos, advertisements, and short documentaries built entirely from my materials and stock assets.</p>
          <div class="mt-5 text-4xl font-black text-[#d96842]">From $120</div>
          <ul class="mt-4 flex-1 space-y-2 text-base text-[#f1f0e9]/75">
            <li>✓ Created using my stock footage, overlays &amp; visual assets</li>
            <li>✓ Music videos, promo ads &amp; short documentary edits</li>
            <li>✓ Custom motion graphics, text &amp; sound design</li>
            <li>✓ Full audio mixing &amp; cinematic color grading</li>
            <li>✓ Ready-to-publish high-resolution export</li>
          </ul>
          <a
            href="/?service=Custom%20Production#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            Choose package
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  font-family: var(--font-body);
}

.services-section h2,
.services-section h3,
.services-section p,
.services-section span,
.services-section div,
.services-section li,
.services-section a {
  font-family: var(--font-body);
}
</style>
