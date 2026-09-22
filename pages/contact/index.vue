<template>
    <section id="contact" class="pb-10 pt-8">
        <div class="rounded-[24px] border border-[#1f2521]/10 p-6 sm:p-8">
            <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">{{ t('navContact') }}</p>

            <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <h2 class="text-2xl font-light tracking-[-0.04em] text-[#1f2521] sm:text-3xl">
                        {{ t('contactTitle') }}
                    </h2>
                    <a
                        href="mailto:aangelevski6@gmail.com"
                        class="mt-4 inline-block text-base text-[#1f2521]/80 underline decoration-[#1f2521]/30 underline-offset-4 transition hover:text-[#1f2521]"
                    >
                        aangelevski6@gmail.com
                    </a>
                </div>

                <form @submit.prevent="submitForm" class="w-full max-w-xl">
                    <div class="grid gap-5 sm:grid-cols-2">
                        <label class="block text-sm text-[#1f2521] sm:col-span-1">
                            <span class="mb-2 block text-base text-[#1f2521]">{{ t('contactName') }}</span>
                            <input
                                v-model="form.name"
                                type="text"
                                required
                                :placeholder="t('contactNamePlaceholder')"
                                class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#d96842]/70 focus:border-[#d96842] focus:outline-none"
                            />
                        </label>

                        <label class="block text-sm text-[#1f2521] sm:col-span-1">
                            <span class="mb-2 block text-base text-[#1f2521]">{{ t('contactEmail') }}</span>
                            <input
                                v-model="form.email"
                                type="email"
                                required
                                :placeholder="t('contactEmailPlaceholder')"
                                class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#d96842]/70 focus:border-[#d96842] focus:outline-none"
                            />
                        </label>

                        <label class="block text-sm text-[#1f2521] sm:col-span-2">
                            <span class="mb-2 block text-base text-[#1f2521]">{{ t('contactPackage') }}</span>
                            <select
                                v-model="form.service"
                                class="w-full appearance-none rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] focus:border-[#d96842] focus:outline-none"
                            >
                                <option disabled value="">{{ t('contactSelectDefault') }}</option>
                                <option value="Short-Form">{{ t('selectOptionShort') }}</option>
                                <option value="YouTube & Corporate">{{ t('selectOptionYoutube') }}</option>
                                <option value="Documentary & Custom">{{ t('selectOptionCustom') }}</option>
                                <option value="My Materials Production">{{ t('selectOptionMyMaterials') }}</option>
                            </select>
                        </label>

                        <label class="block text-sm text-[#1f2521] sm:col-span-2">
                            <span class="mb-2 block text-base text-[#1f2521]">{{ t('contactProject') }}</span>
                            <textarea
                                v-model="form.message"
                                required
                                rows="5"
                                :placeholder="t('contactProjectPlaceholder')"
                                class="w-full resize-none rounded-[22px] border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#d96842]/70 focus:border-[#d96842] focus:outline-none"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="mt-6 inline-flex items-center justify-center rounded-full border border-[#1f2521]/15 bg-[#1f2521] px-6 py-3.5 text-base font-medium text-[#f1f0e9] transition hover:bg-[#1f2521]/90 disabled:cursor-not-allowed disabled:opacity-50"
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

    <footer class="border-t border-[#1f2521]/15 bg-[#e8e5dc] px-6 py-14 sm:px-8 lg:px-12">
        <div class="mx-auto flex max-w-4xl flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
            <div>
                <a
                    href="/"
                    class="inline-block text-base font-bold uppercase tracking-[0.16em] text-[#1f2521] transition hover:text-[#d96842] sm:text-lg"
                >
                    <span class="footer-storyline-mark">STORYLINE</span>
                    <span class="font-normal normal-case tracking-[0.04em] text-[#d96842]">studio</span>
                </a>
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#d96842]">{{ t('contactAvailable') }}</p>
                <p class="mt-3 text-base text-[#1f2521]/70">{{ t('footerText') }}</p>
            </div>

            <div class="flex flex-col items-start gap-4 sm:items-end">
                <a
                    href="mailto:aangelevski6@gmail.com"
                    class="text-base text-[#1f2521] underline decoration-[#d96842]/60 underline-offset-4 transition hover:text-[#d96842]"
                >
                    aangelevski6@gmail.com
                </a>
                <a
                    href="tel:+38978232088"
                    class="text-xl font-semibold tracking-[0.04em] text-[#d96842] transition hover:text-[#1f2521] sm:text-2xl"
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
    -webkit-text-stroke: 1px #1f2521;
}
</style>

<script setup>
import { ref, watch } from 'vue';
import { useLanguage } from '~/composables/useLanguage'

const route = useRoute();
const { t, locale } = useLanguage();

const form = ref({
  name: '',
  email: '',
    service: '',
  message: ''
});

const isSubmitting = ref(false);
const statusMessage = ref('');
const isSuccess = ref(false);

watch(
    () => route.query.service,
    (service) => {
        if (typeof service === 'string' && service.trim()) {
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
    }
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
        service: form.value.service,
        message: form.value.message,
        subject: `New ${form.value.service} Inquiry from ${form.value.name}`
      })
    });

    const result = await response.json();

    if (result.success) {
      isSuccess.value = true;
      statusMessage.value = 'Thank you! Your message has been sent directly to my email.';
    form.value = { name: '', email: '', service: '', message: '' }; // Clear inputs
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