<template>
    <main class="projects-page">
        <NuxtLink to="/" class="home-link">
            <span aria-hidden="true">&#8592;</span>
            Back home
        </NuxtLink>

        <section class="projects-intro">
            <p class="eyebrow">Selected work</p>
            <h1>Projects</h1>
            <p class="intro-copy">A moving selection of recent work, experiments, and visual studies.</p>
        </section>

        <section class="slider" aria-label="Project videos">
            <div class="slider-header">
                <p class="slide-count">{{ String(activeIndex + 1).padStart(2, '0') }} / {{ String(projectVideos.length).padStart(2, '0') }}</p>
                <div class="slider-controls">
                    <button type="button" aria-label="Previous project" class="slider-button" @click="showPrevious">
                        <span aria-hidden="true">&#8592;</span>
                    </button>
                    <button type="button" aria-label="Next project" class="slider-button" @click="showNext">
                        <span aria-hidden="true">&#8594;</span>
                    </button>
                </div>
            </div>

            <div class="video-container">
                <iframe
                    :src="embedUrl"
                    :title="`Project video ${activeIndex + 1}`"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    class="youtube-iframe"
                ></iframe>
            </div>

            <div class="slider-footer">
                <div class="slider-dots" aria-label="Choose a project video">
                    <button
                        v-for="(video, index) in projectVideos"
                        :key="video"
                        type="button"
                        :class="['slider-dot', { active: activeIndex === index }]"
                        :aria-label="`Show project video ${index + 1}`"
                        :aria-current="activeIndex === index ? 'true' : undefined"
                        @click="activeIndex = index"
                    ></button>
                </div>
                <p class="slide-label">Project film {{ String(activeIndex + 1).padStart(2, '0') }}</p>
            </div>
        </section>
    </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const projectVideos = [
    'https://youtu.be/rPwZb_nr0P4?si=nzVQKnHr3_hDNAht',
    'https://youtu.be/8cfWt3t8o8s?si=sSPFiXxv7l_SO_LQ',
    'https://youtu.be/ObcWjd3eyps?si=y0IIzo9sMdpvmV8a',
    'https://youtu.be/ZLKsOn235u8?si=KRhibq1DzTlttI5I',
    'https://youtu.be/JbL_nv5gwXQ?si=kmGIF2wc0t2kJaZN',
    'https://youtu.be/1L0Eb1vnXsQ?si=Ye3t2ZWhBJmhUpne',
    'https://youtu.be/ro_Da05e7e0?si=-Es5YTCI7_cbAqZ7',
    'https://youtu.be/5G-5AverTiQ?si=xatz8qzQ769o15E5',
    'https://youtu.be/Kga4wZup_vc?si=LgmUKK3sHAk11spc',
    'https://youtu.be/NJCpue0xDJ4?si=CEGZRHRP15m4Ytx5',
    'https://youtu.be/vOaGkt87UHY?si=MayaeP7DEahlP0ru',
    'https://youtu.be/p3kUSdxnUTs?si=kyubSVwB1BDYA-CO',
    'https://youtu.be/4BC-v0qtKkM?si=MgC-4ZhRu1glQ0up',
]

const activeIndex = ref(0)
const rawYoutubeUrl = computed(() => projectVideos[activeIndex.value])

// Turn the active YouTube link into a privacy-friendly embed link.
const embedUrl = computed(() => {
    const url = rawYoutubeUrl.value
    let videoId = ''

    if (url.includes('watch?v=')) {
        videoId = url.split('watch?v=')[1]?.split('&')[0] ?? ''
    } else if (url.includes('youtu.be/')) {
        videoId = url.split('youtu.be/')[1]?.split('?')[0] ?? ''
    } else if (url.includes('embed/')) {
        return url
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
})

function showPrevious() {
    activeIndex.value = (activeIndex.value - 1 + projectVideos.length) % projectVideos.length
}

function showNext() {
    activeIndex.value = (activeIndex.value + 1) % projectVideos.length
}
</script>

<style scoped>
.projects-page {
    --ink: #1f2521;
    --muted: #70786f;
    --line: #d9ddd5;
    --accent: #d96842;
    min-height: 100vh;
    overflow-x: hidden;
    padding: clamp(3rem, 5vw, 4.5rem) clamp(1.25rem, 7vw, 8rem);
    color: var(--ink);
    background: #f1f0e9;
}

.home-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 auto 2.5rem;
    color: var(--muted);
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 180ms ease, transform 180ms ease;
}

.home-link:hover {
    color: var(--accent);
    transform: translateX(-3px);
}

.projects-intro {
    display: grid;
    grid-template-columns: minmax(10rem, 0.7fr) minmax(0, 1.8fr);
    align-items: end;
    gap: 2rem;
    max-width: 54rem;
    margin: 0 auto clamp(3rem, 7vw, 6rem);
}

.eyebrow,
.slide-count,
.slide-label {
    margin: 0;
    color: var(--muted);
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

h1 {
    margin: 0;
    font-size: clamp(2.75rem, 6vw, 5rem);
    font-weight: 500;
    line-height: 0.75;
}

.intro-copy {
    max-width: 15rem;
    margin: 0 0 0 auto;
    color: var(--muted);
    font-size: 0.78rem;
    line-height: 1.6;
}

.slider {
    max-width: 54rem;
    margin: 0 auto;
}

.slider-header,
.slider-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.slider-header {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--line);
}

.slider-controls {
    display: flex;
    gap: 0.5rem;
}

.slider-button {
    display: grid;
    width: 2.75rem;
    height: 2.75rem;
    cursor: pointer;
    place-items: center;
    border: 1px solid var(--ink);
    border-radius: 50%;
    color: var(--ink);
    background: transparent;
    font-size: 1.1rem;
    transition: color 180ms ease, background 180ms ease, transform 180ms ease;
}

.slider-button:hover {
    color: #fff;
    background: var(--accent);
    border-color: var(--accent);
    transform: translateY(-2px);
}

.video-container {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    background: #111;
}

.youtube-iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

.slider-footer {
    padding-top: 1.25rem;
}

.slider-dots {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
}

.slider-dot {
    width: 2.5rem;
    height: 0.25rem;
    padding: 0;
    cursor: pointer;
    border: 0;
    background: var(--line);
    transition: background 180ms ease, width 180ms ease;
}

.slider-dot.active {
    width: 4rem;
    background: var(--accent);
}

@media (max-width: 640px) {
    .projects-page {
        padding: 2.5rem 1rem 3rem;
    }

    .projects-intro {
        display: block;
        margin-bottom: 2.5rem;
    }

    .eyebrow {
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: clamp(2.75rem, 15vw, 4rem);
    }

    .intro-copy {
        margin: 1.25rem 0 0;
    }

    .slider-header {
        padding-bottom: 0.75rem;
    }

    .slider-button {
        width: 2.25rem;
        height: 2.25rem;
        font-size: 0.95rem;
    }

    .slider-footer {
        align-items: flex-start;
        gap: 1rem;
        flex-direction: column;
    }

    .slider-dots {
        gap: 0.4rem;
    }

    .slider-dot {
        width: 1.5rem;
    }

    .slider-dot.active {
        width: 2.5rem;
    }
}

@media (min-width: 641px) and (max-width: 900px) {
    .projects-page {
        padding-right: 2.5rem;
        padding-left: 2.5rem;
    }

    .projects-intro {
        grid-template-columns: minmax(8rem, 0.7fr) minmax(0, 1.8fr);
        gap: 1.5rem;
    }
}
</style>
