<template>
  <section id="services" class="services-section pb-16 pt-8">
    <div class="rounded-[30px] border border-[#1f2521]/10 bg-[#f0eee9] p-6 sm:p-8">
      <div class="mb-6">
        <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">{{ t('servicesLabel') }}</p>
        <h2 class="mt-2 text-3xl font-light tracking-[-0.04em] text-[#d96842] sm:text-4xl">{{ t('servicesTitle') }}</h2>
      </div>

      <div class="grid gap-5 md:grid-cols-3">
        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
          <h3 class="text-2xl font-bold">{{ t('shortForm') }}</h3>
          <p class="mt-2 text-base text-[#f1f0e9]/70">{{ t('shortFormDesc') }}</p>
          <div class="mt-5 text-4xl font-black text-[#d96842]">{{ t('shortFormPrice') }}</div>
          <ul class="mt-4 flex-1 space-y-2 text-base text-[#f1f0e9]/75">
            <li>✓ {{ t('shortFormFeature1') }}</li>
            <li>✓ {{ t('shortFormFeature2') }}</li>
            <li>✓ {{ t('shortFormFeature3') }}</li>
            <li>✓ {{ t('shortFormFeature4') }}</li>
          </ul>
          <a
            href="/?service=Short-Form#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            {{ t('choosePackage') }}
          </a>
        </div>

        <div class="flex min-w-0 flex-col rounded-[24px] border-2 border-[#d96842] bg-[#2a2f2d] p-5 text-[#f1f0e9] shadow-lg shadow-[#d96842]/10">
          <span class="inline-block rounded-full border border-[#d96842] px-3 py-1.5 text-sm font-bold uppercase tracking-[0.12em] text-[#d96842]">{{ t('popular') }}</span>
          <h3 class="mt-3 text-xl font-bold">{{ t('youtube') }}</h3>
          <p class="mt-2 text-sm text-[#f1f0e9]/70">{{ t('youtubeDesc') }}</p>
          <div class="mt-5 text-3xl font-black text-[#d96842]">{{ t('youtubePrice') }}</div>
          <ul class="mt-4 flex-1 space-y-2 text-sm text-[#f1f0e9]/75">
            <li>✓ {{ t('youtubeFeature1') }}</li>
            <li>✓ {{ t('youtubeFeature2') }}</li>
            <li>✓ {{ t('youtubeFeature3') }}</li>
            <li>✓ {{ t('youtubeFeature4') }}</li>
          </ul>
          <a
            href="/?service=YouTube%20%26%20Corporate#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            {{ t('choosePackage') }}
          </a>
        </div>

        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
          <h3 class="text-2xl font-bold">{{ t('custom') }}</h3>
          <p class="mt-2 text-base text-[#f1f0e9]/70">{{ t('customDesc') }}</p>
          <div class="mt-5 text-4xl font-black text-[#d96842]">{{ t('customPrice') }}</div>
          <ul class="mt-4 flex-1 space-y-2 text-base text-[#f1f0e9]/75">
            <li>✓ {{ t('customFeature1') }}</li>
            <li>✓ {{ t('customFeature2') }}</li>
            <li>✓ {{ t('customFeature3') }}</li>
            <li>✓ {{ t('customFeature4') }}</li>
          </ul>
          <a
            href="/?service=Documentary%20%26%20Custom#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
          >
            {{ t('choosePackage') }}
          </a>
        </div>
      </div>

      <div class="mt-5 grid gap-5 md:grid-cols-1">
        <div class="flex min-w-0 flex-col rounded-[24px] border border-[#1f2521]/10 bg-[#2a2f2d] p-5 text-[#f1f0e9]">
          <h3 class="text-2xl font-bold">{{ t('myMaterials') }}</h3>
          <p class="mt-2 text-base text-[#f1f0e9]/70">{{ t('myMaterialsDesc') }}</p>
          <div class="mt-5 text-4xl font-black text-[#d96842]">{{ t('myMaterialsPrice') }}</div>
          <ul class="mt-4 flex-1 space-y-2 text-base text-[#f1f0e9]/75">
            <li>✓ {{ t('myMaterialsFeature1') }}</li>
            <li>✓ {{ t('myMaterialsFeature2') }}</li>
            <li>✓ {{ t('myMaterialsFeature3') }}</li>
            <li>✓ {{ t('myMaterialsFeature4') }}</li>
            <li>✓ {{ t('myMaterialsFeature5') }}</li>
          </ul>
          <a
            href="/?service=My%20Materials%20Production#contact"
            class="mt-6 inline-flex w-full items-center justify-center rounded-full border border-[#d96842] px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#d96842] transition hover:bg-[#d96842] hover:text-[#f1f0e9]"
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
