<template>
  <section id="services" class="services-section pb-16 pt-8">
    <div class="rounded-[30px] border border-[#1f2521]/10 bg-[#f0eee9] p-6 sm:p-8">
      <div class="mb-6">
        <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">{{ t('servicesLabel') }}</p>
        <h2 class="mt-2 text-3xl font-light tracking-[-0.04em] text-[#d96842] sm:text-4xl">{{ t('servicesTitle') }}</h2>
      </div>

      <div class="grid gap-5 md:grid-cols-3">
        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-3 text-[#f1f0e9]">
          <h3 class="text-lg font-bold">{{ t('shortForm') }}</h3>
          <p class="mt-1 text-sm text-[#f1f0e9]/70">{{ t('shortFormDesc') }}</p>
          <div class="mt-2 text-2xl font-black text-[#d96842]">{{ t('shortFormPrice') }}</div>
          <ul class="mt-2 flex-1 space-y-0.5 text-xs text-[#f1f0e9]/75">
            <li>✓ {{ t('shortFormFeature5') }}</li>
            <li>✓ {{ t('shortFormFeature6') }}</li>
            <li>✓ {{ t('shortFormFeature1') }}</li>
            <li>✓ {{ t('shortFormFeature2') }}</li>
            <li>✓ {{ t('shortFormFeature3') }}</li>
            <li>✓ {{ t('shortFormFeature4') }}</li>
            <li>✓ {{ t('shortFormFeature7') }}</li>
          </ul>
          <a
            href="/?service=Short-Form#contact"
            class="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            {{ t('choosePackage') }}
          </a>
        </div>

        <div class="flex min-w-0 flex-col rounded-[24px] border-2 border-[#d96842] bg-[#2a2f2d] p-3 text-[#f1f0e9] shadow-lg shadow-[#d96842]/10">
          <span class="inline-block rounded-full border border-[#d96842] px-3 py-0.5 text-xs font-bold uppercase tracking-[0.12em] text-[#d96842]">{{ t('popular') }}</span>
          <h3 class="mt-2 text-lg font-bold">{{ t('youtube') }}</h3>
          <p class="mt-1 text-sm text-[#f1f0e9]/70">{{ t('youtubeDesc') }}</p>
          <div class="mt-2 text-2xl font-black text-[#d96842]">{{ t('youtubePrice') }}</div>
          <ul class="mt-2 flex-1 space-y-0.5 text-xs text-[#f1f0e9]/75">
            <li>✓ {{ t('youtubeFeature1') }}</li>
            <li>✓ {{ t('youtubeFeature2') }}</li>
            <li>✓ {{ t('youtubeFeature3') }}</li>
            <li>✓ {{ t('youtubeFeature4') }}</li>
            <li>✓ {{ t('youtubeFeature5') }}</li>
            <li>✓ {{ t('youtubeFeature6') }}</li>
            <li>✓ {{ t('youtubeFeature7') }}</li>
            <li>✓ {{ t('youtubeFeature8') }}</li>
          </ul>
          <a
            href="/?service=YouTube%20%26%20Corporate#contact"
            class="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            {{ t('choosePackage') }}
          </a>
        </div>

        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-3 text-[#f1f0e9]">
          <h3 class="text-lg font-bold">{{ t('custom') }}</h3>
          <p class="mt-1 text-sm text-[#f1f0e9]/70">{{ t('customDesc') }}</p>
          <div class="mt-2 text-2xl font-black text-[#d96842]">{{ t('customPrice') }}</div>
          <ul class="mt-2 flex-1 space-y-0.5 text-xs text-[#f1f0e9]/75">
            <li>✓ {{ t('customFeature1') }}</li>
            <li>✓ {{ t('customFeature2') }}</li>
            <li>✓ {{ t('customFeature3') }}</li>
            <li>✓ {{ t('customFeature4') }}</li>
            <li>✓ {{ t('customFeature5') }}</li>
            <li>✓ {{ t('customFeature6') }}</li>
            <li>✓ {{ t('customFeature7') }}</li>
          </ul>
          <a
            href="/?service=Documentary%20%26%20Custom#contact"
            class="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            {{ t('choosePackage') }}
          </a>
        </div>
      </div>

      <div class="mt-5 grid gap-5 md:grid-cols-1">
        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-3 text-[#f1f0e9]">
          <h3 class="text-lg font-bold">{{ t('myMaterials') }}</h3>
          <p class="mt-1 text-sm text-[#f1f0e9]/70">{{ t('myMaterialsDesc') }}</p>
          <div class="mt-2 text-2xl font-black text-[#d96842]">{{ t('myMaterialsPrice') }}</div>
          <ul class="mt-2 flex-1 space-y-0.5 text-xs text-[#f1f0e9]/75">
            <li>✓ {{ t('myMaterialsFeature1') }}</li>
            <li>✓ {{ t('myMaterialsFeature2') }}</li>
            <li>✓ {{ t('myMaterialsFeature3') }}</li>
            <li>✓ {{ t('myMaterialsFeature4') }}</li>
            <li>✓ {{ t('myMaterialsFeature5') }}</li>
            <li>✓ {{ t('myMaterialsFeature6') }}</li>
            <li>✓ {{ t('myMaterialsFeature7') }}</li>
          </ul>
          <a
            href="/?service=My%20Materials%20Production#contact"
            class="mt-3 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            {{ t('choosePackage') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
</script>

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
