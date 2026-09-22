<template>
  <section class="about-me-page">
    <div class="container">
      <h1>{{ t('aboutPageTitle') }}</h1>

      <p>
        {{ t('aboutPageP1') }}
      </p>

      <p>
        {{ t('aboutPageP2') }}
      </p>

      <p>
        {{ t('aboutPageP3') }}
      </p>

      <p>
        {{ t('aboutPageP4') }}
      </p>

      <p>
        {{ t('aboutPageP5') }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useLanguage } from '~/composables/useLanguage'

const { t } = useLanguage()
</script>

<style scoped>
.about-me-page {
  min-height: 100vh;
  padding: 4rem 1.5rem;
  background: #111827;
  color: #f9fafb;
}

.container {
  max-width: 900px;
  margin: 0 auto;
}

h1 {
  font-size: clamp(2.2rem, 5vw, 3.5rem);
  margin-bottom: 1.5rem;
  color: #ffffff;
}

p {
  font-size: 1.08rem;
  line-height: 1.8;
  margin-bottom: 1.2rem;
  color: #e5e7eb;
}

strong {
  color: #ffffff;
}
</style>
