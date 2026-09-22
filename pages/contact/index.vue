<template>
    <section id="contact" class="pb-10 pt-8">
        <div class="rounded-[24px] border border-[#1f2521]/10 p-6 sm:p-8">
            <p class="text-sm uppercase tracking-[0.2em] text-[#70786f]">Contact</p>

            <div class="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                    <h2 class="text-2xl font-light tracking-[-0.04em] text-[#1f2521] sm:text-3xl">
                        Let’s build something worth watching.
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
                            <span class="mb-2 block text-base text-[#1f2521]">Name</span>
                            <input
                                v-model="form.name"
                                type="text"
                                required
                                placeholder="Your name"
                                class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#d96842]/70 focus:border-[#d96842] focus:outline-none"
                            />
                        </label>

                        <label class="block text-sm text-[#1f2521] sm:col-span-1">
                            <span class="mb-2 block text-base text-[#1f2521]">Email</span>
                            <input
                                v-model="form.email"
                                type="email"
                                required
                                placeholder="Your email"
                                class="w-full rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#d96842]/70 focus:border-[#d96842] focus:outline-none"
                            />
                        </label>

                        <label class="block text-sm text-[#1f2521] sm:col-span-2">
                            <span class="mb-2 block text-base text-[#1f2521]">Choose a package</span>
                            <select
                                v-model="form.service"
                                class="w-full appearance-none rounded-full border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] focus:border-[#d96842] focus:outline-none"
                            >
                                <option disabled value="">Select a service</option>
                                <option value="Short-Form">Short-Form</option>
                                <option value="YouTube & Corporate">YouTube & Corporate</option>
                                <option value="Documentary & Custom">Documentary & Custom</option>
                            </select>
                        </label>

                        <label class="block text-sm text-[#1f2521] sm:col-span-2">
                            <span class="mb-2 block text-base text-[#1f2521]">Project</span>
                            <textarea
                                v-model="form.message"
                                required
                                rows="5"
                                placeholder="Tell me about your idea"
                                class="w-full resize-none rounded-[22px] border border-[#1f2521]/15 bg-white/70 px-5 py-4 text-base text-[#1f2521] placeholder:text-[#d96842]/70 focus:border-[#d96842] focus:outline-none"
                            />
                        </label>
                    </div>

                    <button
                        type="submit"
                        :disabled="isSubmitting"
                        class="mt-6 inline-flex items-center justify-center rounded-full border border-[#1f2521]/15 bg-[#1f2521] px-6 py-3.5 text-base font-medium text-[#f1f0e9] transition hover:bg-[#1f2521]/90 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        <span v-if="isSubmitting">Sending...</span>
                        <span v-else>Send inquiry</span>
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
                <p class="text-sm font-semibold uppercase tracking-[0.2em] text-[#d96842]">Available for calls</p>
                <p class="mt-3 text-base text-[#1f2521]/70">Let’s talk about your next video project.</p>
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

<script setup>
import { ref, watch } from 'vue';

const route = useRoute();

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
        if (service && (!form.value.message || form.value.message.startsWith('I’m interested in the '))) {
            form.value.message = `I’m interested in the ${service} package.`;
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