<template>
<div>
    <div class="main-body pt-1">
        <div class="container">
        <div class="home-slider mt-3 px-2 pb-5">
            <img class="slider-img rounded mx-auto d-block" src="@/static/img/abhi-sydney.jpg" alt="Abhi in Sydney">
            <div class="mt-4">
                <p class="fs-3 worksans mb-0 fw-500">Hi,</p>
            </div>
            <div class="mt-0">
                <p class="fs-2 worksans fw-semibold mb-0">I'm Sandhya's H</p>
            </div>
            <div class="mt-2">
                <p class="fs-6 worksans mb-0">and I like to design websites and code applications.</p>
            </div>
            <div class="mt-4">
            <NuxtLink class="btn btn-danger worksans text-white fw-500 ar-red text-center" to="/resume">Resume</NuxtLink>
            <NuxtLink class="btn btn-outline-dark fw-500" to="/projects">Projects</NuxtLink>
            </div>
        </div>
        </div>
        <div class="bg-light-gray container py-5">
            <div class="text-center">
                <h3 class="worksans fw-semibold mb-4">My Skills</h3>
            </div>
            <div class="bg-white p-4 rounded-3 mb-3">
                <h5 class="worksans fw-semibold">Frontend</h5>
                <hr style="color:var(--abhirj-blue);">
                <p class="worksans">HTML, CSS, JavaScript, Vue.js & Nuxt.js, Bootstrap & Tailwind CSS.</p>
            </div>
            
            <div class="bg-white p-4 rounded-3 mb-3">
                <h5 class="worksans fw-semibold">Backend</h5>
                <hr style="color:var(--abhirj-blue);">
                <p class="worksans">Python, C#, PHP, MySQL & MariaDB, WordPress, Drupal.</p>
            </div>

            <div class="bg-white p-4 rounded-3 mb-3">
                <h5 class="worksans fw-semibold">Tools</h5>
                <hr style="color:var(--abhirj-blue);">
                <p class="worksans">AWS, Git, NGINX, Linux System Administration (Ubuntu), Figma, FFMPEG, CDN.</p>
            </div>
        </div>

        <div class="container py-5">
            <div class="text-center">
                <h3 class="worksans fw-semibold mb-4">Recent Projects</h3>
            </div>
            <div class="bg-light- p-4 rounded-3 mb-3">
                <p class="worksans fw-semibold fs-5 mb-2">UNL Lockups Factory</p>
                <p class="worksans fw-500 mb-4">University Of Nebraska-Lincoln | 2022</p>
                <p class="worksans">A PHP Symfony web application for generating custom on-demand university logos in thirty different formats.</p>
                <p class="worksans fw-500 d-inline" style="font-size: 14px;">Tech Stack:</p>
                <p class="worksans d-inline" style="font-size: 14px;">HTML, CSS, PHP, JavaScript, Symfony Framework w/ Doctrine ORM.</p>
                <div>
                <a href="https://github.com/abhirijal/lockups_v1" target="_blank" class="btn btn-outline-dark fw-500 mt-3 worksans"><svg class="github-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Github</a>
                </div>
            </div>
                <hr class="mx-4" style="color: var(--abhirj-blue);">
            <div class="bg-light- p-4 rounded-3 mb-3">
                      <p class="worksans fw-semibold fs-5 mb-2">Unity Multiplayer 2D Game</p>
                <p class="worksans fw-500 mb-4">Personal | 2022</p>
                <p class="worksans">An adventure multiplayer game that has two levels (as of now) and can be played online with friends.</p>
                <p class="worksans fw-500 d-inline" style="font-size: 14px;">Tech Stack:</p>
                <p class="worksans d-inline" style="font-size: 14px;">Unity, C#, Mirror Multiplayer Library.</p>
                <div>
                <a href="https://github.com/abhirijal/Unity-2D-Multiplayer-Mirror" target="_blank" class="btn btn-outline-dark fw-500 mt-3 worksans"><svg class="github-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> Github</a>
                </div>
            </div>
            <div class="text-center">
            <NuxtLink class="btn btn-danger worksans text-white fw-500 ar-red text-center" to="/projects">View All</NuxtLink>

            </div>
        </div>

        <div class="container">
            <div class="bg-blue rounded-3 p-4">
            <p class="worksans text-white fw-semibold fs-4">Let's get in touch.</p>
            <button type="button" class="btn btn-outline-light worksans text-white fw-500">Contact Me</button>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "HomeSlider"
}
</script>

<style>

</style>