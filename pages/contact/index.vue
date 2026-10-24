<template>
    <section id="contact" class="scroll-reveal pb-10 pt-8">
        <div class="rounded-[24px] border border-white/10 bg-[#1c1c1c] p-6 sm:p-8">
            <p class="text-sm uppercase tracking-[0.2em] text-[#b3b3b3]">{{ t('navContact') }}</p>

            <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <h2 class="text-2xl font-light tracking-[-0.04em] text-[#f5f5f1] sm:text-3xl">
                        {{ t('contactTitle') }}
                    </h2>
                    <a
                        href="mailto:storylinecraft100@gmail.com"
                        class="mt-4 inline-block text-base text-[#f5f5f1]/80 underline decoration-white/30 underline-offset-4 transition hover:text-[#e50914]"
                    >
                        storylinecraft100@gmail.com
                    </a>
                </div>

                <form @submit.prevent="submitForm" class="w-full max-w-xl">
                    <div class="grid gap-5 sm:grid-cols-2">
                        <label class="block text-sm text-[#f5f5f1] sm:col-span-1">
                            <span class="mb-2 block text-base text-[#f5f5f1]">{{ t('contactName') }}</span>
                            <input
                                v-model="form.name"
                                type="text"
                                required
                                :placeholder="t('contactNamePlaceholder')"
                                class="w-full rounded-full border border-white/15 bg-[#222222] px-5 py-4 text-base text-[#f5f5f1] placeholder:text-[#b3b3b3] focus:border-[#e50914] focus:outline-none"
                            />
                        </label>

                        <label class="block text-sm text-[#f5f5f1] sm:col-span-1">
                            <span class="mb-2 block text-base text-[#f5f5f1]">{{ t('contactEmail') }}</span>
                            <input
                                v-model="form.email"
                                type="email"
                                required
                                :placeholder="t('contactEmailPlaceholder')"
                                class="w-full rounded-full border border-white/15 bg-[#222222] px-5 py-4 text-base text-[#f5f5f1] placeholder:text-[#b3b3b3] focus:border-[#e50914] focus:outline-none"
                            />
                        </label>

                        <label class="block text-sm text-[#f5f5f1] sm:col-span-2">
                            <span class="mb-2 block text-base text-[#f5f5f1]">{{ t('contactPackage') }}</span>
                            <select
                                v-model="form.service"
                                class="w-full appearance-none rounded-full border border-white/15 bg-[#222222] px-5 py-4 text-base text-[#f5f5f1] focus:border-[#e50914] focus:outline-none"
                            >
                                <option value="">{{ t('contactSelectDefault') }}</option>
                                <option value="Short-Form">{{ t('shortForm') }}</option>
                                <option value="YouTube & Corporate">{{ t('youtube') }}</option>
                                <option value="Documentary & Custom">{{ t('custom') }}</option>
                                <option value="My Materials Production">{{ t('myMaterials') }}</option>
                            </select>
                        </label>

                        <label class="block text-sm text-[#f5f5f1] sm:col-span-2">
                            <span class="mb-2 block text-base text-[#f5f5f1]">{{ t('contactProject') }}</span>
                            <textarea
                                v-model="form.message"
                                required
                                rows="5"
                                :placeholder="t('contactProjectPlaceholder')"
                                class="w-full resize-none rounded-[22px] border border-white/15 bg-[#222222] px-5 py-4 text-base text-[#f5f5f1] placeholder:text-[#b3b3b3] focus:border-[#e50914] focus:outline-none"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="mt-6 inline-flex items-center justify-center rounded-full border border-[#e50914] bg-[#e50914] px-6 py-3.5 text-base font-medium text-white transition hover:bg-[#b20710] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <span v-if="isSubmitting">{{ t('contactSending') }}</span>
                        <span v-else>{{ t('contactSend') }}</span>
                    </button>

                    <!-- Feedback message below the button -->
                    <p v-if="statusMessage" :class="isSuccess ? 'text-emerald-700' : 'text-red-600'" class="mt-4 text-sm font-medium">
                        {{ statusMessage }}
                    </p>
                </form>
            </div>
        </div>
    </section>

    <footer class="border-t border-white/10 bg-[#0b0b0b] px-6 py-14 sm:px-8 lg:px-12">
        <div class="mx-auto flex max-w-4xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <a
                    href="/"
                    class="inline-block text-base font-bold uppercase tracking-[0.16em] text-[#f5f5f1] transition hover:text-[#e50914] sm:text-lg"
                >
                    <span class="footer-storyline-mark">STORYLINE</span>
                    <span class="font-normal normal-case tracking-[0.04em] text-[#e50914]">studio</span>
                </a>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#e50914]">{{ t('contactAvailable') }}</p>
                <p class="mt-3 text-base text-[#f5f5f1]/70">{{ t('footerText') }}</p>
            </div>

            <div class="flex flex-col items-start gap-4 sm:items-end">
                <a
                    href="tel:+38978232088"
                    class="text-xl font-semibold tracking-[0.04em] text-[#e50914] transition hover:text-[#f5f5f1] sm:text-2xl"
                    aria-label="Call +389 78 232 088"
                >
                    +389 78 232 088
                </a>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.footer-storyline-mark {
    font-size: 1.12em;
    font-weight: 900;
    color: transparent;
    -webkit-text-stroke: 1px #f5f5f1;
}
</style>

<script setup>
import { ref, watch } from 'vue';
import { useLanguage } from '~/composables/useLanguage'

const route = useRoute()
const { t, locale } = useLanguage();

const availablePackages = [
  'Short-Form',
  'YouTube & Corporate',
  'Documentary & Custom',
  'My Materials Production'
]
const queryPackage = route.query.service

const form = ref({
  name: '',
  email: '',
  message: '',
  service: typeof queryPackage === 'string' && availablePackages.includes(queryPackage) ? queryPackage : ''
});

const isSubmitting = ref(false);
const statusMessage = ref('');
const isSuccess = ref(false);

watch(
  () => route.query.service,
  (service) => {
    if (typeof service === 'string' && availablePackages.includes(service)) {
      form.value.service = service;
    }
  },
  { immediate: true }
);

watch(
  () => form.value.service,
  (service) => {
    if (service && (!form.value.message || form.value.message.startsWith('I’m interested in the ') || form.value.message.startsWith('Сум заинтересиран за '))) {
      const prefix = locale.value === 'mk' ? 'Сум заинтересиран за ' : 'I’m interested in the ';
      form.value.message = `${prefix}${service} package.`;
    }
  },
  { immediate: true }
);

const submitForm = async () => {
  isSubmitting.value = true;
  statusMessage.value = '';

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '381fbcfc-92ac-41f7-8fdc-9db4bca45c46',
        name: form.value.name,
        email: form.value.email,
        message: form.value.message,
        service: form.value.service,
        subject: `New ${form.value.service || 'Project'} Inquiry from ${form.value.name}`
      })
    });

    const result = await response.json();

    if (result.success) {
      isSuccess.value = true;
      statusMessage.value = 'Thank you! Your message has been sent directly to my email.';
    form.value = { name: '', email: '', service: '', message: '' };
    } else {
      isSuccess.value = false;
      statusMessage.value = 'Something went wrong. Please try sending again.';
    }
  } catch (error) {
    isSuccess.value = false;
    statusMessage.value = 'Network error. Please check your internet connection.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>