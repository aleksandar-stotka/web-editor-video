<template>
    <main class="projects-page">
        <NuxtLink to="/" class="home-link">
            <span aria-hidden="true">&#8592;</span>
            Back home
        </NuxtLink>

        <section class="projects-intro">
            <p class="eyebrow">Selected work</p>
            <h1>Selected Work</h1>
            <p class="intro-copy">A selection of video editing projects across advertising, music, documentary, and digital media..</p>
        </section>

        <section class="video-grid" aria-label="Project videos">
            <article v-for="(video, index) in projectVideos" :key="video" class="video-card">
                <div class="video-frame">
                    <iframe
                        :src="getEmbedUrl(video)"
                        :title="`Project video ${index + 1}`"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                        class="youtube-iframe"
                    ></iframe>
                </div>
                <p class="video-label">Project film {{ String(index + 1).padStart(2, '0') }}</p>
            </article>
        </section>
    </main>
</template>

<script setup lang="ts">
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

function getEmbedUrl(url: string) {
    if (url.includes('watch?v=')) {
        const videoId = url.split('watch?v=')[1]?.split('&')[0] ?? ''
        return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
    }

    if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1]?.split('?')[0] ?? ''
        return `https://www.youtube-nocookie.com/embed/${videoId}?rel=0`
    }

    if (url.includes('embed/')) {
        return url
    }

    return url
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

.video-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    max-width: 54rem;
    margin: 0 auto;
}

.video-card {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.video-frame {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    overflow: hidden;
    border-radius: 1rem;
    background: #111;
    box-shadow: 0 12px 24px rgba(31, 37, 33, 0.08);
}

.youtube-iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
}

.video-label {
    margin: 0;
    color: var(--muted);
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
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

    .video-grid {
        grid-template-columns: 1fr;
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
